import {View} from '@tarojs/components';
import {AccountForm} from "@/account/components";
import {useRouter} from '@tarojs/taro';
import {get} from 'lodash-es';
import {accountConst} from "@/account/constans";

const Index = () => {
  const router = useRouter();
  accountConst.oldUserPhone = get(router, 'params.oldUserPhone')

  return (
    <View>
      <AccountForm type='bindPhone' btnText='绑定' />
    </View>
  )
}

export default Index;
