import { FieldType } from '@brushes/form';
import React from 'react';
import { SwiperComponent } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '订单倒角',
    name: 'borderRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '圆角'
        },
        {
          value: false,
          label: '直角'
        }
      ]
    }
  },
  {
    label: '订单间距',
    name: 'orderSpacing',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  }
];

export const title = '文本配置';
export const info = '灵活设置展示样式。';
