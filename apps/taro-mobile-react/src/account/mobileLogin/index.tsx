import {useState} from "react";
import {View} from '@tarojs/components';
import { HeaderJsx } from "@brushes/taro-component";
import {AccountForm, AgreementEntry, LinkReg, TopLogo} from "../components";
import {useAccountForm} from "../hooks";
import './index.scss'

const Index = () => {
  const {goAccountLogin} = useAccountForm()
  const [agree, setAgree] = useState(false)

  return (
    <View>
      <HeaderJsx
        slot={
          <LinkReg />
        }
      />
      <TopLogo />
      <AccountForm type='mobileLogin' agree={agree} btnText='登录' />
      <View className='tip'>
        <View onClick={goAccountLogin}>账号密码登录</View>
      </View>
      <AgreementEntry
        agree={agree}
        setAgree={setAgree}
      />
    </View>
  )
}

export default Index;
