import { useDynamicTableHeight, useMaretialConfigImpl } from '@brushes/operate-webstore';
import { Form, Button, Drawer } from 'antd';
import { QjIcon } from '@brushes/share-resource';
import { useFormImpl, dynamicFormFields, DynamicForm } from '@brushes/form';
import { SpacingJsx } from '../spacing';
import React from 'react';

interface SearchInterface {
  searchText?: string;
  drawerTitle?: string;
  saveText?: string;
  defaultColumns: Array<any>;
  defaultFormConfig: Array<any>;
  queryImpl: () => void;
  render: any;
  labelCol?: { span: number };
  wrapperCol?: { span: number };
}
export const SearchMaterials: React.FC<SearchInterface> = ({
  saveText = '更新配置',
  searchText = '查询',
  drawerTitle = '配置更新',
  defaultColumns,
  defaultFormConfig,
  queryImpl,
  labelCol = { span: 6 },
  wrapperCol = { span: 18 },
  render
}) => {
  const { height = 0, measuredRef } = useDynamicTableHeight();
  const [form] = Form.useForm();

  const { configFormFields, formConfig, setClose, close, changeImpl, tableColumns, formInitialValue } =
    useMaretialConfigImpl(defaultColumns, defaultFormConfig);

  const { loading, onFinish, onFinishFailed } = useFormImpl(form, queryImpl);

  return (
    <div className={'container'} ref={measuredRef}>
      <SpacingJsx padding={20} paddingBottom={0}>
        <Form
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          layout={'inline'}
          form={form}
          className="search-material-search"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <div className={'search-material-item'}>{dynamicFormFields(formConfig, form)}</div>
          <div className={'operate'}>
            <Button loading={loading} type="primary" htmlType="submit">
              {searchText}
            </Button>
            <Button danger onClick={() => setClose(true)}>
              <QjIcon name={'icon-caozuojilu'} />
            </Button>
          </div>
        </Form>
        <Drawer title={drawerTitle} placement={'right'} width={500} onClose={() => setClose(false)} open={close}>
          <DynamicForm
            initialValues={formInitialValue.current}
            onSubmit={changeImpl}
            fields={configFormFields.current}
            saveText={saveText}
          />
        </Drawer>
      </SpacingJsx>
      {render(height, tableColumns)}
    </div>
  );
};
