import { DEFAULT_IMG } from '@/common/img/constent';

export default {
  type: 'ClassifyNavGroup',
  name: '分类导航',
  group: [
    {
      type: 'ClassifyNav',
      groupType: 'ClassifyNavGroup',
      name: '图文导航',
      icon: 'icon-a-bianzu31',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          }
        ],
        type: 1,
        borderRadius: 0,
        paddingTop: 10,
        paddingBottom: 10,
        selectClassifyNav: []
      }
    },
    {
      type: 'ClassifyNavOne',
      groupType: 'ClassifyNavGroup',
      name: '仅图片',
      icon: 'icon-a-bianzu31',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            title: '',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '',
            link: ''
          }
        ],
        // 选中的数组
        selectClassifyNav: [],
        // 导航倒角 - 圆角: 30 直角： 0
        navRadius: '0',
        // 导航边框颜色
        navBorderColor: '#FFFFFF',
        // 背景颜色
        navBgColor: '#FFFFFF',
        // 外部投影
        navBoxShadow: false,
        // 图片倒角 - 圆角：'50%' 直角： '0'
        imgRadius: '0',
        // 图片投影
        imgBoxShadow: false,
        // 图片排版
        layout: 4,
        marginTop: 10,
        marginBottom: 10
      }
    },
    {
      type: 'ClassifyNavTwo',
      groupType: 'ClassifyNavGroup',
      name: '仅标题',
      icon: 'icon-a-bianzu31',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          }
        ],
        // 选中的数组
        selectClassifyNav: [],
        // 导航倒角 - 圆角: 30 直角： 0
        navRadius: '0',
        // 导航边框颜色
        navBorderColor: '#FFFFFF',
        // 背景颜色
        navBgColor: '#FFFFFF',
        // 外部投影
        navBoxShadow: false,
        // 字号大小
        fontSize: '12px',
        // 字体颜色
        fontColor: '#000000',
        // 其他样式
        otherStyle: [],
        // 图片排版
        layout: 4,
        marginTop: 10,
        marginBottom: 10
      }
    },
    {
      type: 'ClassifyNavThree',
      groupType: 'ClassifyNavGroup',
      name: '图文重叠',
      icon: 'icon-a-bianzu31',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            title: '分类标题',
            link: ''
          }
        ],
        // 选中的数组
        selectClassifyNav: [],
        // 导航倒角 - 圆角: 30 直角： 0
        navRadius: '0',
        // 导航边框颜色
        navBorderColor: '#FFFFFF',
        // 背景颜色
        navBgColor: '#FFFFFF',
        // 外部投影
        navBoxShadow: false,
        // 图片倒角 - 圆角：'50%' 直角： '0'
        imgRadius: '0',
        // 图片投影
        imgBoxShadow: false,
        // 字号大小
        fontSize: '12px',
        // 字体颜色
        fontColor: '#000000',
        // 标签颜色
        tagBgColor: '#FFFFFF',
        // 其他样式
        otherStyle: [],
        // 图片排版
        layout: 4,
        marginTop: 10,
        marginBottom: 10
      }
    },
    {
      type: 'BackTop',
      groupType: 'ClassifyNavGroup',
      name: '返回顶部',
      icon: 'icon-a-bianzu31',
      props: {
        // 背景色
        bg: '#FFFFFF',
        // 位置
        position: 10,
        // 图标颜色
        color: '#444444',
        // 图标大小
        fontSize: 36
      }
    }
  ]
};
