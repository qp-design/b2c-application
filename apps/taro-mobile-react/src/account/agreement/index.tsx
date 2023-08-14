import {View} from '@tarojs/components';
import HeaderJsx from "@/components/header";
import {useRouter} from '@tarojs/taro';

import {get} from 'lodash-es';
import {useAgreement} from "../hooks";
import './index.scss';


const Index = () => {
  const router = useRouter();

  const {agreementData} = useAgreement(get(router, 'params.type'));

  return (
    <View>
      <HeaderJsx />
      <View className='wrap' dangerouslySetInnerHTML={{__html: agreementData}}></View>
    </View>
  )
}

export default Index;
