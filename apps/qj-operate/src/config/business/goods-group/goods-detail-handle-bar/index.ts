import { FieldType } from '@brushes/form';

export const formConfig: Array<FieldType> = [
  {
    label: '客服显示',
    name: 'serverShow',
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
    label: '购物车显示',
    name: 'cartShow',
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
    label: '左侧按钮字体颜色',
    name: 'lPartColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '左侧按钮背景',
    name: 'lPartBgColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '左侧按钮样式',
    name: 'lPartStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '20px',
          label: '圆角'
        },
        {
          value: '2px',
          label: '直角'
        }
      ]
    }
  },
  {
    label: '右侧按钮字体颜色',
    name: 'rPartColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '右侧按钮背景',
    name: 'rPartBgColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '右侧按钮样式',
    name: 'rPartStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '20px',
          label: '圆角'
        },
        {
          value: '2px',
          label: '直角'
        }
      ]
    }
  }
];

export const title = '操作栏';
export const info = '操作栏的配置。';
