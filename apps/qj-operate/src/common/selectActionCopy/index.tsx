import React, { type FC } from 'react';
import { Button, FormInstance, Select, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/es/modal/Modal';
import { useSelectAction } from './hooks';
import { SelectLink } from '..';
interface SelectActionProps {
  name: [string, string];
  form: FormInstance;
}
export const SelectAction: FC<SelectActionProps> = ({ form, name }) => {
  const { isShow, onOpen, onClose } = useSelectAction();
  return (
    <>
      <Button type={'dashed'} block icon={<PlusOutlined />} onClick={onOpen}>
        添加
      </Button>
      <Modal
        cancelText={'取消'}
        okText={'保存'}
        centered
        open={isShow}
        title={'行为流'}
        onCancel={onClose}
        maskClosable={false}
      >
        <div
          style={{ display: 'grid', gridTemplate: '1fr/repeat(2,auto)', alignItems: 'center', justifyContent: 'start' }}
        >
          <div>目标页面:</div>
          <SelectLink form={form} name={name[0]} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <div>默认参数:xxx</div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplate: '1fr/repeat(4,auto)',
            justifyContent: 'start',
            gap: '10px',
            alignItems: 'center'
          }}
        >
          <div>扩展参数:</div>
          <Form.Item name={name[1]} style={{ marginBottom: '0' }}>
            <Select
              allowClear
              style={{ width: '380px' }}
              mode="multiple"
              placeholder={'扩展参数'}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Form.Item>
        </div>
      </Modal>
    </>
  );
};
