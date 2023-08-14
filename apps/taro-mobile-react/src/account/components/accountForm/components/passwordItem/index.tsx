import {useState} from "react";
import {View} from '@tarojs/components';
import {Form, Input} from 'antd-mobile'
import {IconMobile} from '@brushes/simulate-component';

export const PasswordItem = ({txt = '密码'}) => {
  const [pwdType, setPwdType] = useState(true)

  const checkPwd = (_: any, value: any) => {
    if (value.length > 5 && value.length < 13) {
      return Promise.resolve()
    }
    return Promise.reject(new Error(`请输入6-12位${txt}`));
  }

  return (
    <Form.Item
      name='password'
      rules={[
        {
          required: true,
          message: `${txt}不能为空`
        },
        {
          validator: checkPwd
        }
      ]}
      extra={
        <View onClick={() => setPwdType(!pwdType)}>
          {
            pwdType ? <IconMobile value='yincang' /> : <IconMobile value='liulan' />
          }
        </View>
      }
    >
      <Input placeholder={`请输入${txt}`} clearable type={pwdType ? 'password' : 'text'} />
    </Form.Item>
  )
}
