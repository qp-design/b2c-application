import { FieldType } from '@brushes/form';
import { SelectGoods, SelectPicture, SwiperComponent } from '@/common';
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
    label: '组件背景图',
    name: 'GoodsSlideshowBg',
    type: 'slot',
    rules: [{ required: true, message: '请输入标题' }],
    extraProps: {
      render: SelectPicture
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
    label: '商品销量',
    name: 'salesNum',
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
          value: '20px',
          label: '圆角'
        }
      ]
    }
  },
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
    label: '按钮文字',
    name: 'btnText',
    type: 'textarea',
    extraProps: {
      showCount: true,
      maxLength: 5
    }
  },
  {
    label: '按钮颜色',
    name: 'btnBg',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '按钮文字颜色',
    name: 'btnColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '按钮倒角',
    name: 'btnRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: '0px',
          label: '直角'
        },
        {
          value: '20px',
          label: '圆角'
        }
      ]
    }
  }
];

export const title = '滑动商品配置';
export const info = '滑动商品设置多用于商品分类模块，可与标题组合使用，且灵活设置商品展示样式。';
