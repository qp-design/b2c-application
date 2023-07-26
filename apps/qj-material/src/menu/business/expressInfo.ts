export default {
  type: 'ExpressInfo',
  name: '物流信息',
  group: [
    {
      type: 'ExpressInfo',
      name: '物流信息',
      icon: 'icon-a-1',
      props: {
        defaultValue: {
          message: 'message',
          list: [{ time: +new Date(), context: 'context' }],
          dataPic:
            'https://b2coptfa10b0d4f03f4ff48c571f14558fa068.saas.qjclouds.com/paas/shop/597370900596056114//a8a1f3547ef74c86b5147709cca15699.jpg',
          count: '10',
          expressName: '顺丰',
          packageBillno: '697761908949225522',
          result: '已收货'
        }
      }
    }
  ]
};
