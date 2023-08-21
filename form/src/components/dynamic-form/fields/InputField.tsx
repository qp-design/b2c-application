import type { FormInstance } from 'antd/es/form';
import Input from 'antd/es/input';
import React, { ReactNode } from 'react';

export default function InputField({
  form,
  addonAfter,
  ...extraProps
}: {
  form?: FormInstance;
  addonAfter?: ((form: FormInstance | undefined) => ReactNode) | undefined;
}) {
  return <Input addonAfter={addonAfter?.(form)} {...extraProps} />;
}
