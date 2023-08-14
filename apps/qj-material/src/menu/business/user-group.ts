export default {
  type: 'UserGroup',
  name: '用户',
  group: [
    {
      type: 'MySetting',
      groupType: 'UserGroup',
      name: '我的设置',
      icon: 'icon-a-1',
      props: {}
    },
    {
      type: 'MyAgreementList',
      groupType: 'UserGroup',
      name: '我的协议',
      icon: 'icon-a-1',
      props: {}
    },
    {
      type: 'PersonInfoSetting',
      groupType: 'UserGroup',
      name: '个人信息设置',
      icon: 'icon-a-1'
    },
    {
      type: 'AddressList',
      groupType: 'AddressListGroup',
      name: '地址列表',
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
      type: 'AddressListBtn',
      groupType: 'UserGroup',
      name: '新增地址按钮',
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
      type: 'AddressDetail',
      groupType: 'UserGroup',
      name: '地址详情',
      icon: 'icon-a-1',
      props: {
        // 边框颜色
        borderColor: '#000000',
        // 字体颜色
        color: '#FFFFFF',
        // 按钮颜色
        btnColor: '#000000',
        // 按钮倒角
        btnShape: 'rounded',
        // 上边距
        paddingTop: 10,
        // 下边距
        paddingBottom: 10
      }
    }
  ]
};
