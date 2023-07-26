import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectColor, SelectCube } from '@/common';
import AddButton from '@/common/addButton';
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
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '背景颜色',
    name: 'navBgColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
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
    label: '字号大小',
    name: 'fontSize',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '12px',
          label: 'S'
        },
        {
          value: '13px',
          label: 'M'
        },
        {
          value: '14px',
          label: 'L'
        }
      ]
    }
  },
  {
    label: '字体颜色',
    name: 'fontColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '背景颜色',
    name: 'tagBgColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '其他样式',
    name: 'otherStyle',
    type: 'checkboxGroup',
    extraProps: {
      options: [
        {
          value: 'weight',
          label: '加粗'
        },
        {
          value: 'italic',
          label: '斜体'
        },
        {
          value: 'decoration',
          label: '下划线'
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

export const title = '分类导航配置';
export const info = '设置分类导航的展示方式、内容或样式。';
