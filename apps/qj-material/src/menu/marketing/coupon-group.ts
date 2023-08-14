export default {
  type: 'CouponGroup',
  name: '优惠券',
  group: [
    {
      type: 'CouponList',
      name: '优惠券列表',
      icon: 'icon-a-1',
      props: {
        backgroundColor: '#FFFFF',
        titleTitle: '',
        value: '请填写主标题或文本',
        fontSize: 20,
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'normal',
        textDecoration: 'none',
        fontStyle: 'normal',
        marginTop: 0,
        marginBottom: 0
      }
    },
    {
      type: 'GetCouponOne',
      groupType: 'CouponGroup',
      name: '领券一行一个',
      icon: 'icon-a-1',
      props: {
        defaultValue: [
          {
            pbName: '优惠券种类',
            pmPromotionDiscountList: [
              {
                discName: '满100减10'
              }
            ],
            promotionName: '优惠券名称',
            start: 1682956800000,
            end: 1687968000000
          }
        ],
        // 一行一个
        type: 1,
        // 选中的优惠券
        coupons: [],
        // 优惠券边框的颜色
        borderColor: '#000000',
        // 优惠券背景色
        bg: '#FFFFFF',
        // 领取按钮的背景色
        btnColor: '#000000',
        // 优惠券类型的颜色
        typeColor: '#000000',
        // 优惠券规则的颜色
        ruleColor: '#000000',
        // 优惠券名字颜色
        titleColor: '#000000',
        // 优惠券有效期时间
        timeColor: '#999999',
        // 上边距
        paddingTop: 10,
        // 下边距
        paddingBottom: 10
      }
    },
    {
      type: 'GetCouponOne',
      groupType: 'CouponGroup',
      name: '领券一行两个',
      icon: 'icon-a-1',
      props: {
        defaultValue: [
          {
            pbName: '优惠券种类',
            pmPromotionDiscountList: [
              {
                discName: '满100减10'
              }
            ],
            promotionName: '优惠券名称',
            start: 1682956800000,
            end: 1687968000000
          }
        ],
        // 一行两个
        type: 2,
        // 选中的优惠券
        coupons: [],
        // 优惠券边框的颜色
        borderColor: '#000000',
        // 优惠券背景色
        bg: '#FFFFFF',
        // 领取按钮的背景色
        btnColor: '#000000',
        // 优惠券类型的颜色
        typeColor: '#000000',
        // 优惠券规则的颜色
        ruleColor: '#000000',
        // 优惠券名字颜色
        titleColor: '#000000',
        // 优惠券有效期时间
        timeColor: '#999999',
        // 距离
        gap: 10,
        // 上边距
        paddingTop: 10,
        // 下边距
        paddingBottom: 10
      }
    },
    // {
    //   type: 'AllCouponList',
    //   groupType: 'CouponGroup',
    //   name: '所有优惠券',
    //   icon: 'icon-a-1',
    //   props: {}
    // },
  ]
};
