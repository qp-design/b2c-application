import {View} from '@tarojs/components';
import {AccountForm} from "@/account/components";

import {useBindPhone} from "@/account/hooks";
import './index.scss';


const Index = () => {
  const {originPhone} = useBindPhone();

  return (
    <View>
      <AccountForm type='confirmPhone' btnText='下一步' originPhone={originPhone} />
    </View>
  )
}

export default Index;
