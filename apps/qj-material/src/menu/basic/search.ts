export default {
  type: 'Search',
  code: 'index',
  name: '搜索',
  group: [
    {
      type: 'Search',
      groupType: 'Search',
      name: '搜索',
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
      groupType: 'Search',
      name: '搜索二',
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
    }
  ]
};
