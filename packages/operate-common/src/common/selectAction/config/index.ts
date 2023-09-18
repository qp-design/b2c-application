import {
  ShowDefaultParams,
  SelectParams,
  ExtendParams
} from '../../selectAction/component';

export const formConfig = [
  {
    label: '目标页面',
    name: 'target',
    type: 'slot',
    extraProps: {
      render: SelectParams
    }
  },
  {
    label: '默认参数',
    name: 'defaultQuery',
    type: 'slot',
    extraProps: {
      render: ShowDefaultParams
    }
  },
  {
    label: '扩展参数',
    name: 'extendQuery',
    type: 'slot',
    extraProps: {
      render: ExtendParams
    }
  }
];
