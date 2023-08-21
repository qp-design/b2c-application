import React, { type FC } from 'react';
import { Button, type ButtonProps } from 'antd';
import { QjIcon } from '@brushes/share-resource';

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
      icon={<QjIcon style={{ fontSize: 14, fontWeight: 500, color: '#aaa' }} name={'icon-zengjia'} />}
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
