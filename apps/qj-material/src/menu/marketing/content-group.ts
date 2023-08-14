export default {
  type: 'ContentGroup',
  name: '内容',
  group: [
    {
      type: 'ArticleDetail',
      groupType: 'ContentGroup',
      name: '文章详情',
      icon: 'icon-a-1',
      props: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
      }
    },
    {
      type: 'Notice',
      groupType: 'ContentGroup',
      name: '公告列表',
      icon: 'icon-notice',
      props: {
        borderColor: '#fff3e9',
        fontSize: '15px',
        color: '#ff6010',
        backgroundColor: '#fff9ed',
        title: '',
        text: '默认公告内容',
        margin: 8,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0
      }
    },
    {
      type: 'NoticeDetail',
      groupType: 'ContentGroup',
      name: '公告详情',
      icon: 'icon-a-1',
      props: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    }
  ]
};
