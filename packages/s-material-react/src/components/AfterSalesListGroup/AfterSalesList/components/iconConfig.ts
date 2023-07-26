type iconConfigType = {
  [key: string]: { icon: string; label: string; color: string };
};

export const iconConfig: iconConfigType = {
  B01: {
    icon: 'tuikuan1',
    label: '仅退款(无需退货)',
    color: '#58BE6A'
  },
  B02: {
    icon: 'tuikuan1',
    label: '退货退款',
    color: '#C52922'
  }
};
