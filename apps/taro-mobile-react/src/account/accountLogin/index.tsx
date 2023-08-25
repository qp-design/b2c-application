import {useState} from "react";
import {View} from '@tarojs/components';
import {HeaderJsx} from "@brushes/taro-component";
import {AccountForm, AgreementEntry, TopLogo, LinkReg} from "../components";

import {useAccountForm} from "../hooks";
import './index.scss'

const Index = () => {
  const {goMobileLogin, goForgetPwd } = useAccountForm();
  const [agree, setAgree] = useState(false)


  return (
    <View>
      <HeaderJsx slot={
        <LinkReg />
      }
        navigationBarTitle='登录'
      />
      <TopLogo />
      <AccountForm agree={agree} type='accountLogin' btnText='登录' />
      <View className='tip'>
        <View onClick={goMobileLogin}>快捷登录</View>
        <View onClick={goForgetPwd}>忘记密码？</View>
      </View>
      <AgreementEntry
        agree={agree}
        setAgree={setAgree}
      />
    </View>
  )
}

export default Index;
