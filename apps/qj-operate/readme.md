### 物料配置

#### 目录接口
> src
>> common
---- 组件配置的通用组件 以后发npm
> 
>> config
---- 对应的组件配置的jsx
>>> china.ts 导出组件配置的
- example
  - export * as Goods from './goods';
  - export * as Texts from './texts';
  - export * as Cube from './cube';
  - export * as Line from './line';


- text 配置例子 
```javascript
import {FieldType} from '@brushes/components';
import React from 'react';
export const formConfig: Array<FieldType> = [
  {
    label: '选择模版',
    name: 'cell',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '一行1个'
        },
        {
          value: 2,
          label: '一行2个'
        },
      ]
    }
  },
  {
    label: '是否圆角',
    name: 'circular',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆角'
        },
        {
          value: 2,
          label: '直角'
        },
      ]
    }
  },
  {
    label: '间距',
    name: 'margin',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 8,
          label: '小'
        },
        {
          value: 10,
          label: '中'
        },
        {
          value: 15,
          label: '大'
        },
      ]
    }
  },
]

export const title = '文本配置';
export const info = '灵活设置展示样式。';
export const initialValues = {
  cell: 1,
  circular: 1,
}
```
>> core 
> ---- 搜索配置的Jsx入口
- 先有的不改
- 可以扩展vue配置入口
> 
>> hooks
---- 获取对应组件的配置
- 先有的不要改动
- 可扩展

