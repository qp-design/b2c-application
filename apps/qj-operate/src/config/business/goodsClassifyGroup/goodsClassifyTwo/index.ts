import { FieldType } from '@brushes/form';
import { SelectColor } from '@/common';

export const formConfig: Array<FieldType> = [
  {
    label: '选中颜色',
    name: 'selectFontColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '选中标识',
    name: 'selectBlcShow',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '显示'
        },
        {
          value: false,
          label: '隐藏'
        }
      ]
    }
  },
  // {
  //   label: '标识颜色',
  //   name: 'selectBlcColor',
  //   type: 'slot',
  //   extraProps: {
  //     render: SelectColor
  //   }
  // },
  {
    label: '选中倒角',
    name: 'selectBlcStyle',
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
    label: '导航排版',
    name: 'layout',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 2,
          label: '2/行'
        },
        {
          value: 3,
          label: '3/行'
        }
      ]
    }
  },
  {
    label: '图片投影',
    name: 'picShadow',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '显示'
        },
        {
          value: false,
          label: '隐藏'
        }
      ]
    }
  }
];

export const title = '商品分类';
export const info = '设置商品分类的样式和配置';
export const initialValues = {
  cell: 1,
  circular: 1
};
