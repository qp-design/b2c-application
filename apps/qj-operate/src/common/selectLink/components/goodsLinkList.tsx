import React from 'react';
import Table from 'antd/es/table';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { useGoodsLink } from '@/common/selectLink/hooks';

const GoodsLinkList = ({ handleChoose, charArr }: any) => {
  const { data, columns, total, pageSize, changePage, loading, onChange, onFinish } = useGoodsLink({ handleChoose });

  return (
    <>
      <Form layout="inline" onFinish={onFinish} style={{ marginBottom: '20px' }}>
        <Form.Item label="搜索商品" name="goods">
          <Input allowClear />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Table
        rowSelection={{
          type: 'radio',
          onChange,
          selectedRowKeys: charArr ? [charArr] : []
        }}
        loading={loading}
        dataSource={data}
        columns={columns.current}
        rowKey={'spuCode'}
        pagination={{ defaultPageSize: pageSize.current, total, onChange: changePage }}
      />
    </>
  );
};

export default GoodsLinkList;
