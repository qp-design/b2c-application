// import { business } from '@/menu/business';
import { initImpl } from '@/menu/combile';

// 基础组件
const basicMenu = initImpl('basic');

// 业务组件
const businessMenu = initImpl('business');

export const config = [
  {
    code: 'basic',
    label: '基础组件',
    children: basicMenu
  },
  {
    code: 'business',
    label: '业务组件',
    children: businessMenu
  }
];
