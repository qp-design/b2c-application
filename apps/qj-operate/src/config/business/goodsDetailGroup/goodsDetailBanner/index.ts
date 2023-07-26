import { FieldType } from '@brushes/form';
export const formConfig: Array<FieldType> = [
  {
    label: '纵向滚动',
    name: 'vertical',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ]
    }
  },
  {
    label: '自动播放',
    name: 'autoplay',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ]
    }
  }
];

export const title = '商品详情轮播图';
export const info = '商品详情轮播图的配置。';
