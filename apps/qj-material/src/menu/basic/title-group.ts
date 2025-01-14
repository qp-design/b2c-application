export default {
  type: 'TitleGroup',
  name: '文本',
  group: [
    {
      type: 'Title',
      groupType: 'TitleGroup',
      name: '主标题',
      icon: 'icon-text',
      props: {
        value: '请填写主标题或文本',
        fontSize: 20,
        textAlign: 'left',
        color: '#000000',
        backgroundColor: '#fafafa',
        fontWeight: 'normal',
        textDecoration: 'none',
        fontStyle: 'normal',
        textIndent: '0',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0
      }
    },
    {
      type: 'Title',
      groupType: 'TitleGroup',
      name: '副标题',
      icon: 'icon-superscript-',
      props: {
        value: '请填写副标题或文本',
        fontSize: 16,
        textAlign: 'left',
        color: '#cccccc',
        backgroundColor: '#fff',
        fontWeight: 'normal',
        textDecoration: 'none',
        fontStyle: 'normal',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0
      }
    },
    {
      type: 'Title',
      groupType: 'TitleGroup',
      name: '正文',
      icon: 'icon-article-line',
      props: {
        value: '请填写正文',
        fontSize: 12,
        textAlign: 'left',
        color: '#666666',
        backgroundColor: '#fff',
        fontWeight: 'normal',
        textDecoration: 'none',
        fontStyle: 'normal',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0
      }
    }
  ]
};
