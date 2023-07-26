export interface OrderItemInter {
  name: string;
  code: string;
}
export const orderStatusList: Array<OrderItemInter> = [
  { name: '全部', code: '' },
  { name: '待付款', code: '1' },
  { name: '待发货', code: '2' },
  { name: '待收货', code: '3' },
  { name: '已完成', code: '4,5' },
  { name: '已取消', code: '-1' }
];

export const orderStatusImpl = (type: string | number) => {
  const { name = '' } = orderStatusList.find((item) => item.code.includes(type + '')) || {};
  return name;
};

export const detailButton: any = {
  1: [
    {
      name: '取消订单',
      handler: 'cancel'
    },
    {
      name: '立即支付',
      handler: 'pay'
    }
  ],
  3: [
    {
      name: '物流信息',
      handler: 'expressInfo'
    },
    {
      name: '确认收货',
      handler: 'confirmReceive'
    }
  ],
  4: [
    {
      name: '去评价',
      handler: 'evaluate'
    }
  ],
  5: [
    {
      name: '已完成'
    }
  ]
};
