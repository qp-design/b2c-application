export default {
  type: 'VideoGroup',
  code: 'index',
  name: '视频',
  group: [
    {
      type: 'Video',
      groupType: 'VideoGroup',
      name: '视频',
      icon: 'icon-zhibo',
      props: {
        autoplay: false,
        loop: true,
        poster: '',
        margin: 8,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0
      }
    }
  ]
};
