import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectCube, AddButton } from 'operate-common';
export const formConfig: Array<FieldType> = [
  {
    label: '分类导航配置',
    name: 'selectClassifyNav',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '',
          name: ['imgUrl', 'link', 'title'],
          type: 'slot',
          extraProps: {
            render: SelectCube,
            parentName: ['selectClassifyNav'],
            needInput: true
          }
        }
      ],
      AddJsx: ({ add }: any) => {
        return <AddButton add={add} />;
      }
    }
  },

  {
    label: '图片圆角',
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

export const title = '图片配置';
export const info = '设置图片的展示方式、内容或样式。';
