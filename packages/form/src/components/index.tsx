import { Form, FormInstance, Space, Button, FormProps } from 'antd';
import { useEffect, useState, memo } from 'react';
import {
  Action,
  FieldType,
  submitType,
  TransformType
} from '@/components/types';
import { dynamicFormFields } from '@/components/dynamicFormFields';
import { useFormImpl } from '@/components/hooks';
import { useImmutableCallback } from '@/util';

export interface FormAddProps extends FormProps {
  saveText?: string;
  name?: string;
  resetText?: string;
  initialValues?: { [v: string]: unknown };
  onSubmit: (...args: submitType) => void;
  fields: Array<FieldType>;
  transformSubmitDataConfig?: Array<TransformType>;
  otherAction?: Array<Action>;
}

const DynamicFormJsx = ({
  saveText,
  resetText,
  name = 'basic',
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
    inProgressStatus,
    onFinish,
    onFinishFailed,
    handlerSubmit,
    resetHandler
  } = useFormImpl(form, onSubmit, transformSubmitDataConfig);

  useEffect(() => {
    setFormFields(defaultFields);
  }, [defaultFields]);

  const renderActions = useImmutableCallback(() => {
    if (otherAction.length === 0) return;
    return otherAction.map(
      ({ key, name, isNeedValidate = false, callback, ...restProps }) => {
        const inProgress = inProgressStatus[key] || false;
        const actionProps = {
          key,
          loading: inProgress,
          onClick: handlerSubmit.bind(null, key, isNeedValidate, callback),
          ...restProps
        };
        return (
          <Button {...actionProps} data-action={key}>
            {name}
          </Button>
        );
      }
    );
  });

  return (
    <Form
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
      {saveText && (
        <Form.Item label=" " colon={false}>
          <Space size={'middle'}>
            <Button loading={loading} type="primary" htmlType="submit">
              {saveText}
            </Button>
            {resetText && <Button onClick={resetHandler}>{resetText}</Button>}
            {renderActions()}
          </Space>
        </Form.Item>
      )}
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
