import {usePageConfig, FastContextProvider} from '@brushes/taro-hooks';
import HeaderJsx from '@/components/header';
import DynamicComponent from './dynamicComponent';
import {useEffect} from 'react';
import Taro from '@tarojs/taro';

const CommonJsx = ({route, ...rest}: { route : string; [v:string]: any}) => {
  const {node, initialValue, title, pageConfig} = usePageConfig(route);
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: title || '首页'
    });
  }, [title])

  console.log(15, pageConfig);
  return (
  <FastContextProvider value={initialValue}>
    <HeaderJsx navigationBarTitle={title} />
    <DynamicComponent node={node} {...rest} />
  </FastContextProvider>
  )
}

export default CommonJsx;
