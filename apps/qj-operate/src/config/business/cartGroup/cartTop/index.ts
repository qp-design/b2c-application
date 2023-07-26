import type { FieldType } from '@brushes/form';
import { SelectColor, SelectData } from '@/common';
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
              value: 'cartIsEditor',
              label: '购物车编辑'
            }
          ],
          data: [
            {
              label: '购物车编辑',
              value: 'isEditor',
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
  title: '基本设置',
  formConfig: [
    {
      label: '编辑样式',
      name: 'btnStyle',
      type: 'radioGroup',
      extraProps: {
        options: [
          {
            label: '文本',
            value: false
          },
          {
            label: '按钮',
            value: true
          }
        ]
      }
    },
    {
      label: '按钮边框',
      name: 'borderColor',
      type: 'slot',
      extraProps: {
        render: SelectColor
      }
    },
    {
      label: '按钮字体',
      name: 'textColor',
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
      label: '按钮倒角',
      name: 'btnShape',
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

export const title = '购物车编辑配置';
export const info = '灵活设置展示样式。';

export const formConfig: Array<{
  title: string;
  formConfig: Array<FieldType>;
}> = [sectionOne, sectionTwo];
