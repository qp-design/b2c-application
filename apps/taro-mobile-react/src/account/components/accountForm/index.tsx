import {View} from '@tarojs/components';
import {Form} from 'antd-mobile';

import {MobileItem, CodeItem, PasswordItem, SubmitBtn, AccountItem, ReadOnlyItem} from "./components";
import {useAccountForm} from "../../hooks";

export const AccountForm = ({type, btnText, txt, originPhone}: {type: string; btnText: string; txt?: string; originPhone?: string}) => {
  const {form, onFinish} = useAccountForm(type)

  return (
    <View>
      <Form
        form={form}
        footer={
          <SubmitBtn btnText={btnText} />
        }
        onFinish={onFinish}
      >
        {
          ['accountLogin'].includes(type) ? <AccountItem /> : null
        }
        {
          ['confirmPhone'].includes(type) ? <ReadOnlyItem originPhone={originPhone} form={form} /> : null
        }
        {
          ['forgetPwd', 'reg', 'mobileLogin', 'bindPhone'].includes(type) ? <MobileItem /> : null
        }
        {
          ['reg', 'mobileLogin','forgetPwd', 'confirmPhone', 'bindPhone'].includes(type) ? <CodeItem form={form} type={type} /> : null
        }
        {
          ['reg', 'accountLogin','forgetPwd'].includes(type) ? <PasswordItem txt={txt}  /> : null
        }
      </Form>
    </View>
  )
}
