import Button from 'antd/es/button';
import Space from 'antd/es/space';
import Table from 'antd/es/table';
import type { FormInstance } from 'antd/es/form';
import { useGoods } from '@brushes/webstore';
import { SpacingJsx } from '@/common';
import { SearchMaterials } from '@brushes/webmaterial';
import { defaultFormConfig, defaultColumns } from './config';
import { useRef } from 'react';
import { TableRowSelection } from 'antd/es/table/interface';
import { useLowCodeGraph } from 'qj-shared-library';

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
  const {
    data = {},
    pagination,
    isLoading,
    queryImpl,
    onChange
  } = useGoods(name + '', { pbCode: '0004', dataState: 2 });
  const ref = useRef<Array<string | number>>([]);
  // rowSelection objects indicates the need for row selection
  const rowSelection: TableRowSelection<any> = {
    onChange: (selectedRowKeys) => {
      ref.current = selectedRowKeys;
    },
    defaultSelectedRowKeys: form.getFieldValue(name)
  };

  const saveImpl = () => {
    console.log(26, name, ref.current);
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
              rowKey={'goodsCode'}
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
