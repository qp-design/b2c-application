import { dynamicFormFields } from '@/components/dynamicFormFields';
import { FieldType } from '@/components/types';
import { FormInstance } from 'antd-mobile/es/components/form';

export default function ComplexFields({
  innerForm = [],
  form
}: {
  form: FormInstance;
  innerForm?: Array<FieldType>;
}) {
  return <>{dynamicFormFields(innerForm, form)}</>;
}
