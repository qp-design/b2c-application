import { FieldType } from '@brushes/form';
export const formConfig: Array<FieldType> = [
  {
    label: '价格显示',
    name: 'priceShow',
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
  // {
  //   label: '划线价显示',
  //   name: 'mPriceShow',
  //   type: 'radioGroup',
  //   extraProps: {
  //     options: [
  //       {
  //         value: true,
  //         label: '是'
  //       },
  //       {
  //         value: false,
  //         label: '否'
  //       }
  //     ]
  //   }
  // },
  // {
  //   label: '销量显示',
  //   name: 'salesVolumeShow',
  //   type: 'radioGroup',
  //   extraProps: {
  //     options: [
  //       {
  //         value: true,
  //         label: '是'
  //       },
  //       {
  //         value: false,
  //         label: '否'
  //       }
  //     ]
  //   }
  // },
  {
    label: '收藏显示',
    name: 'collectionShow',
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
  }
];

export const title = '商品详情信息';
export const info = '商品详情信息的配置。';
export const initialValues = {
  cell: 1,
  circular: 1
};
