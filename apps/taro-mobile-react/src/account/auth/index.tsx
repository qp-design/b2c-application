import Taro from "@tarojs/taro";
import {View, Image, Button, Checkbox, CheckboxGroup} from '@tarojs/components';
import {useAgreement, useAuth} from "@/account/hooks";

import './index.scss';


const Index = () => {
  const {bg, logo, agree, agreeFunc, setAgree, getPhone} = useAuth();
  const {goDetail} = useAgreement();


  const goLogin = () => {
    Taro.navigateTo({
      url: `/account/mobileLogin/index`
    })
  }

  const confirmFunc = () => {
    Taro.showModal({
      title: '温馨提示',
      content: '阅读并同意《用户协议》和《隐私政策》',
      success:() => {
        setAgree(true);
      }
    })
  }


  return (
    <View className='auth' style={{
      backgroundImage: `url(${bg})`,
    }}
    >
      <Image className='logo' src={logo} mode='widthFix' />

      <View className='handleWrap'>
        <View className='info'>
          <View className='read'>
            <CheckboxGroup onChange={agreeFunc}>
              <Checkbox value='1' checked={agree}>
                阅读并同意
              </Checkbox>
            </CheckboxGroup>
          </View>
          <View className='agreement'>
            <View className='link' onClick={goDetail.bind(null, 'xieyi')}>《用户协议》</View>和<View className='link' onClick={goDetail.bind(null, 'yinsi')}>《隐私政策》</View>
          </View>
        </View>
        {
          agree?<Button className='btn' open-type='getPhoneNumber' onGetPhoneNumber={getPhone}>微信用户一键登录</Button>:
            <Button className='btn' onClick={confirmFunc}>微信用户一键登录</Button>
        }
        <View className='linkReg' onClick={goLogin}>输入手机号码登录/注册</View>
      </View>
    </View>
  )
}

export default Index;
