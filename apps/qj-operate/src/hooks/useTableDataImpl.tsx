import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormInstance, Popconfirm, Space } from 'antd';
import { NamePath } from '@brushes/form';
import { produce } from 'immer';
import { QjIcon } from '@brushes/share-resource';
import { formConfigImpl } from 'operate-common';

const OperateJsx = ({ record, onDelete, editor }: { record: any; onDelete: any; editor: any }) => {
  return (
    <Space size={'large'}>
      <QjIcon onClick={() => editor(record)} name={'icon-bianji'} />
      <Popconfirm title="确定要删除?" data-type={record.id} onConfirm={onDelete}>
        <QjIcon name={'icon-shanchu'} />
      </Popconfirm>
    </Space>
  );
};

export const useTableDataImpl = (form: FormInstance, name: NamePath) => {
  const [dataSource, setDataSource] = useState<Array<any>>([]);
  const [initialValues, setInitValue] = useState<any>({});
  const [isModalOpen, setVisible] = useState(false);
  const formConfigData = useRef<Array<any>>([]);

  useEffect(() => {
    setDataSource(form.getFieldValue(name) || []);
  }, []);

  useEffect(() => {
    form.setFieldValue(name, dataSource);
  }, [dataSource]);

  const columnsQuery = useMemo(() => {
    return [
      {
        title: '名称',
        dataIndex: 'label',
        key: 'label',
        editable: true,
        width: 100,
        formConfig: {
          rules: [{ required: true, message: '输入名称，长度不超过5', max: 5 }]
        }
      },
      {
        title: 'Code',
        dataIndex: 'value',
        key: 'value',
        editable: true,
        formConfig: {
          rules: [{ required: true, message: '请输入code' }]
        }
      },
      {
        title: '默认参数',
        width: 75,
        dataIndex: 'defaultKey',
        key: 'defaultKey',
        editable: true,
        formConfig: {
          type: 'checkboxGroup'
        },
        render: (_: any, record: any) => <div>{record.defaultKey === true ? '是' : '否'}</div>
      },
      {
        title: '操作',
        width: 60,
        key: 'action',
        dataIndex: 'action',
        render: (_: any, record: any) => {
          return (
            <>
              {!record.virtualId ? (
                <QjIcon style={{ fontSize: 14 }} onClick={() => editor(record)} name={'icon-bianji'} />
              ) : (
                <OperateJsx editor={editor} record={record} onDelete={() => onDelete(record.virtualId)} />
              )}
            </>
          );
        }
      }
    ];
  }, [dataSource]);

  const editor = (record: any) => {
    formConfigData.current = formConfigImpl(dataSource, true);
    setInitValue(record);
    setVisible(true);
  };

  const onDelete = (id: string) => {
    const nextState = produce(dataSource, (draftState) => {
      const index = draftState.findIndex((item) => item.virtualId === id);
      draftState.splice(index, 1);
    });
    setDataSource(nextState);
  };

  const handleAdd = () => {
    formConfigData.current = formConfigImpl(dataSource);
    setInitValue({
      id: new Date().valueOf() + '',
      value: '',
      label: '',
      defaultKey: false
    });
    setVisible(true);
  };

  const onSubmit = (values: any, suc: Function) => {
    const nextState = produce(dataSource, (draftState) => {
      if (initialValues.value) {
        const newItem = { ...initialValues, ...values };
        const index = draftState.findIndex((item) => item.id === initialValues.id);
        draftState[index] = newItem;
      } else {
        draftState.push({
          id: new Date().valueOf() + '',
          virtualId: new Date().valueOf() + '',
          ...values
        });
      }
    });
    setDataSource(nextState);
    suc();
    handleCancel();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return {
    dataSource,
    handleAdd,
    isModalOpen,
    handleCancel,
    onSubmit,
    columnsQuery,
    initialValues,
    formConfigData
  };
};
