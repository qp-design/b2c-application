import {View, CheckboxGroup, Checkbox} from '@tarojs/components';
import {useAgreement} from "../../hooks";

import './index.scss'

export const AgreementEntry = ({agree, setAgree}) => {
  const {goDetail} = useAgreement()

  const handleChange = (e: any) => {
    const target = e.detail.value.length || 0;
    console.log(46, target)
    if(target === 0) {
      setAgree(false);
    }else {
      setAgree(true);
    }
  }

  return (
    <View className='agreement'>
      <View className='read'>
        <CheckboxGroup onChange={(e) => handleChange(e)}>
          <Checkbox value={agree}>阅读并同意</Checkbox>
        </CheckboxGroup>
      </View>
      <View className='content'>
       <View className='link' onClick={goDetail.bind(null, 'xieyi')}>《用户协议》</View> 和 <View className='link' onClick={goDetail.bind(null, 'yinsi')}>《隐私政策》</View>
      </View>
    </View>
  )
}
