export default {
  type: 'LineGroup',
  code: 'index',
  name: '分隔线',
  group: [
    {
      type: 'Line',
      groupType: 'LineGroup',
      name: '分隔线',
      icon: 'icon-separator',
      props: {
        borderRadius: 0,
        height: 2,
        width: 100,
        backgroundColor: '#CCCCCC',
        paddingTop: 10,
        paddingBottom: 10
      }
    },
    {
      type: 'TextLine',
      groupType: 'LineGroup',
      name: '文本分隔线',
      icon: 'icon-separator',
      props: {
        // 文本分割线背景色
        TextLineBgColor: '#FFFFFF',
        // 文本内容
        text: '文本分割线',
        // 整个内容的样式 1：不撑满 2：撑满
        contentSize: 1,
        // 线的样式 1：实线 2：虚线 3：点线
        lineStyle: 'solid',
        // 字号大小 12 14 16
        fontSize: 14,
        // 对齐方式 左 中 右
        textAlign: 'center',
        // 字体颜色
        fontColor: '#000000',
        // 线条颜色
        lineColor: '#000000',
        // 字体加粗
        fontWeight: 'normal',
        // 字体倾斜
        fontStyle: 'normal',
        // 字体下划线
        textDecoration: 'none'
      }
    }
  ]
};
