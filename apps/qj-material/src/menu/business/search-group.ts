export default {
  type: 'SearchGroup',
  name: '搜索',
  group: [
    {
      type: 'Search',
      groupType: 'SearchGroup',
      name: '搜索无按钮',
      icon: 'icon-search-line',
      props: {
        type: 1,
        value: '点击搜索商品',
        fontsize: 16,
        fontColor: '#9A9A9A',
        iconShow: true,
        backgroundColor: '#ECECEE',
        borderRadius: true,
        sticky: false,
        paddingLeft: 10,
        paddingRight: 10,
        otherStyles: [],
        paddings: 0
      }
    },
    {
      type: 'SearchStyleTwo',
      groupType: 'SearchGroup',
      name: '搜索带按钮',
      icon: 'icon-search-line',
      props: {
        type: 2,
        value: '点击搜索商品',
        fontsize: 16,
        fontColor: '#9A9A9A',
        iconShow: true,
        backgroundColor: '#ECECEE',
        borderRadius: true,
        sticky: false,
        paddingLeft: 10,
        paddingRight: 10,
        otherStyles: [],
        paddings: 0
      }
    },
    {
      type: 'SearchPage',
      groupType: 'SearchGroup',
      name: '搜索页',
      icon: 'icon-a-1',
      props: {
        placeholder: 1,
        placeholderText: '点击搜索商品',
        history: 1
      }
    }
  ]
};
