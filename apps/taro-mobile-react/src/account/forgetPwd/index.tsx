import {View} from '@tarojs/components';
import HeaderJsx from "@/components/header";
import {AccountForm, TopLogo} from "../components";

import './index.scss'

const Index = () => {
  return (
    <View>
      <HeaderJsx />
      <TopLogo />
      <AccountForm type='forgetPwd' btnText='确定' txt='新密码' />
    </View>
  )
}

export default Index;
