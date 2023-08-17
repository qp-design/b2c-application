import { FieldType } from '@brushes/form';
export const formConfig: Array<FieldType> = [
  {
    label: '边角',
    name: 'borderRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆角'
        },
        {
          value: 0,
          label: '直角'
        }
      ]
    }
  },
  {
    label: '边框',
    name: 'borderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '字体',
    name: 'color',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '按钮颜色',
    name: 'buttonColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },

  {
    label: '边角',
    name: 'buttonBorderRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆角'
        },
        {
          value: 0,
          label: '直角'
        }
      ]
    }
  },
  {
    label: '上边距',
    name: 'paddingTop',
    type: 'number',
    extraProps: {
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
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  }
];

export const title = '评价';
export const info = '设置评价的样式和配置';
