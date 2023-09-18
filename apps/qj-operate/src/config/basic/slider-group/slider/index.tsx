import { FieldType } from '@brushes/form';
import React from 'react';
import { SelectCube, SwiperComponent, AddButton, ComputedImg } from 'operate-common';

export const formConfig: Array<FieldType> = [
  {
    label: '自动播放',
    name: 'autoplay',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    }
  },
  {
    label: '切换间隔',
    name: 'autoplayInterval',
    type: 'number',
    extraProps: {
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '方向',
    name: 'direction',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '水平',
          value: 'horizontal'
        },
        {
          label: '垂直',
          value: 'vertical'
        }
      ]
    }
  },
  {
    label: '循环播放',
    name: 'loop',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    }
  },
  {
    label: '选择图片',
    name: 'selectImg',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '',
          name: ['imgUrl', 'link', 'title'],
          type: 'slot',
          extraProps: {
            render: SelectCube,
            parentName: ['selectImg'],
            needInput: 'hello'
          }
        }
      ],
      AddJsx: ({ add }: any) => {
        return <AddButton add={add} title={'添加轮播图'} />;
      }
    }
  },
  {
    label: '',
    name: 'imgHeight',
    type: 'slot',
    extraProps: {
      render: ComputedImg,
      computedName: 'imgUrl'
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
  },
  // {
  //   label: '文本内容',
  //   name: 'value',
  //   type: 'textarea',
  //   extraProps: {
  //     showCount: true,
  //     maxLength: 100
  //   }
  // },
  {
    label: '字号大小',
    name: 'fontsize',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 12,
          label: 'S'
        },
        {
          value: 16,
          label: 'M'
        },
        {
          value: 20,
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
          label: '居左',
          value: 'left'
        },
        {
          label: '居中',
          value: 'center'
        },
        {
          label: '居右',
          value: 'right'
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
    label: '背景颜色',
    name: 'backGroundColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '其他样式',
    name: 'otherStyles',
    type: 'checkboxGroup',
    extraProps: {
      options: [
        {
          value: 'silder-weight',
          label: '加粗'
        },
        {
          value: 'silder-italic',
          label: '斜体'
        },
        {
          value: 'silder-decoration',
          label: '下划线'
        }
      ]
    }
  },
  {
    label: '文本占位',
    name: 'Position',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '隐藏',
          value: 'none'
        },
        {
          label: '顶部',
          value: 'top'
        },
        {
          label: '底部',
          value: 'bottom'
        }
      ]
    }
  },
  {
    label: '图片阴影',
    name: 'ImgShadow',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '显示',
          value: true
        },
        {
          label: '隐藏',
          value: false
        }
      ]
    }
  },
  {
    label: '上下边距',
    name: 'paddingTB',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  },
  {
    label: '左右边距',
    name: 'paddingLR',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  }
];

export const title = '轮播图配置';
export const info = '设置轮播图的展示方式、内容或样式。';
