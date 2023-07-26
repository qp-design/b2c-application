import React, { memo } from 'react';
import { dynamicFormFields, useImmutableCallback } from '@brushes/form';
import { Form } from 'antd';
import { useLowCodeGraph } from 'qj-shared-library';
import { Pages } from '@/config';

const IndexPage = memo(({ pageConfig }: { pageConfig: any }) => {
  const [form] = Form.useForm();
  const monitorInstance = useLowCodeGraph();

  const callbackImpl = useImmutableCallback((changedValues: any, allValues: any) => {
    monitorInstance.lowCodeGraph.pageConfig = allValues;
    monitorInstance.updateNode({});
  });

  return (
    <Form form={form} onValuesChange={callbackImpl} initialValues={pageConfig}>
      <p style={{ color: '#777' }}>{Pages.info}</p>
      {dynamicFormFields(Pages.formConfig, form)}
    </Form>
  );
});

export default IndexPage;
