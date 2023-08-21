import { Button, FormInstance } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { PageArgsDataType, PageStoreDataType } from '@/common/pageDataFlowTable/config';
export const enum ETableType {
  PAGE_ARGS,
  PAGE_STORE
}
export function usePageDataFlowTable<T>(
  type: keyof typeof ETableType,
  defaultValue: ColumnsType<T>,
  form: FormInstance
) {
  const [data, setData] = useState(defaultValue);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: PageArgsDataType) => record.code === editingKey;
  const edit = (record: PageArgsDataType) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.code);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (code: string) => {
    let row = (await form.validateFields()) as PageArgsDataType;
    const newData = [...data];
    const index = newData.findIndex((item) => code === item.code);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row
      });
      setData(newData);
      setEditingKey('');
    } else {
      Reflect.set(row, 'isDefault', '否');
      newData.push(row);
      setData(newData);
      setEditingKey('');
    }
  };
  const del = (code: string) => {
    const newData = [...data];
    const index = newData.findIndex((item) => item.code === code);
    newData.splice(index, 1);
    setData(newData);
  };
  const columns: ColumnsType<PageArgsDataType> = [
    {
      title: '标题',
      dataIndex: 'title',
      width: 80,
      align: 'center',
      editable: true
    },
    {
      title: 'Code',
      width: 80,
      dataIndex: 'code',
      align: 'center',
      editable: true
    },
    {
      title: '默认参数',
      width: 100,
      dataIndex: 'isDefault',
      align: 'center'
    },
    {
      width: 100,
      title: '操作',
      align: 'center',
      render: (_, record) => {
        const editable = isEditing(record);
        if (record.isDefault === '是') {
          return '';
        } else {
          if (editable) {
            return (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button type={'link'} onClick={() => save(record.code)}>
                  保存
                </Button>
                <Button type={'link'} onClick={cancel}>
                  取消
                </Button>
              </div>
            );
          } else {
            return (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button type={'link'} onClick={() => edit(record)}>
                  编辑
                </Button>
                <Button type={'link'} onClick={() => del(record.code)}>
                  删除
                </Button>
              </div>
            );
          }
        }
      }
    }
  ];
  const pageStoreColumns: ColumnsType<PageStoreDataType> = [
    {
      title: '标题',
      dataIndex: 'title',
      width: 80,
      align: 'center'
    },
    {
      title: 'Code',
      dataIndex: 'code',
      width: 80,
      align: 'center'
    }
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: PageArgsDataType) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });
  return type === 'PAGE_ARGS'
    ? {
        form,
        data,
        save,
        columns: mergedColumns
      }
    : type === 'PAGE_STORE'
    ? { form, data, columns: pageStoreColumns }
    : {};
}
