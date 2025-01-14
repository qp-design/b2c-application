import React from 'react';
import { dynamicFormFields } from '@brushes/form';
import { SelectGoods } from '../selectGoods';

export const SelectGoodsGroup: React.FC = ({
  form,
  name,
  parentName = []
}: any) => {
  const [ind] = name;
  return (
    <div className={'SelectGoodsGroupItem'}>
      {dynamicFormFields(
        [
          {
            label: '主标题',
            name: [ind, 'title'],
            type: 'text'
          },
          {
            label: '副标题',
            name: [ind, 'subTitle'],
            type: 'text'
          },
          {
            label: '选择商品',
            name: [parentName, ind, 'goodsList'],
            type: 'slot',
            extraProps: {
              render: SelectGoods
            }
          }
        ],
        form
      )}
    </div>
  );
};
