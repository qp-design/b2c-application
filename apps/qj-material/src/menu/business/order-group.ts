import { DEFAULT_IMG } from '@/common/img/constent';

export default {
  type: 'OrderGroup',
  name: '下单',
  group: [
    {
      type: 'PlaceOrderAddress',
      groupType: 'OrderGroup',
      name: '下单地址信息',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    {
      type: 'PlaceOrderGood',
      groupType: 'OrderGroup',
      name: '下单商品信息',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    {
      type: 'PlaceOrderDelivery',
      groupType: 'OrderGroup',
      name: '配送信息',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    {
      type: 'PlaceOrderCoupon',
      groupType: 'OrderGroup',
      name: '优惠券信息',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    {
      type: 'PlaceOrderInfo',
      groupType: 'OrderGroup',
      name: '订单信息',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    {
      type: 'PlaceOrderOperate',
      groupType: 'OrderGroup',
      name: '操作栏信息',
      icon: 'icon-a-1',
      props: {
        color: '#FFFFFF',
        buttonColor: '#000000',
        borderColor: '#000000',
        borderRadius: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    {
      type: 'PaymentMode',
      groupType: 'OrderGroup',
      name: '支付方式',
      icon: 'icon-a-1',
      props: {
        // 边框颜色
        borderColor: '#000000',
        // 字体颜色
        color: '#FFFFFF',
        // 按钮颜色
        btnColor: '#000000',
        // 按钮倒角
        btnShape: '20px',
        // 上边距
        paddingTop: 10,
        // 下边距
        paddingBottom: 10
      }
    },
    {
      type: 'PlaceOrderResult',
      groupType: 'OrderGroup',
      name: '支付结果',
      icon: 'icon-a-1',
      props: {
        borderRadius: 1,
        leftColor: '#FFFFFF',
        leftButtonColor: '#000000',
        leftBorderColor: '#000000',
        leftBorderRadius: 1,
        rightValue: '继续购物',
        rightAddHref: '',
        rightColor: '#000000',
        rightButtonColor: '#FFFFFF',
        rightBorderColor: '#000000',
        rightBorderRadius: 1,
        paddingTop: '0',
        paddingBottom: '0'
      }
    },
    {
      type: 'OrderList',
      groupType: 'OrderGroup',
      name: '订单列表',
      icon: 'icon-a-1',
      props: {
        borderRadius: false,
        orderSpacing: 13
      }
    },
    {
      type: 'OrderDetail',
      groupType: 'OrderGroup',
      name: '订单详情',
      icon: 'icon-a-1',
      props: {
        backgroundColor: '#000000',
        expressWay: true,
        borderColor: '#000000',
        btnColor: '#000000',
        btnShape: 'rounded',
        titleTitle: '',
        value: '请填写主标题或文本',
        fontSize: 20,
        textAlign: 'left',
        color: '#ffffff',
        fontWeight: 'normal',
        textDecoration: 'none',
        fontStyle: 'normal',
        marginTop: 0,
        marginBottom: 0
      }
    },
    {
      type: 'ExpressInfo',
      groupType: 'OrderGroup',
      name: '物流信息',
      icon: 'icon-a-1',
      props: {
        defaultValue: {
          message: 'message',
          list: [{ time: +new Date(), context: 'context' }],
          dataPic: DEFAULT_IMG,
          count: '10',
          expressName: '顺丰',
          packageBillno: '697761908949225522',
          result: '已收货'
        }
      }
    }
  ]
};
