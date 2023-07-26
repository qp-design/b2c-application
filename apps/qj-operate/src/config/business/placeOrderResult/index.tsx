import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectColor, SelectLink } from '@/common';
import AddButton from '@/common/addButton';
export const formConfig: Array<FieldType> = [
  {
    label: '倒角',
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
    label: '左侧按钮字体颜色',
    name: 'leftColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '左侧按钮背景颜色',
    name: 'leftButtonColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '左侧按钮边框颜色',
    name: 'leftBorderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '左侧按钮样式',
    name: 'leftBorderRadius',
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
    label: '右侧按钮名称',
    name: 'rightValue',
    type: 'text',
    extraProps: {
      showCount: true,
      maxLength: 10
    }
  },
  {
    label: '链接',
    name: 'rightAddHref',
    type: 'slot',
    extraProps: {
      render: SelectLink,
      type: 'alone'
    }
  },
  {
    label: '右侧按钮字体颜色',
    name: 'rightColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '右侧按钮背景颜色',
    name: 'rightButtonColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '右侧按钮边框颜色',
    name: 'rightBorderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '右侧按钮样式',
    name: 'rightBorderRadius',
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

export const title = '下单页';
export const info = '设置下单页的样式和配置';
