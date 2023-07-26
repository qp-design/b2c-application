export default {
  type: 'AddressListGroup',
  name: '地址列表',
  group: [
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
      groupType: 'AddressListGroup',
      name: '新增按钮',
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
    }
  ]
};
