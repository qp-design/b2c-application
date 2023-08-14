import { get, noop } from 'lodash-es';
import * as materials from 's-material-react';
import {Fragment, memo} from 'react';
import {useDataSource, useDataSourceWithContext} from '@brushes/taro-hooks';
import {View} from "@tarojs/components";
import Taro from '@tarojs/taro';

const ComponentWithContext = memo(
  ({
     component_devil_type,
     withPageStore,
     ...rest } : {
    component_devil_type: string;
    withPageStore: Map<string, any>;
  }) => {
    const MaterialsComponent = get(materials, component_devil_type, noop);
    const storeProps = useDataSourceWithContext(withPageStore);
    return <MaterialsComponent {...rest} $_dataSource={storeProps} />
  })

const ComponentNoContext = memo((
  {
    component_devil_type,
    withPageStore,
    ...rest
  } : {
    component_devil_type: string;
  }) => {
  const MaterialsComponent = get(materials, component_devil_type, noop);
  return <MaterialsComponent {...rest} />
})

const ComponentItem = ({ type, props,  ...rest } : {type: string; props: Object;}) => {
  const {propsType, withPageStore} = useDataSource(type, props, rest);
  return (
    <Fragment>
      {
        withPageStore.size > 0 ? <ComponentWithContext {...propsType} /> : <ComponentNoContext {...propsType} />
      }
    </Fragment>
  )
}

const getDistance = (base: any) => {
  if(base) {
    return `${Taro.getStorageSync('safeArea') + Taro.getStorageSync('tabBarHeight')}px`
  }
  return `${Taro.getStorageSync('safeArea')}px`
}

const DynamicComponent = ({node, topPage, base, ...rest}: { node: Array<any>; [v: string]: unknown }) => {
  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          if(['CartOperate', 'PlaceOrderOperate', 'AddressListBtn'].includes(type)) {
            const stickyDistance = getDistance(base)
            return (
              <View
                key={id}
                style={{
                  marginBottom: stickyDistance,
                  position: 'fixed',
                  width: '100%',
                  bottom: 0,
                  zIndex: 998
                }}
              >
                <ComponentItem
                  type={type}
                  props={props}
                  {...rest}
                />
              </View>
            )
          }

          return (
            <ComponentItem
              key={id}
              type={type}
              props={props}
              {...rest}
            />
          )
        })
      }
    </>
  )
}

export default DynamicComponent;
