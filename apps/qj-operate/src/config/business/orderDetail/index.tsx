import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectColor } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '背景颜色',
    name: 'backgroundColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '配送方式',
    name: 'expressWay',
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
  {
    label: '按钮边框颜色',
    name: 'borderColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '按钮字体颜色',
    name: 'color',
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
          value: 'rounded'
        },
        {
          label: '直角',
          value: 'default'
        }
      ]
    }
  },
  {
    label: '上边距',
    name: 'paddingTop',
    type: 'number',
    extraProps: {
      defaultValue: 5,
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
      defaultValue: 5,
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  }
];

export const title = '文本配置';
export const info = '灵活设置展示样式。';
export const initialValues = {
  cell: 1,
  circular: 1
};
