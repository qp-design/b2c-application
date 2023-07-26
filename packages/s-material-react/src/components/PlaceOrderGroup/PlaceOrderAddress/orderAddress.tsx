import { useComponent } from '@brushes/simulate-component';
import { isEmpty } from 'lodash-es';
import { useMemo } from 'react';

export interface AddressType {
  provinceName: string;
  cityName: string;
  areaName: string;
  addressDetail: string;
  addressMember: string;
  addressPhone: string;
  addressDefault: string;
}

interface ExtendType {
  address: string;
  addressMember: string;
  addressPhone: string;
  addressDefault: boolean;
}

export const OrderAddress = ({ address }: { address: AddressType }) => {
  return <>{isEmpty(address) ? <NoAddress /> : <DefaultAddress address={address} />}</>;
};

const DefaultAddress = ({ address }: { address: AddressType }) => {
  const { View, SmoothView, IconMobile } = useComponent();
  const addressInfo: ExtendType = useMemo(() => {
    const {
      provinceName,
      addressDefault,
      cityName,
      areaName,
      addressDetail,
      addressMember = '',
      addressPhone = ''
    } = address;
    return {
      addressDefault: addressDefault === '1',
      addressMember,
      addressPhone,
      address: provinceName + cityName + areaName + addressDetail
    };
  }, [address]);
  return (
    <View className="address-info">
      <IconMobile
        style={{
          fontWeight: 900,
          color: '#444',
          lineHeight: 3.2
        }}
        value={'shouhuodizhi'}
      />
      <View className="left">
        <View className="left-title">
          <SmoothView>{addressInfo.addressMember}</SmoothView>
          <SmoothView className={'left-padding'}>{addressInfo.addressPhone}</SmoothView>
          {addressInfo.addressDefault ? (
            <SmoothView className={'left-padding left-title-default'}>默认</SmoothView>
          ) : null}
        </View>
        <SmoothView className="left-detail">{addressInfo.address}</SmoothView>
      </View>
      <IconMobile
        value={'xiangyou1'}
        style={{
          color: '#444',
          lineHeight: 3,
          textAlign: 'right'
        }}
      />
    </View>
  );
};

const NoAddress = () => {
  const { View, Text } = useComponent();
  return (
    <>
      <View className={'group'}>
        <Text className={'local'}></Text>
        <Text className={'address'}>选择收货地址</Text>
      </View>
      <Text className={'arrow'}></Text>
    </>
  );
};
