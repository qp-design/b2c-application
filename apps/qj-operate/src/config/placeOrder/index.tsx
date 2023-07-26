import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectColor } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '配送方式',
    name: 'shippingMethod',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '显示'
        },
        {
          value: 0,
          label: '隐藏'
        }
      ]
    }
  },
  {
    label: '字体',
    name: 'color',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '按钮颜色',
    name: 'buttonColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '边框颜色',
    name: 'borderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
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

export const title = '按钮栏';
export const info = '设置配送方式的样式和配置';
