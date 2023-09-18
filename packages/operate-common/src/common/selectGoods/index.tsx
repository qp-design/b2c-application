import React, { useState } from 'react';
import { Button, FormInstance, Modal } from 'antd';
import { GoodsJsx } from './goods';
import { Wrapper } from '../wrapper';

export function SelectGoods({
  form,
  name
}: {
  name: string;
  form: FormInstance;
}) {
  const num = form.getFieldValue(name)?.length || 0;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        style={{ padding: 0, marginBottom: '10px' }}
        type={'link'}
      >
        {num > 0 ? `已选择${num}个商品` : '选择商品'}
      </Button>
      <Modal
        width={800}
        title="选择商品"
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Wrapper>
          <GoodsJsx name={name} handleCancel={handleCancel} form={form} />
        </Wrapper>
      </Modal>
    </>
  );
}
