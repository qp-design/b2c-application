import Checkbox from 'antd/es/checkbox';
import React from 'react';

export default function CheckboxField({
  label,
  ...extraProps
}: {
  label?: string;
}) {
  return <Checkbox {...extraProps}>{label}</Checkbox>;
}
