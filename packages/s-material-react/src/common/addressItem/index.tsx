//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { useAddressItem } from 'qj-mobile-store';

const Item = ({ setDefault, checked }: any) => {
  const { SmoothCheckbox, Checkbox } = useComponent();
  return (
    <SmoothCheckbox onChange={setDefault}>
      <Checkbox
        checked={checked}
        style={{
          '--icon-size': '18px',
          '--font-size': '14px',
          '--gap': '6px'
        }}
      >
        设为默认地址
      </Checkbox>
    </SmoothCheckbox>
  );
};

export const AddressItem = ({ itemData, delAddress, setDefault }: any) => {
  const { View, Text } = useComponent();
  const { handlerImpl } = useAddressItem(itemData);
  return (
    <View className={'addressItem'}>
      <View className={'upInfo'} onClick={handlerImpl}>
        <View className={'userInfo'}>
          {itemData.addressMember} {itemData.addressPhone}
        </View>
        <View className={'addressInfo'}>
          <Text className={'address'}>
            {itemData.provinceName} {itemData.areaName} {itemData.cityName} {itemData.addressDetail}
          </Text>
          {/*<View className={'icon'}></View>*/}
          {/*<IconMobile value={'bianjishuru'} />*/}
        </View>
      </View>
      <View className={'downInfo'}>
        <Item checked={itemData?.addressDefault === '1'} setDefault={setDefault} />
        <Text className={'del'} onClick={delAddress}>
          删除
        </Text>
      </View>
    </View>
  );
};
