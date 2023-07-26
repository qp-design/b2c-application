import { FieldType } from '@brushes/form';
import { formConfigType } from '@/type/formConfig';

export const title = '下单页地址';
export const info = '下单页地址的配置';
export const initialValues = {
  cell: 1,
  circular: 1
};

const sectionOne: formConfigType = {
  title: '数据流',
  formConfig: [
    {
      label: '下游',
      name: ['dataSource', 'pageStore'],
      type: 'select',
      extraProps: {
        mode: 'multiple',
        options: [
          {
            label: '省级Code',
            value: 'provinceCode'
          }
        ]
      }
    }
  ]
};

export const formConfig: Array<{
  title: string;
  formConfig: Array<FieldType>;
}> = [];
