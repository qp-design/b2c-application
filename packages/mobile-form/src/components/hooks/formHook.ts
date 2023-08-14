import { useState } from 'react';
import { NamePath, submitType, TransformType } from '../types';
import { FormInstance } from 'antd-mobile/es/components/form';
import { Toast } from 'antd-mobile';
import { useImmutableCallback } from '@/util';
import { useDataComputed } from './useDataComputed';

export function useFormImpl(
  form: FormInstance,
  onSubmit: (...args: submitType) => void,
  transformSubmitDataConfig: Array<TransformType> = []
) {
  const [loading, setIsSubmitting] = useState<boolean>(false);

  const computedSubmitValues = useDataComputed(transformSubmitDataConfig);

  const onFinish = useImmutableCallback(async (values: any) => {
    setIsSubmitting(true);
    try {
      const value = await computedSubmitValues(values);
      onSubmit(
        value,
        (msg) => {
          const { setFieldsValue, getFieldsValue } = form;
          setIsSubmitting(false);
          setFieldsValue(getFieldsValue()); // reset accountForm touched state
          if (msg) {
            Toast.show({
              icon: 'success',
              content: msg
            });
          }
        },
        () => {
          setIsSubmitting(false);
        }
      );
    } catch (err: any) {
      Toast.show({
        icon: 'fail',
        content: err.message
      });
      setIsSubmitting(false);
    }
  });

  const onFinishFailed = useImmutableCallback(
    ({ errorFields }: { errorFields: Array<{ name: NamePath }> }) => {
      console.log(52, errorFields);
      // form.scrollToField(errorFields[0].name);
    }
  );

  const resetHandler = useImmutableCallback(() => {
    form.resetFields();
  });

  return {
    onFinish,
    onFinishFailed,
    loading,
    resetHandler,
    computedSubmitValues
  };
}
