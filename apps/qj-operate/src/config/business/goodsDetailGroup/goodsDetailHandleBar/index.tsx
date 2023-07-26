import { SelectColor, SelectData } from '@/common';
import { formConfigType } from '@/type/formConfig';
export const title = '操作栏';
export const info = '操作栏的配置。';

const sectionTwo: formConfigType = {
  title: '数据流',
  formConfig: [
    {
      label: '',
      name: ['__dataSource__'],
      type: 'slot',
      extraProps: {
        initialValue: {
          componentOption: [
            {
              value: 'skuNo',
              label: '商品编码'
            },
            {
              value: 'popupVisible',
              label: '弹出框'
            }
          ],
          data: [
            {
              label: '弹出框',
              value: 'visible',
              isDefault: true
            }
          ]
        },
        render: SelectData
      }
    }
  ]
};

const sectionOne: formConfigType = {
  title: '基本配置',
  formConfig: [
    {
      label: '客服显示',
      name: 'serverShow',
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
      label: '购物车显示',
      name: 'cartShow',
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
      label: '左侧按钮字体颜色',
      name: 'lPartColor',
      type: 'slot',
      extraProps: {
        render: SelectColor
      }
    },
    {
      label: '左侧按钮背景',
      name: 'lPartBgColor',
      type: 'slot',
      extraProps: {
        render: SelectColor
      }
    },
    {
      label: '左侧按钮样式',
      name: 'lPartStyle',
      type: 'radioGroup',
      extraProps: {
        options: [
          {
            value: '20px',
            label: '圆角'
          },
          {
            value: '2px',
            label: '直角'
          }
        ]
      }
    },
    {
      label: '右侧按钮字体颜色',
      name: 'rPartColor',
      type: 'slot',
      extraProps: {
        render: SelectColor
      }
    },
    {
      label: '右侧按钮背景',
      name: 'rPartBgColor',
      type: 'slot',
      extraProps: {
        render: SelectColor
      }
    },
    {
      label: '右侧按钮样式',
      name: 'rPartStyle',
      type: 'radioGroup',
      extraProps: {
        options: [
          {
            value: '20px',
            label: '圆角'
          },
          {
            value: '2px',
            label: '直角'
          }
        ]
      }
    }
  ]
};

export const formConfig: Array<formConfigType> = [sectionOne, sectionTwo];
