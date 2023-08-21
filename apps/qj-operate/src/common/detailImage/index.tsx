import React from 'react';

export const DetailImage = (value: Array<any> | string) => {
  console.log(4, value);
  if (!Array.isArray(value)) return value;
  return (
    <div className={'detailImage'}>
      {value.map((item) => (
        <img width={'100%'} key={item.uid} src={item.url} alt={item.uid} />
      ))}
    </div>
  );
};
