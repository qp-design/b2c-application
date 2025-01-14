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
            parentName: ['selectClassifyNav']
          }
        }
      ],
      AddJsx: ({ add }: any) => {
        return <AddButton add={add} />;
      }
    }
  },
  {
    label: '导航倒角',
    name: 'navRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '10px',
          label: '圆角'
        },
        {
          value: '0',
          label: '直角'
        }
      ]
    }
  },
  {
    label: '导航边框颜色',
    name: 'navBorderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '背景颜色',
    name: 'navBgColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '外部投影',
    name: 'navBoxShadow',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ]
    }
  },
  {
    label: '图片倒角',
    name: 'imgRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '50%',
          label: '是'
        },
        {
          value: '0',
          label: '否'
        }
      ]
    }
  },
  {
    label: '图片投影',
    name: 'imgBoxShadow',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ]
    }
  },
  {
    label: '导航排版',
    name: 'layout',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 4,
          label: '4/行'
        },
        {
          value: 5,
          label: '5/行'
        }
      ]
    }
  },
  {
    label: '上边距',
    name: 'marginTop',
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
    name: 'marginBottom',
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
