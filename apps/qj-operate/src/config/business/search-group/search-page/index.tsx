import { FieldType } from '@brushes/form';
export const formConfig: Array<FieldType> = [
  {
    label: '显示占位符',
    name: 'placeholder',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '是'
        },
        {
          value: 0,
          label: '否'
        }
      ]
    }
  },
  {
    label: '提示修改',
    name: 'placeholderText',
    type: 'text',
    extraProps: {
      showCount: true,
      maxLength: 10
    }
  },
  {
    label: '显示搜索记录',
    name: 'history',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '是'
        },
        {
          value: 0,
          label: '否'
        }
      ]
    }
  },
  {
    label: '标题修改',
    name: 'historyText',
    type: 'text',
    extraProps: {
      showCount: true,
      maxLength: 10
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

export const title = '搜索栏';
export const info = '设置搜索的内容和配置。';
