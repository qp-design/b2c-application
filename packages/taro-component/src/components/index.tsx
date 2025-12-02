//@ts-nocheck
import { usePageConfig, FastContextProvider } from '@brushes/taro-hooks';
import HeaderJsx from './header';
import DynamicComponent from './dynamicComponent';
import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { useTheme } from '@/hooks';

export const CommonJsx = ({ route, menuOpCode, ...rest }: { route: string; menuOpCode?: string; [v: string]: any }) => {
  useTheme();
  const { node, initialValue, title, theme, pageConfig } = usePageConfig(route, menuOpCode);
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: title || '首页'
    });
  }, [title]);
  return (
    <FastContextProvider value={initialValue}>
      <HeaderJsx navigationBarTitle={title} />
      <DynamicComponent node={node} {...rest} menuOpCode={menuOpCode} />
    </FastContextProvider>
  );
};
