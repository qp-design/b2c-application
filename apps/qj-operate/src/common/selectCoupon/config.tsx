import React from 'react';
import { FieldType } from '@brushes/form';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

export const defaultFormConfig: Array<FieldType> = [
  {
    label: '优惠券名称',
    name: 'promotionName',
    type: 'text',
    extraProps: {
      placeholder: '请输入优惠券名称'
    }
  },
  {
    label: '批次编号',
    name: 'promotionCode',
    type: 'text',
    extraProps: {
      placeholder: '请输入批次编号'
    }
  }
];

export const defaultColumns: ColumnsType<any> = [
  {
    title: '序号',
    dataIndex: 'promotionId',
    width: 80,
    render: (text: any, data: object, ind: number) => ind + 1
  },
  {
    title: '优惠券名称',
    width: 120,
    dataIndex: 'promotionName',
    key: 'promotionName'
  },
  {
    title: '货品范围',
    width: 100,
    dataIndex: 'dataState',
    key: 'dataState'
  },
  {
    width: 120,
    title: '批次编号',
    dataIndex: 'promotionCode',
    key: 'promotionCode'
  },
  {
    width: 120,
    title: '开始时间',
    dataIndex: 'receiveStart',
    key: 'receiveStart',
    render: (value) => dayjs(value).format('YYYY-MM-DD')
  },
  {
    width: 120,
    title: '结束时间',
    dataIndex: 'receiveEnd',
    key: 'receiveEnd',
    render: (value) => dayjs(value).format('YYYY-MM-DD')
  }
];
