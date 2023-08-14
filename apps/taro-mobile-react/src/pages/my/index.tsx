import {BaseWrapCommon} from "@/components/baseWrapCommon";
import {useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import CommonJsx from '../../components';


const Index = () => {
  const { path } = useRouter();
  return (
    <View className='container'>
      <BaseWrapCommon base>

        <CommonJsx route={path} topPage />

      </BaseWrapCommon>
    </View>
  )
}


export default Index;
