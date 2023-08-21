import { dynamicFormFields } from '@/components/dynamicFormFields';
import { FieldType } from '@/components/types';
import type { FormInstance } from 'antd/es/form';
import React from 'react';

export default function ComplexFields({
  innerForm = [],
  form
}: {
  form: FormInstance;
  innerForm?: Array<FieldType>;
}) {
  return <>{dynamicFormFields(innerForm, form)}</>;
}
