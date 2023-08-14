// import { business } from '@/menu/business';
import { initImpl } from '@/menu/combile';

// 基础组件
const basicMenu = initImpl('basic');

// 业务组件
const businessMenu = initImpl('business');

// 营销组件
const marketingMenu = initImpl('marketing');

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
  },
  {
    code: 'marketing',
    label: '营销组件',
    children: marketingMenu
  }
];
