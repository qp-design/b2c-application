import TabBar from '@/components/custom-common';
import { useMemo } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';
const TabBarWeb = ({base} : { base: boolean }) => {

  const isShow = useMemo(() => {
    const isWeb = Taro.getEnv() === 'WEB'
    return isWeb && base
  }, [base]);
  if(!isShow) return;

  return <TabBar />
}

export default TabBarWeb;
