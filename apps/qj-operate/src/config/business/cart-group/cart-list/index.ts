import { formConfigType } from '@/type/formConfig';
import { SelectData } from '@/common';
import { SelectAction } from '@/common/selectAction';

export const title = '购物车卡片';
export const info = '购物车卡片的配置';

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
              value: 'cartSelect',
              label: '购物车选择'
            },
            {
              label: '组件更新',
              value: 'cartUpdateCount'
            }
          ],
          data: [
            {
              value: 'select',
              label: '购物车选择',
              isDefault: true
            },
            {
              value: 'disMoney',
              label: '优惠价格',
              isDefault: true
            },
            {
              label: '购物车信息',
              value: 'cartInfo',
              isDefault: true
            }
          ]
        },
        render: SelectData
      }
    }
  ]
};

const configs: formConfigType = {
  title: '配置',
  formConfig: [
    {
      label: '卡片倒角',
      name: 'cartItemRadius',
      type: 'radioGroup',
      extraProps: {
        options: [
          {
            label: '圆角',
            value: '10px'
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

export const formConfig: Array<formConfigType> = [configs, sectionTwo];
