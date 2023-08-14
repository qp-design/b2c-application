import { DEFAULT_IMG } from '@/common/img/constent';

export default {
  type: 'SliderGroup',
  code: 'index',
  name: '轮播图',
  group: [
    {
      type: 'Slider',
      groupType: 'SliderGroup',
      name: '轮播图',
      icon: 'icon-carousel',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: '',
            title: ''
          }
        ],
        type: 1,
        autoplay: false,
        autoplayInterval: 3000,
        direction: 'horizontal',
        loop: true,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 0,
        selectImg: [],
        paddingTB: 0,
        paddingLR: 0,
        fontsize: 16,
        textAlign: 'center',
        fontColor: '#000000',
        backGroundColor: '#d2d2d2',
        otherStyles: [],
        ImgShadow: false,
        Position: 'none'
        // value: '请填写主标题或文本'
      }
    },
    {
      type: 'Slider',
      groupType: 'SliderGroup',
      name: '全屏轮播图',
      icon: 'icon-carousels',
      props: {
        defaultValue: [
          {
            imgUrl: DEFAULT_IMG,
            link: ''
          }
        ],
        type: 2,
        autoplay: false,
        autoplayInterval: 3000,
        direction: 'horizontal',
        loop: true,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        selectImg: [],
        paddingTB: 0,
        paddingLR: 0,

        fontsize: 16,
        textAlign: 'center',
        fontColor: '#000000',
        backGroundColor: '#ffffff',
        otherStyles: [],
        ImgShadow: false,
        Position: 'bottom',
        value: '请填写主标题或文本'
      }
    }
  ]
};
