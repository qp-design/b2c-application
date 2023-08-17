import React from 'react';
import Button from 'antd/es/button';
import List from 'antd/es/list';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import { useBaseLink } from '@/common/selectLink/hooks';
import { menu } from '@/common/selectLink/config/constant';

const BaseLink = ({ handleChoose, result }: any) => {
  const { list, setList } = useBaseLink();
  const chooseItem = (item: any) => {
    handleChoose(item);
  };

  const onFinish = ({ page }: any) => {
    const arr = menu.value.filter((item: any) => item.label.indexOf(page) >= 0);
    setList(arr);
  };

  return (
    <div className={'baseLink'}>
      <Form layout="inline" style={{ marginBottom: '20px' }} onFinish={onFinish}>
        <Form.Item label={'页面名称'} name="page">
          <Input allowClear />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
      <List
        style={{ marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}
        bordered
        dataSource={list}
        renderItem={(item) => (
          <List.Item className={'baseLinkItem'}>
            {item.label}
            <Button type={'link'} onClick={chooseItem.bind(null, item)}>
              {result?.value === item.value ? '已选择' : '选择'}
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BaseLink;
