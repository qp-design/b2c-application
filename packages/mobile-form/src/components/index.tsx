import { Form, Button, FormProps } from 'antd-mobile';
import React, {useEffect, useState, memo, ReactNode} from 'react';
import { FormInstance } from 'antd-mobile/es/components/form'
import {
  Action,
  FieldType,
  submitType,
  TransformType
} from '@/components/types';
import { dynamicFormFields } from '@/components/dynamicFormFields';
import { useFormImpl } from '@/components/hooks';

export interface FormAddProps extends FormProps {
  name?: string;
  footer?: ReactNode;
  initialValues?: { [v: string]: unknown };
  onSubmit: (...args: submitType) => void;
  fields: Array<FieldType>;
  transformSubmitDataConfig?: Array<TransformType>;
  otherAction?: Array<Action>;
}

const DynamicFormJsx = ({
  name = 'basic',
  footer,
  layout = 'horizontal',
  onSubmit,
  fields: defaultFields,
  transformSubmitDataConfig = [],
  otherAction = [],
  ...restFormConfig
}: FormAddProps) => {
  const [fields, setFormFields] = useState<Array<FieldType>>([]);
  const [form] = Form.useForm();

  const {
    loading,
    onFinish,
    onFinishFailed,
  } = useFormImpl(form, onSubmit, transformSubmitDataConfig);

  useEffect(() => {
    setFormFields(defaultFields);
  }, [defaultFields]);

  return (
    <Form
      footer={
        footer ? footer : <Button loading={loading} block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
      {...{
        layout,
        form,
        onFinish,
        onFinishFailed,
        name,
        ...restFormConfig
      }}
    >
      {dynamicFormFields(fields, form)}
    </Form>
  );
};

export const NoFormDynamic = memo(
  ({ fields, form }: { fields: Array<FieldType>; form: FormInstance }) => (
    <>{dynamicFormFields(fields, form)}</>
  )
);

export const DynamicForm = memo(DynamicFormJsx);

export * from './dynamicFormFields';
export * from './hooks/formHook';
export * from './types';
