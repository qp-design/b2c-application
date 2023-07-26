type TypeConfig = {
  [key: string]: { label: string; value?: string }[];
};

const typeConfig: TypeConfig = {
  '1': [
    {
      label: '仅退款(无需退货)',
      value: 'B01'
    },
    {
      label: '退货退款',
      value: 'B02'
    }
  ],
  '2': [
    {
      label: '仅退款(无需退货)',
      value: 'B01'
    }
  ],
  '3': [
    {
      label: '仅退款(无需退货)',
      value: 'B01'
    },
    {
      label: '退货退款',
      value: 'B02'
    }
  ],
  '4': [
    {
      label: '仅退款(无需退货)',
      value: 'B01'
    },
    {
      label: '退货退款',
      value: 'B02'
    }
  ]
};

export const handleType = (type: number = 2) => {
  return typeConfig[type];
};
