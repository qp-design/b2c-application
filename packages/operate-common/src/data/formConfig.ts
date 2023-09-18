import { FormInstance } from 'antd';

export const formConfigImpl = (
  dataSource: Array<any>,
  isEditor: boolean = false
) => [
  {
    type: 'text',
    name: 'label',
    label: '名称',
    rules: [
      {
        required: true,
        message: ''
      },
      () => ({
        validator(_: any, value: any) {
          if (/^[\u4e00-\u9fa5\d]{1,8}$/.test(value)) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('请输入长度不超过8的中文或数字'));
        }
      })
    ]
  },
  {
    type: 'text',
    name: 'value',
    label: 'Code',
    rules: [
      {
        required: true
      },
      ({ getFieldValue }: FormInstance) => ({
        validator(_: any, value: any) {
          if (isEditor) {
            return Promise.resolve();
          }
          if (
            /^[a-zA-Z_]+$/.test(value) &&
            !dataSource.some((item) => item.value === getFieldValue('value'))
          ) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('请输入字母或者下滑线，且不重复'));
        }
      })
    ],
    extraProps: {
      disabled: isEditor
    }
  },
  {
    type: 'switch',
    name: 'defaultKey',
    label: '默认参数',
    extraProps: {
      checkedChildren: '开启',
      unCheckedChildren: '关闭'
    }
  }
];
