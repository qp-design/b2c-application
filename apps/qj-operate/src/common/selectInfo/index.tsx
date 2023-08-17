import React from 'react';
import Input from 'antd/es/input';
import Form from 'antd/es/form';
import './index.scss';
const FormItem = Form.Item;

const SelectInfo = ({ place = '请选择标题', name }: any) => {
  return (
    <div className={'selectInfo'}>
      <FormItem name={name}>
        <Input placeholder={place} maxLength={6} />
      </FormItem>
    </div>
  );
};

export default SelectInfo;
