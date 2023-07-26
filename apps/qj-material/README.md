## 物料菜单配置

### 目录结构

> src
>> components
>>> moduleC  ----- 物料容器逻辑
>>> templateC ----- 模版容器逻辑
>
>> mock
>>> config.tsx ----- 物料菜单的配置项

### 配置示例

配置分为三个层级：

- 一级：分为**基础组件**及**业务组件**。
- 二级：一级分类下属的单个功能组件的集合。
- 三级：具体的单个功能组件配置项。

``` javascript
{
    code: 'basic',
    label: '基础组件',
    children: [
      {
        code: 'index',
        type: 'Title',
        name: '标题',
        group: [
          {
            type: 'Title',
            name: '主标题',
            icon: 'icon-text',
            props: {
              value: '请填写主标题或文本',
              fontSize: 20,
              textAlign: 'left',
              color: '#000000',
              backgroundColor: '#fafafa',
              fontWeight: 'normal',
              textDecoration: 'none',
              fontStyle: 'normal',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          }
        ]
      },
    ]
  }
```

