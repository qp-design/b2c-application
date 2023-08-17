import { FieldType } from '@brushes/form';
import { SortList } from '@/common';
export const formConfig: Array<FieldType> = [
  {
    label: '标题',
    name: 'title',
    type: 'text',
    extraProps: {
      showCount: true,
      maxLength: 10
    }
  },
  {
    label: '',
    name: 'columnList',
    type: 'slot',
    extraProps: {
      showConfig: true,
      parentName: ['columnList'],
      render: SortList
    }
  }
  // {
  //   label: '上边距',
  //   name: 'paddingTop',
  //   type: 'number',
  //   extraProps: {
  //     addonAfter: 'px',
  //     min: 0,
  //     style: {
  //       width: 100
  //     }
  //   }
  // },
  // {
  //   label: '下边距',
  //   name: 'paddingBottom',
  //   type: 'number',
  //   extraProps: {
  //     addonAfter: 'px',
  //     min: 0,
  //     style: {
  //       width: 100
  //     }
  //   }
  // }
];

export const title = '我的订单状态';
export const info = '配置订单状态的页面的样式、元素的显示或隐藏';
