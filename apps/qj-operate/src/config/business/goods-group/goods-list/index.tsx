import React from 'react';
import { SwiperComponent } from '@/common';
import { formConfigType } from '@/type/formConfig';
import { SelectAction } from '@/common/selectAction';

export const transformField = [
  {
    from: 'ss.lineationGoods', // 老的key
    format: (value: boolean) => {
      return {
        key: 'ss', // 新增的key
        value: {
          a: `solid ${value} 1px`
        } // 新增的key对应的值
      };
    }
  },
  {
    from: 'lineationGoods', // 老的key
    format: (value: boolean) => {
      return {
        key: 'fontSize', // 新增的key
        value: `solid ${value} 1px` // 新增的key对应的值
      };
    }
  }
];

const sectionOne: formConfigType = {
  title: '基本设置',
  formConfig: [
    {
      label: '选中文字颜色',
      name: 'activeColor',
      type: 'color',
      extraProps: {
        allowClear: true,
        showText: true
      }
    },
    {
      label: '商品名称',
      name: 'goodsName',
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
      label: '销售价格',
      name: 'goodsPrice',
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
      label: '划线价格',
      name: ['ss', 'lineationGoods'],
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
      label: '销售数量',
      name: 'salesQuantity',
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
      label: '购物车',
      name: 'goodsCar',
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
      label: '商品倒角',
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
      label: '商品底色',
      name: 'goodsColor',
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
      label: '商品间距',
      name: 'goodsGap',
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
  ]
};

const sectionThree: formConfigType = {
  title: '行为流',
  formConfig: [
    {
      label: '',
      name: ['__link__'],
      type: 'slot',
      extraProps: {
        render: SelectAction
      }
    }
  ]
};

export const formConfig: Array<formConfigType> = [sectionOne, sectionThree];
export const title = '商品列表配置';
export const info = '设置商品列表的展示方式、内容或样式。';
