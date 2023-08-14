export default {
  type: 'AfterSalesGroup',
  name: '售后',
  group: [
    {
      type: 'AfterSalesApply',
      groupType: 'AfterSalesGroup',
      name: '申请售后',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0
      }
    },
    {
      type: 'AfterSalesType',
      groupType: 'AfterSalesGroup',
      name: '售后类型选择',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0
      }
    },
    {
      type: 'AfterSalesList',
      groupType: 'AfterSalesGroup',
      name: '售后列表',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0
      }
    },
    {
      type: 'AfterSalesDetail',
      groupType: 'AfterSalesGroup',
      name: '售后详情',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0
      }
    }
  ]
};
