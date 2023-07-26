export default {
  type: 'PlaceOrderGroup',
  name: '下单页组',
  group: [
    {
      type: 'PlaceOrderAddress',
      groupType: 'PlaceOrderGroup',
      name: '地址信息',
      icon: 'icon-a-1'
    },
    {
      type: 'PlaceOrderGood',
      groupType: 'PlaceOrderGroup',
      name: '商品信息',
      icon: 'icon-a-1'
    },
    {
      type: 'PlaceOrderDelivery',
      groupType: 'PlaceOrderGroup',
      name: '配送信息',
      icon: 'icon-a-1'
    },
    {
      type: 'PlaceOrderCoupon',
      groupType: 'PlaceOrderGroup',
      name: '优惠券信息',
      icon: 'icon-a-1'
    },
    {
      type: 'PlaceOrderInfo',
      groupType: 'PlaceOrderGroup',
      name: '订单信息',
      icon: 'icon-a-1'
    },
    {
      type: 'PlaceOrderOperate',
      groupType: 'PlaceOrderGroup',
      name: '操作栏信息',
      icon: 'icon-a-1',
      props: {
        color: '#FFFFFF',
        buttonColor: '#000000',
        borderColor: '#000000',
        borderRadius: 1,
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  ]
};
