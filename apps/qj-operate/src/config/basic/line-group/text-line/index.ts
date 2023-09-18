import { FieldType } from '@brushes/form';
import React from 'react';
import { SwiperComponent } from 'operate-common';
export const formConfig: Array<FieldType> = [
  {
    label: '背景色',
    name: 'TextLineBgColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '标题内容',
    name: 'text',
    type: 'textarea',
    extraProps: {
      showCount: true,
      maxLength: 10
    }
  },
  {
    label: '组件宽度',
    name: 'contentSize',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '不撑满'
        },
        {
          value: 2,
          label: '撑满'
        }
      ]
    }
  },
  {
    label: '线条样式',
    name: 'lineStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'solid',
          label: '实线'
        },
        {
          value: 'dotted',
          label: '点状'
        },
        {
          value: 'dashed',
          label: '虚线'
        }
      ]
    }
  },
  {
    label: '字号大小',
    name: 'fontSize',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 12,
          label: 'S'
        },
        {
          value: 14,
          label: 'M'
        },
        {
          value: 16,
          label: 'L'
        }
      ]
    }
  },
  {
    label: '对齐方式',
    name: 'textAlign',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'left',
          label: '左'
        },
        {
          value: 'center',
          label: '中'
        },
        {
          value: 'right',
          label: '右'
        }
      ]
    }
  },
  {
    label: '字体颜色',
    name: 'fontColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '线条颜色',
    name: 'lineColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '字体粗细',
    name: 'fontWeight',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'normal',
          label: '默认'
        },
        {
          value: 'bold',
          label: '加粗'
        }
      ]
    }
  },
  {
    label: '字体倾斜',
    name: 'fontStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'normal',
          label: '默认'
        },
        {
          value: 'italic',
          label: '斜体'
        }
      ]
    }
  },
  {
    label: '字体下划线',
    name: 'textDecoration',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'none',
          label: '默认'
        },
        {
          value: 'underline',
          label: '下划线'
        }
      ]
    }
  }
];

export const title = '分隔线配置';
export const info = '设置分隔线的内容或样式。';
