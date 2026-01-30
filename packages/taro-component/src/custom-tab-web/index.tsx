import TabBar from '../components/custom-common';
import { useMemo } from 'react';
import Taro from '@tarojs/taro';
export const TabBarWeb = ({ base, defaultColor = '#b8b8b8', activeColor = '#000000' }: { defaultColor?: string; base: boolean; activeColor?: string }) => {
  const isShow = useMemo(() => {
    const isWeb = Taro.getEnv() === 'WEB';
    return isWeb && base;
  }, [base]);
  if (!isShow) return;

  return <TabBar selectedColor={activeColor} color={defaultColor} />;
};
