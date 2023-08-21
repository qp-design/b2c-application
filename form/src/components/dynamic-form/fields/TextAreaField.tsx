import React from 'react';
import Input from 'antd/es/input';

export default function TextAreaField({ ...extraProps }) {
  return <Input.TextArea {...extraProps} />;
}
