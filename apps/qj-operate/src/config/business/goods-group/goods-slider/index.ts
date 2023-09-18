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
    label: '商品价格',
    name: 'price',
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
    label: '划线价',
    name: 'marketPrice',
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
    name: 'cart',
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
    label: '组件倒角',
    name: 'wrapRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '0px',
          label: '直角'
        },
        {
          value: '10px',
          label: '圆角'
        }
      ]
    }
  },
  {
    label: '组件边框颜色',
    name: 'wrapBorderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '组件背景颜色',
    name: 'wrapBgColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '组件投影',
    name: 'wrapShadow',
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
    label: '商品倒角',
    name: 'goodsRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '0px',
          label: '直角'
        },
        {
          value: '10px',
          label: '圆角'
        }
      ]
    }
  },
  {
    label: '商品底色',
    name: 'goodsBgColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '商品边距',
    name: 'goodsGap',
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
  },
  {
    label: '左边距',
    name: 'marginLeft',
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
    name: 'marginRight',
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

export const title = '滑动商品配置';
export const info = '滑动商品设置多用于商品分类模块，可与标题组合使用，且灵活设置商品展示样式。';
