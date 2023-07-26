import { FieldType } from '@brushes/form';
import { SelectColor } from '@/common';
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
    label: '左侧按钮边框颜色',
    name: 'lBtnBorderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '左侧按钮字体颜色',
    name: 'lBtnFontColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '左侧按钮颜色',
    name: 'lBtnColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '左侧按钮样式',
    name: 'lBtnStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆角'
        },
        {
          value: 2,
          label: '直角'
        }
      ]
    }
  },
  {
    label: '右侧按钮边框颜色',
    name: 'rBtnBorderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '右侧按钮字体颜色',
    name: 'rBtnFontColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '右侧按钮颜色',
    name: 'rBtnColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '右侧按钮样式',
    name: 'rBtnStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆角'
        },
        {
          value: 2,
          label: '直角'
        }
      ]
    }
  }
];

export const title = '操作栏';
export const info = '操作栏的配置。';
export const initialValues = {
  cell: 1,
  circular: 1
};
