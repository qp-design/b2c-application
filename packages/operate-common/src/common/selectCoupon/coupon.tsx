import { Button, FormInstance, Space, Table } from 'antd';
import { useCoupon } from '@brushes/operate-webstore';
import { SpacingJsx } from '../spacing';
import { SearchMaterials } from '../search';
import { defaultFormConfig, defaultColumns } from './config';
import React, { useRef } from 'react';
import { TableRowSelection } from 'antd/es/table/interface';
import { useLowCodeGraph } from '@brushes/qj-shared-library';

export const CouponJsx = ({
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
  } = useCoupon(name + '', { pbCode: '0004', dataState: 1 });
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
        drawerTitle={'优惠券配置'}
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
              rowKey={'promotionCode'}
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
