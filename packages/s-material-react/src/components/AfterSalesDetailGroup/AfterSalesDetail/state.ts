export const getState = (refundType: string, orderState: number) => {
  //仅退款
  if (refundType === 'B01') {
    const stateText: any = {
      '-2': '商家拒绝',
      '-1': '撤销申请',
      '0': '申请退款-待审核',
      '3': '退款中',
      '8': '审核通过-退款完成',
      '9': '退款失败'
    };
    return stateText[orderState];
  }
  //退货退款
  if (refundType === 'B02') {
    const stateText: any = {
      '-2': '商家拒绝',
      '-1': '撤销申请',
      '0': '申请退货退款-待审核',
      '1': '审核通过-商家通过申请-填写物流信息',
      '2': '用户填写完物流信息-待商家收货',
      '3': '退款中',
      '6': '商家拒绝收货',
      '8': '商家收货完成-退款完成',
      '9': '退款失败'
    };
    return stateText[orderState];
  }
  return;
};
