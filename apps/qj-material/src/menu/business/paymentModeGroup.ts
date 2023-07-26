export default {
  type: 'PaymentModeGroup',
  name: '支付方式',
  group: [
    {
      type: 'PaymentMode',
      groupType: 'PaymentModeGroup',
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
    }
  ]
};
