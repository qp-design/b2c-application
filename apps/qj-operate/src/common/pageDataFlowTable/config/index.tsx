import React from 'react';
enum EBool {
  '否',
  '是'
}
export interface PageArgsDataType {
  title: string;
  code: string;
  isDefault: keyof typeof EBool;
}
export interface PageStoreDataType extends Omit<PageArgsDataType, 'isDefault'> {}
export const defaultPageArgsDataSource: Array<PageArgsDataType> = [
  {
    title: '商品',
    code: '商品code',
    isDefault: '是'
  },
  {
    title: '活动',
    code: '活动code',
    isDefault: '否'
  }
];
export const defaultPageStoreDataSource: Array<PageStoreDataType> = [
  {
    title: '地址',
    code: '地址code'
  }
];
