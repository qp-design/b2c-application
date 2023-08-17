import type { FieldType } from '@brushes/form';

export const formConfig: Array<FieldType> = [
  {
    label: '边框颜色',
    name: 'borderColor',
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
    label: '按钮颜色',
    name: 'btnColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
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
          value: '20px'
        },
        {
          label: '直角',
          value: '0px'
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
export const title = '地址列表按钮配置';
export const info = '灵活设置地址列表按钮展示样式。';
