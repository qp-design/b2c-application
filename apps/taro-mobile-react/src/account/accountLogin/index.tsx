import {View} from '@tarojs/components';
import HeaderJsx from "@/components/header";
import {AccountForm, AgreementEntry, TopLogo, LinkReg} from "../components";

import {useAccountForm} from "../hooks";
import './index.scss'

const Index = () => {
  const {goMobileLogin, goForgetPwd} = useAccountForm()


  return (
    <View>
      <HeaderJsx slot={
        <LinkReg />
      }
      />
      <TopLogo />
      <AccountForm type='accountLogin' btnText='登录' />
      <View className='tip'>
        <View onClick={goMobileLogin}>快捷登录</View>
        <View onClick={goForgetPwd}>忘记密码？</View>
      </View>
      <AgreementEntry />
    </View>
  )
}

export default Index;
