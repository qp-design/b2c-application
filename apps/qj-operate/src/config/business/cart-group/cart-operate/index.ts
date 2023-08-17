import type { FieldType } from '@brushes/form';
import { SelectData } from '@/common';
import { formConfigType } from '@/type/formConfig';

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
              value: 'cartInfo',
              label: '购物车信息'
            },
            {
              value: 'cartDisMoney',
              label: '购物车优惠'
            },
            {
              value: 'cartSelect',
              label: '购物车选择'
            },
            {
              label: '购物车编辑',
              value: 'cartIsEditor'
            }
          ],
          data: [
            {
              value: 'select',
              label: '购物车选择',
              isDefault: true
            },
            {
              label: '购物车更新',
              value: 'updateCount',
              isDefault: true
            }
          ]
        },
        render: SelectData
      }
    }
  ]
};

const sectionOne = {
  title: '基本配置',
  formConfig: [
    {
      label: '结算按钮边框',
      name: 'countBorderColor',
      type: 'color',
      extraProps: {
        allowClear: true,
        showText: true
      }
    },
    {
      label: '结算按钮字体',
      name: 'countTextColor',
      type: 'color',
      extraProps: {
        allowClear: true,
        showText: true
      }
    },
    {
      label: '结算按钮颜色',
      name: 'countBtnColor',
      type: 'color',
      extraProps: {
        allowClear: true,
        showText: true
      }
    },
    {
      label: '结算按钮倒角',
      name: 'countBtnShape',
      type: 'radioGroup',
      extraProps: {
        options: [
          {
            label: '圆角',
            value: '20px'
          },
          {
            label: '直角',
            value: '0px'
          }
        ]
      }
    }
  ]
};
export const title = '按钮配置';
export const info = '灵活设置展示样式。';

export const formConfig: Array<{
  title: string;
  formConfig: Array<FieldType>;
}> = [sectionOne, sectionTwo];
