import { FieldType } from '@brushes/form';
import { SelectColor, SelectCoupon } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '选中颜色',
    name: 'activeColor',
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

export const title = '所有营销活动列表';
export const info = '所有营销活动列表的配置。';
