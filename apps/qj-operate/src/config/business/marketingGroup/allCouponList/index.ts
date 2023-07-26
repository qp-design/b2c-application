import { FieldType } from '@brushes/form';
import { SelectColor, SelectCoupon } from '@/common';
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
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '背景颜色',
    name: 'bg',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '按钮颜色',
    name: 'btnColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '类型颜色',
    name: 'typeColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '规则颜色',
    name: 'ruleColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '名称颜色',
    name: 'titleColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '有效期颜色',
    name: 'timeColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
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

export const title = '所有优惠券';
export const info = '所有优惠券的配置。';
