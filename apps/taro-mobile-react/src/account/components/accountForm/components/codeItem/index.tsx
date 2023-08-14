import {Form, Input} from 'antd-mobile'
import {CodeWrap} from "./components";

export const CodeItem = ({txt = '验证码', form, type}) => {
  return (
    <Form.Item
      name='code'
      extra={
        <CodeWrap form={form} type={type} />
      }
      rules={[
        {
          required: true,
          message: `${txt}不能为空`
        }
      ]}
    >
      <Input
        maxLength={6}
        clearable
        placeholder={`请输入${txt}`}
      />
    </Form.Item>
  )
}
