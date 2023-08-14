import type { FieldType } from '@brushes/form';
import { SelectColor } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '边框颜色',
    name: 'borderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '字体颜色',
    name: 'color',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '按钮颜色',
    name: 'btnColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '按钮倒角',
    name: 'btnShape',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '圆角',
          value: 'rounded'
        },
        {
          label: '直角',
          value: 'default'
        }
      ]
    }
  },
  {
    label: '上边距',
    name: 'paddingTop',
    type: 'number',
    extraProps: {
      defaultValue: 15,
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
      defaultValue: 65,
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  }
];
export const title = '地址详情配置';
export const info = '灵活设置展示样式。';
