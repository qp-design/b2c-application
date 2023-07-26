export default {
  type: 'Mine',
  name: '我的',
  group: [
    // {
    //   type: 'Mine',
    //   name: '我的',
    //   icon: 'icon-a-1',
    //   props: {
    //     avatarStyle: 1,
    //     banner: 0
    //   }
    // },
    {
      type: 'MineData',
      groupType: 'Mine',
      name: '资料卡',
      icon: 'icon-a-1',
      props: {
        avatarStyle: 1,
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    {
      type: 'MineOrderEntry',
      groupType: 'Mine',
      name: '订单状态',
      icon: 'icon-a-1',
      props: {
        title: '我的订单',
        columnList: [
          {
            id: 0,
            label: '待付款',
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/wallet.png',
            show: true
          },
          {
            id: 1,
            label: '待发货',
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/delivery.png',
            show: true
          },
          {
            id: 2,
            label: '待收货',
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/gift.png',
            show: true
          },
          {
            id: 3,
            label: '已完成',
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/done.png',
            show: true
          },
          {
            id: 4,
            label: '退换/售后',
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/loop.png',
            show: true
          }
        ],
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    {
      type: 'MineFunction',
      groupType: 'Mine',
      name: '功能列表',
      icon: 'icon-a-1',
      props: {
        columnList: [
          {
            id: 0,
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/coupon.png',
            show: true,
            link: {
              label: '我的优惠券',
              value: 'couponList'
            }
          },
          {
            id: 1,
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/star.png',
            show: true,
            link: {
              label: '我的收藏',
              value: 'collectionList'
            }
          },
          {
            id: 2,
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/location.png',
            show: true,
            link: {
              label: '我的地址',
              value: 'addressList'
            }
          },
          {
            id: 3,
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/footprint.png',
            show: true,
            link: {
              label: '我的足迹',
              value: 'footprint'
            }
          },
          {
            id: 4,
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/file.png',
            show: true,
            link: {
              label: '我的协议',
              value: '/account/myAgreementList/index'
            }
          },
          {
            id: 5,
            imgUrl: 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/setting.png',
            show: true,
            link: {
              label: '我的设置',
              value: 'mySetting'
            }
          }
        ],
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  ]
};
