import { FieldType } from '@brushes/form';

export const formConfig: Array<FieldType> = [
  {
    label: '每行个数',
    name: 'cell',
    type: 'radioGroup',
    rules: [{ required: true, message: '请输入标题' }],
    extraProps: {
      options: [
        {
          value: 1,
          label: '一'
        },
        {
          value: 2,
          label: '二'
        },
        {
          value: 3,
          label: '三'
        },
        {
          value: 4,
          label: '四'
        }
      ]
    }
  },
  {
    label: '选中',
    name: 'color',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '选中标识',
    name: 'activeTitle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '块状'
        },
        {
          value: 0,
          label: '面状'
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

export const title = '商品分类';
export const info = '设置商品分类的样式和配置';
export const initialValues = {
  cell: 1,
  circular: 1
};
