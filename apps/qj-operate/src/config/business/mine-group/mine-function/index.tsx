import { FieldType } from '@brushes/form';
import React from 'react';
import { SortList } from 'operate-common';
export const formConfig: Array<FieldType> = [
  {
    label: '',
    name: 'columnList',
    type: 'slot',
    extraProps: {
      delConfig: true,
      addConfig: true,
      parentName: ['columnList'],
      render: SortList
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

export const title = '我的功能列表';
export const info = '配置我的功能列表页面的样式、元素的显示或隐藏';
