//@ts-nocheck
import { memo, type FC } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { AddressItem } from '@/common/addressItem';
import { useAddressList } from 'qj-mobile-store';
import { Skull } from './components';
import { NoData } from '@/common/noData';

interface AddressListProps {
  refreshNum: number;
  borderColor: string;
  color: string;
  btnColor: string;
  btnShape: string;
  paddingTop: number;
  paddingBottom: number;
}
const AddressListJsx: FC<AddressListProps> = ({
  refreshNum,
  btnShape,
  btnColor,
  borderColor,
  paddingBottom,
  paddingTop,
  color
}) => {
  const { View } = useComponent();
  const { list, delAddress, setDefault, skullShow, navigator } = useAddressList(refreshNum);

  return (
    <View
      className={'addressListWrap'}
      style={{
        paddingTop: paddingTop + 'px',
        marginBottom: paddingBottom + 'px'
      }}
    >
      {skullShow ? (
        <Skull />
      ) : (
        <View className={'addressList'}>
          {list.length ? (
            list.map((item, index) => (
              <AddressItem
                itemData={item}
                key={item?.addressId}
                setDefault={setDefault.bind(null, item, index)}
                delAddress={delAddress.bind(null, item)}
              />
            ))
          ) : (
            <NoData
              url={'https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noAddress.png'}
              title={'您还没有添加过地址'}
            />
          )}
        </View>
      )}
      <View className={'addBtnWrap'}>
        <View
          style={{ borderRadius: btnShape, borderColor, color, backgroundColor: btnColor }}
          className={'addBtn'}
          onClick={navigator}
        >
          + 新增地址
        </View>
      </View>
    </View>
  );
};

export const AddressList = memo(AddressListJsx);
