import { useState } from 'react';
import Button from 'antd/es/button';
import type { FormInstance } from 'antd/es/form';
import Modal from 'antd/es/modal/Modal';
import { Wrapper } from '@brushes/webmaterial';
import { CouponJsx } from '@/common/selectCoupon/coupon';

export const SelectCoupon = ({ form, name }: { name: string; form: FormInstance }) => {
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
      <Button onClick={showModal} style={{ padding: 0, marginBottom: '10px' }} type={'link'}>
        {num > 0 ? `已选择${num}个优惠券` : '选择优惠券'}
      </Button>
      <Modal width={800} title="选择优惠券" open={isModalVisible} footer={null} onCancel={handleCancel}>
        <Wrapper>
          <CouponJsx name={name} handleCancel={handleCancel} form={form} />
        </Wrapper>
      </Modal>
    </>
  );
};
