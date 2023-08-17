import type { FieldType } from '@brushes/form';

export const formConfig: Array<FieldType> = [
  {
    label: '背景颜色',
    name: 'backgroundColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '字体颜色',
    name: 'color',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '排列方式',
    name: 'queue',
    type: 'radioGroup',
    extraProps: {
      direction: 'vertical',
      options: [
        {
          label: '开始时间越早越靠前',
          value: 'start'
        },
        {
          label: '结束时间越早越靠前',
          value: 'end'
        }
      ]
    }
  },
  {
    label: '上边距',
    name: 'paddingTop',
    type: 'number',
    extraProps: {
      defaultValue: 5,
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '下边距',
    name: 'paddingBottom',
    type: 'number',
    extraProps: {
      defaultValue: 5,
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  }
];
export const title = '优惠券配置';
export const info = '灵活设置展示样式。';
