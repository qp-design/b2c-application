import {Form, Input} from 'antd-mobile'

export const AccountItem = ({txt = '账号'}) => {
  return (
    <Form.Item
      name='account'
      rules={[
        {
          required: true,
          message: `${txt}不能为空`
        },
      ]}
    >
      <Input
        clearable
        placeholder={`请输入${txt}`}
      />
    </Form.Item>
  )
}
