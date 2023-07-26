import { Button, FormInstance, Modal, Table } from 'antd';
import { DynamicForm, FieldType, NamePath } from '@brushes/form';
import React, { useEffect, useState } from 'react';
import { useTableDataImpl } from '@/hooks';

// 新增编辑的表单
export const formConfigImpl = (dataSource: Array<any>, isEditor: boolean = false) => [
  {
    type: 'text',
    name: 'label',
    label: '名称',
    rules: [
      {
        required: true,
        message: ''
      },
      () => ({
        validator(_: any, value: any) {
          if (/^[\u4e00-\u9fa5\d]{1,8}$/.test(value)) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('请输入长度不超过8的中文或数字'));
        }
      })
    ]
  },
  {
    type: 'text',
    name: 'value',
    label: 'Code',
    rules: [
      {
        required: true
      },
      ({ getFieldValue }: FormInstance) => ({
        validator(_: any, value: any) {
          if (isEditor) {
            return Promise.resolve();
          }
          if (/^[a-zA-Z_]+$/.test(value) && !dataSource.some((item) => item.value === getFieldValue('value'))) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('请输入字母或者下滑线，且不重复'));
        }
      })
    ],
    extraProps: {
      disabled: isEditor
    }
  },
  {
    type: 'switch',
    name: 'defaultKey',
    label: '默认参数',
    extraProps: {
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }
  }
];
// store table header
const columnsStore = [
  {
    title: '名称',
    dataIndex: 'label',
    key: 'label'
  },
  {
    title: 'Code',
    dataIndex: 'value',
    key: 'value'
  }
];

export const transformSubmitDataConfig = [
  {
    from: 'pageQuery',
    to: 'pageQuery',
    format: (preValue: any) => {
      return preValue.map((item: any) => {
        const { id, virtualId, ...rest } = item;
        return {
          virtualId: '',
          id: id || virtualId,
          ...rest
        };
      });
    }
  }
];

export const formConfig: Array<FieldType> = [
  {
    name: 'pageQuery',
    type: 'slot',
    label: '页面参数',
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
    extraProps: {
      render: ({ form, name }: { form: FormInstance; name: NamePath }) => {
        const {
          dataSource,
          handleAdd,
          isModalOpen,
          handleCancel,
          onSubmit,
          columnsQuery,
          initialValues,
          formConfigData
        } = useTableDataImpl(form, name);

        return (
          <>
            <Button onClick={handleAdd} style={{ marginBottom: 8 }}>
              新增
            </Button>
            <Table
              style={{ marginBottom: 10 }}
              bordered
              size={'small'}
              dataSource={dataSource}
              rowKey={'id'}
              pagination={false}
              columns={columnsQuery}
            />
            <Modal title="页面参数" open={isModalOpen} onCancel={handleCancel} footer={null}>
              <DynamicForm
                key={initialValues.id}
                initialValues={initialValues}
                name={'dataOperate'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
                saveText={'保存'}
                onSubmit={onSubmit}
                fields={formConfigData.current}
              />
            </Modal>
          </>
        );
      }
    }
  },
  {
    name: 'pageStore',
    type: 'slot',
    label: '页面Store',
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
    extraProps: {
      render: ({ form, name }: { form: FormInstance; name: NamePath }) => {
        const [data, setData] = useState([]);
        useEffect(() => {
          setData(form.getFieldValue(name));
        }, []);
        return (
          <Table bordered size={'small'} dataSource={data} rowKey={'value'} pagination={false} columns={columnsStore} />
        );
      }
    }
  }
];
