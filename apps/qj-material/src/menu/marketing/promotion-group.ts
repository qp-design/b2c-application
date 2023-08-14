export default {
  type: 'PromotionGroup',
  name: '促销活动',
  group: [
    {
      type: 'AllPromotionList',
      groupType: 'PromotionGroup',
      name: '促销列表',
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
        // tab高亮文字颜色
        activeColor: '#EB144C',
        // 上边距
        paddingTop: 10,
        // 下边距
        paddingBottom: 10
      }
    },
  ]
}
