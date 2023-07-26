import { DEFAULT_IMG } from '@/common/img/constent';

export default {
  code: 'index',
  type: 'Cube',
  name: '魔方区',
  group: [
    {
      type: 'Cube',
      name: '大图',
      icon: 'icon-picture',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 1,
        borderRadius: 0,
        outerShadow: false,
        selectImg: [],
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
      }
    },
    {
      type: 'Cube',
      name: '一行两个',
      icon: 'icon-a-bianzu2',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 2,
        borderRadius: 0,
        outerShadow: false,
        selectImg: [],
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
      }
    },
    {
      type: 'Cube',
      name: '一行三个',
      icon: 'icon-a-bianzu2',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 10,
        borderRadius: 0,
        outerShadow: false,
        selectImg: [],
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
      }
    },
    {
      type: 'Cube',
      name: '一上二下',
      icon: 'icon-a-bianzu3beifen2',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 3,
        borderRadius: 0,
        outerShadow: false,
        selectImg: [],
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
      }
    },
    {
      type: 'Cube',
      name: '一左二右',
      icon: 'icon-a-bianzu3beifen',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 4,
        borderRadius: 0,
        outerShadow: false,
        selectImg: [],
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
      }
    },
    {
      type: 'Cube',
      name: '一左三右',
      icon: 'icon-a-bianzu3beifen',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 6,
        borderRadius: 0,
        outerShadow: false,
        selectImg: [],
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
      }
    },
    {
      type: 'Cube',
      name: '田字形',
      icon: 'icon-a-bianzu31',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          },
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 5,
        borderRadius: 0,
        outerShadow: false,
        selectImg: [],
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
      }
    }
  ]
};
