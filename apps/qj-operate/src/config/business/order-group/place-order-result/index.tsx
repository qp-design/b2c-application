import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectLink, AddButton } from 'operate-common';
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
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '左侧按钮背景颜色',
    name: 'leftButtonColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '左侧按钮边框颜色',
    name: 'leftBorderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
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
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '右侧按钮背景颜色',
    name: 'rightButtonColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '右侧按钮边框颜色',
    name: 'rightBorderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
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
