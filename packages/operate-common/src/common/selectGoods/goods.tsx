import { Button, FormInstance, Space, Table } from 'antd';
import { useGoods } from '@brushes/operate-webstore';
import { SpacingJsx } from '../spacing';
import { goodsQuery } from 'qj-b2c-api';
import { queryRsSkuPageForRetGoods } from 'qj-b2b-api';
import { SearchMaterials } from '../search';
import { defaultFormConfig, defaultColumns } from './config';
import React, { useRef } from 'react';
import { TableRowSelection } from 'antd/es/table/interface';
import { useLowCodeGraph } from '@brushes/qj-shared-library';

export const GoodsJsx = ({
  form,
  name = '',
  handleCancel
}: {
  form: FormInstance;
  name: string;
  handleCancel: Function;
}) => {
  const monitorInstance = useLowCodeGraph();
  const flag = window.location.href.includes('platform=B2B');
  const {
    data = {},
    pagination,
    isLoading,
    queryImpl,
    onChange
  } = useGoods(
    name + '',
    { pbCode: '0004', dataState: 2 },
    flag ? queryRsSkuPageForRetGoods : goodsQuery
  );
  const ref = useRef<Array<string | number>>([]);
  // rowSelection objects indicates the need for row selection
  const rowSelection: TableRowSelection<any> = {
    onChange: (selectedRowKeys) => {
      //@ts-ignore
      ref.current = selectedRowKeys;
    },
    defaultSelectedRowKeys: form.getFieldValue(name)
  };

  const saveImpl = () => {
    form.setFieldValue(name, ref.current);
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
    handleCancel();
  };

  return (
    <>
      <SearchMaterials
        defaultColumns={defaultColumns}
        defaultFormConfig={defaultFormConfig}
        queryImpl={queryImpl}
        drawerTitle={'商品模块配置'}
        render={(height: number, columns: Array<any>) => (
          <SpacingJsx>
            <Table
              loading={isLoading}
              scroll={{
                scrollToFirstRowOnChange: true,
                y: height - 45
              }}
              sticky
              rowSelection={{ ...rowSelection }}
              onChange={onChange}
              rowKey={flag ? 'skuNo' : 'goodsCode'}
              columns={columns}
              dataSource={data.list}
              pagination={pagination}
            />
          </SpacingJsx>
        )}
      />
      <div style={{ textAlign: 'right', marginTop: -20, paddingBottom: 20 }}>
        <Space align={'end'}>
          <Button onClick={() => handleCancel()}>取消</Button>
          <Button type="primary" onClick={saveImpl}>
            保存
          </Button>
        </Space>
      </div>
    </>
  );
};
