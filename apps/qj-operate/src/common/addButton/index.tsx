import React, { type FC } from 'react';
import { Button, type ButtonProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface AddButtonProps {
  add: ButtonProps['onClick'];
  title?: string;
  type?: ButtonProps['type'];
}
const AddButton: FC<AddButtonProps> = ({ add, title = '添加链接', type = 'primary' }) => {
  return (
    <Button
      type={type}
      block
      icon={<PlusOutlined />}
      style={{
        marginBottom: 24
      }}
      onClick={add}
    >
      {title}
    </Button>
  );
};

export default AddButton;
