import { FieldType } from '@brushes/form';
export const formConfig: Array<FieldType> = [
  {
    label: '评价显示',
    name: 'evaluateShow',
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
    label: '评价图片',
    name: 'evaluateImgShow',
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
    label: '评价图片大小',
    name: 'evaluateImgSize',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '大'
        },
        {
          value: 2,
          label: '中'
        },
        {
          value: 3,
          label: '小'
        }
      ]
    }
  }
];

export const title = '商品简介与评论';
export const info = '商品简介与评论的配置。';
