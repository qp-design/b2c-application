import Input from 'antd/es/input';
import React from 'react';

const { Search } = Input;

export default function SearchField({ ...extraProps }) {
  return <Search {...extraProps} />;
}
