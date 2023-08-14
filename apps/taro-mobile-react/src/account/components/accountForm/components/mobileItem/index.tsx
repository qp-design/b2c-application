import {Form, Input} from 'antd-mobile'
import {mobileRex} from "@/utils";

export const MobileItem = ({txt = '手机号'}) => {
  return (
    <Form.Item
      name='mobile'
      rules={[
        {
          required: true,
          message: `${txt}不能为空`
        },
        {
          pattern: mobileRex,
          message: `请输入正确${txt}`
        }
      ]}
    >
      <Input
        maxLength={11}
        clearable
        placeholder={`请输入${txt}`}
      />
    </Form.Item>
  )
}

