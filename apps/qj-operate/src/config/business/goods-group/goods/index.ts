import { FieldType } from '@brushes/form';
import { SelectGoods, SelectPicture, SwiperComponent } from 'operate-common';
export const formConfig: Array<FieldType> = [
  {
    label: '选择商品',
    name: 'goods',
    type: 'slot',
    rules: [{ required: true, message: '请输入标题' }],
    extraProps: {
      render: SelectGoods
    }
  },
  {
    label: '划线价格',
    name: 'markedPrice',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '显示'
        },
        {
          value: 2,
          label: '隐藏'
        }
      ]
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
    label: '销量数量',
    name: 'showSales',
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
    label: '商品价格',
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
    name: 'circular',
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
  // {
  //   label: '商品底色',
  //   name: 'goodsColor',
  //   type: 'radioGroup',
  //   extraProps: {
  //     options: [
  //       {
  //         value: true,
  //         label: '显示'
  //       },
  //       {
  //         value: false,
  //         label: '隐藏'
  //       }
  //     ]
  //   }
  // },
  {
    label: '商品边框',
    name: 'goodsBorder',
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
  // {
  //   label: '商品角标',
  //   name: 'goodsTag',
  //   type: 'radioGroup',
  //   extraProps: {
  //     options: [
  //       {
  //         value: true,
  //         label: '显示'
  //       },
  //       {
  //         value: false,
  //         label: '隐藏'
  //       }
  //     ]
  //   }
  // },
  {
    label: '商品投影',
    name: 'goodsShadow',
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
    name: 'marginGap',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  },
  // {
  //   label: '左右间距',
  //   name: 'marginLR',
  //   type: 'radioGroup',
  //   extraProps: {
  //     render: SwiperComponent
  //   }
  // },
  // {
  //   label: '上下间距',
  //   name: 'marginTB',
  //   type: 'radioGroup',
  //   extraProps: {
  //     render: SwiperComponent
  //   }
  // },

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

export const title = '商品配置';
export const info = '商品设置多用于商品分类模块，可与标题组合使用，且灵活设置商品展示样式。';
