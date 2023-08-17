import { FieldType } from '@brushes/form';

export const formConfig: Array<FieldType> = [
  {
    label: '滚动速度',
    name: 'speed',
    type: 'select',
    extraProps: {
      options: [
        {
          value: 40,
          label: '快'
        },
        {
          value: 30,
          label: '正常'
        },
        {
          value: 20,
          label: '慢'
        }
      ]
    }
  },
  {
    label: '滚动方向',
    name: 'direction',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'horizontal',
          label: '水平'
        },
        {
          value: 'vertical',
          label: '垂直'
        }
      ]
    }
  },
  {
    label: '选择公告',
    name: 'num',
    type: 'select',
    extraProps: {
      placeholder: '请选择公告',
      options: [
        {
          value: 1,
          label: '前1条'
        },
        {
          value: 2,
          label: '前2条'
        },
        {
          value: 3,
          label: '前3条'
        },
        {
          value: 4,
          label: '前4条'
        },
        {
          value: 5,
          label: '前5条'
        }
      ]
    }
  },
  {
    label: '字体颜色',
    name: 'color',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  }
];

export const title = '文本配置';
export const info = '灵活设置展示样式。';
export const initialValues = {
  cell: 1,
  circular: 1
};
