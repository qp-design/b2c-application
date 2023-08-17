import { FieldType } from '@brushes/form';

export const formConfig: Array<FieldType> = [
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
    label: '边框',
    name: 'borderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
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

export const title = '商品规格信息';
export const info = '商品规格信息的配置。';
export const initialValues = {
  cell: 1,
  circular: 1
};
