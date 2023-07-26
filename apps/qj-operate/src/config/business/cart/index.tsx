import type { FieldType } from '@brushes/form';
import { SelectColor } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '编辑样式',
    name: 'btnStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '文本',
          value: false
        },
        {
          label: '按钮',
          value: true
        }
      ]
    }
  },
  {
    label: '按钮边框',
    name: 'borderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '按钮字体',
    name: 'textColor',
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
          value: '10px'
        },
        {
          label: '直角',
          value: '0px'
        }
      ]
    }
  },
  {
    label: '卡片倒角',
    name: 'cartItemRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '圆角',
          value: '10px'
        },
        {
          label: '直角',
          value: '0px'
        }
      ]
    }
  },
  {
    label: '结算按钮边框',
    name: 'countBorderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '结算按钮字体',
    name: 'countTextColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '结算按钮颜色',
    name: 'countBtnColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '结算按钮倒角',
    name: 'countBtnShape',
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
  }
];
export const title = '地址配置';
export const info = '灵活设置展示样式。';
