import { FieldType } from '@brushes/form';
import { SelectCoupon } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '选择商品',
    name: 'coupons',
    type: 'slot',
    rules: [{ required: true, message: '请输入标题' }],
    extraProps: {
      render: SelectCoupon
    }
  },
  {
    label: '边框颜色',
    name: 'borderColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '背景颜色',
    name: 'bg',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '按钮颜色',
    name: 'btnColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '类型颜色',
    name: 'typeColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '规则颜色',
    name: 'ruleColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '名称颜色',
    name: 'titleColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '有效期颜色',
    name: 'timeColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
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

export const title = '优惠券领取';
export const info = '优惠券领取的配置。';
