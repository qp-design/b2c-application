//@ts-nocheck
import { get, noop } from 'lodash-es';
import { Fragment, memo } from 'react';
import { useDataSource, useDataSourceWithContext, getMaterial } from '@brushes/taro-hooks';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useDataPageQueryNext } from '@brushes/shared-utils';

// eslint-disable-next-line react/display-name
const ComponentWithContext = memo(({ component_devil_type, withPageStore, ...rest }: { component_devil_type: string; withPageStore: Map<string, any> }) => {
  const materials = getMaterial();
  const MaterialsComponent = get(materials, component_devil_type, noop);
  const storeProps = useDataSourceWithContext(withPageStore);
  return <MaterialsComponent {...rest} $_dataSource={storeProps} />;
});

const ComponentNoContext = memo(({ component_devil_type, withPageStore, ...rest }: { component_devil_type: string }) => {
  const materials = getMaterial();
  const MaterialsComponent = get(materials, component_devil_type, noop);
  return <MaterialsComponent {...rest} />;
});

const ComponentItem = memo(({ type, props, ...rest }: { type: string; props: Object }) => {
  const { propsType, withPageStore } = useDataSource(type, props, rest);
  const appendParams = useDataPageQueryNext(propsType);
  return <Fragment>{withPageStore.size > 0 ? <ComponentWithContext {...appendParams} /> : <ComponentNoContext {...appendParams} />}</Fragment>;
});

const getDistance = (base: any) => {
  if (base) {
    if (Taro.getEnv() === 'WEB') {
      return 60;
    }
    return `${Taro.getStorageSync('safeArea') + Taro.getStorageSync('tabBarHeight') || 60}px`;
  }
  return `${Taro.getStorageSync('safeArea')}px`;
};

const DynamicComponent = memo(({ node, topPage, base, ...rest }: { node: Array<any>; [v: string]: unknown }) => {
  return (
    <>
      {node.map(({ id, props = {}, type }) => {
        if (['CartOperate', 'PlaceOrderOperate', 'AddressListBtn'].includes(type)) {
          const stickyDistance = getDistance(base);
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
              <ComponentItem type={type} props={props} {...rest} />
            </View>
          );
        }

        return <ComponentItem key={id} type={type} props={props} {...rest} />;
      })}
    </>
  );
});

export default DynamicComponent;
