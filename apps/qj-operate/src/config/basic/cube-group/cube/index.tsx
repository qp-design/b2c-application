import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectCube, SwiperComponent, AddButton } from 'operate-common';

export const formConfig: Array<FieldType> = [
  {
    label: '选择图片',
    name: 'selectImg',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '',
          name: ['imgUrl', 'link'],
          type: 'slot',
          extraProps: {
            render: SelectCube,
            parentName: ['selectImg']
          }
        }
      ],
      AddJsx: ({ add }: any) => {
        return <AddButton add={add} />;
      }
    }
  },
  {
    label: '是否圆角',
    name: 'borderRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 20,
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
    label: '外部投影',
    name: 'outerShadow',
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
    label: '图片间隔',
    name: 'picGap',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  },
  {
    label: '左右边距',
    name: 'xGap',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
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
  },
  {
    label: '左边距',
    name: 'paddingLeft',
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
    label: '右边距',
    name: 'paddingRight',
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

export const title = '图片配置';
export const info = '设置图片的展示方式、内容或样式。';
