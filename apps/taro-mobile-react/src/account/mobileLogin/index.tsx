import {View} from '@tarojs/components';
import HeaderJsx from "@/components/header";
import {AccountForm, AgreementEntry, LinkReg, TopLogo} from "../components";
import {useAccountForm} from "../hooks";
import './index.scss'

const Index = () => {
  const {goAccountLogin} = useAccountForm()
  return (
    <View>
      <HeaderJsx
        slot={
          <LinkReg />
        }
      />
      <TopLogo />
      <AccountForm type='mobileLogin' btnText='登录' />
      <View className='tip'>
        <View onClick={goAccountLogin}>账号密码登录</View>
      </View>
      <AgreementEntry />
    </View>
  )
}

export default Index;
