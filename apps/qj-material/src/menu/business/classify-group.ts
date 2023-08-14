export default {
  type: 'GoodsClassifyGroup',
  name: '分类',
  group: [
    {
      type: 'GoodsClassify',
      groupType: 'GoodsClassifyGroup',
      name: '商品分类',
      icon: 'icon-a-1',
      props: {
        cell: 2,
        color: '#000000',
        activeTitle: 1,
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    {
      type: 'GoodsClassifyOne',
      groupType: 'GoodsClassifyGroup',
      name: '商品分类1',
      icon: 'icon-a-1',
      props: {
        // 高亮字体颜色
        selectFontColor: '#EB144C',
        // sideBar高亮时小方块是否显示
        selectBlcShow: true,
        // sideBar高亮时小方块颜色
        selectBlcColor: '#000000',
        // sideBar高亮时小方块样式 1:圆角 2:直角
        selectBlcStyle: 1,
        // 内容一行显示几个 2:2个 3:3个
        layout: 2,
        // 内容的图片是否显示阴影
        picShadow: true
      }
    },
    {
      type: 'GoodsClassifyTwo',
      groupType: 'GoodsClassifyGroup',
      name: '商品分类2',
      icon: 'icon-a-1',
      props: {
        // 高亮字体颜色
        selectFontColor: '#EB144C',
        // sideBar高亮时小方块是否显示
        selectBlcShow: true,
        // sideBar高亮时小方块颜色
        selectBlcColor: '#000000',
        // sideBar高亮时小方块样式 1:圆角 2:直角
        selectBlcStyle: 1,
        // 内容一行显示几个 2:2个 3:3个
        layout: 2,
        // 内容的图片是否显示阴影
        picShadow: true
      }
    }
  ]
};
