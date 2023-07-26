import React, { Fragment } from 'react';
import { dynamicFormFields } from '@brushes/form';
import { Form } from 'antd';
import { NodeGraph } from 'qj-shared-library';
import { useMaterialsOperate } from '@/hooks';
import { formConfigType } from '@/type/formConfig';

const IndexReact = ({ defaultValue }: { defaultValue: NodeGraph }) => {
  const [form] = Form.useForm();
  const {
    computedConfig = [],
    title,
    info,
    callbackImpl,
    initialValues,
  } = useMaterialsOperate(defaultValue, form);

  return (
    <Form form={form} onValuesChange={callbackImpl} initialValues={initialValues}>
      <div className={'inner-operate'}>
        <div className={'title'}>{title}</div>
        <p className={'info'}>{info}</p>
        {computedConfig.map((item: formConfigType, indx: number) => {
          return (
            <Fragment key={indx}>
              {item.title ? (
                <div className={'formWrap'} key={indx}>
                  <h3>{item.title}</h3>
                  {dynamicFormFields(item.formConfig, form)}
                </div>
              ) : (
                dynamicFormFields(item.formConfig, form)
              )}
            </Fragment>
          );
        })}
      </div>
    </Form>
  );
};

export default IndexReact;
