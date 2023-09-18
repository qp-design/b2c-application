import { Button, FormInstance, Modal, Table } from 'antd';
import { DynamicForm, FieldType, NamePath } from '@brushes/form';
import React, { useEffect, useState } from 'react';
import { useTableDataImpl } from '@/hooks';

// 新增编辑的表单

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
            <Modal
              title="页面参数"
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null}
            >
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
          <Table
            bordered
            size={'small'}
            dataSource={data}
            rowKey={'value'}
            pagination={false}
            columns={columnsStore}
          />
        );
      }
    }
  }
];
