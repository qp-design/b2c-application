import type { FieldType } from '@brushes/form';
export const formConfig: Array<FieldType> = [
  {
    label: '背景颜色',
    name: 'bg',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '悬浮排版',
    name: 'position',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '上',
          value: 50
        },
        {
          label: '中',
          value: 30
        },
        {
          label: '下',
          value: 10
        }
      ]
    }
  },
  {
    label: '图标颜色',
    name: 'color',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '图标大小',
    name: 'fontSize',
    type: 'number',
    extraProps: {
      min: 0,
      style: {
        width: 100
      }
    }
  }
];
export const title = '悬浮配置';
export const info = '灵活设置展示样式。';
