import { FieldType } from '@brushes/form';
import React from 'react';
import { SwiperComponent } from 'operate-common';
export const formConfig: Array<FieldType> = [
  {
    label: '高度',
    name: 'height',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 1,
      style: {
        width: 100
      }
    }
  },
  {
    label: '样式',
    name: 'borderStyle',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 'solid',
          label: '单实线'
        },
        {
          value: 'dashed',
          label: '单虚线'
        },
        {
          value: 'double',
          label: '双实线'
        },
        {
          value: 'dotted',
          label: '圆点线'
        }
      ]
    }
  },
  {
    label: '宽度',
    name: 'width',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  },
  {
    label: '圆角',
    name: 'borderRadius',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  },
  {
    label: '背景颜色',
    name: 'backgroundColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
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

export const title = '分隔线配置';
export const info = '设置分隔线的内容或样式。';
