import { useComponent } from '@brushes/simulate-component';
import { SkuItems, SkuItemType } from '@/components/GoodsDetailGroup/common/skuItem';
import { fixPrice } from '@/utils';
import { Dispatch } from 'react';

interface skuInfoType {
  goodsShowname: string;
  pricesetNprice: number;
  dataPic: string;
  skuList: Array<SkuItemType>;
}

export interface CartDetailPopupType {
  skuInfo: skuInfoType;
  goodsCode: string;
  visible: boolean;
  setVisible: Dispatch<boolean>;
}

const SkuComponent = ({
  skuInfo,
  handleChooseSize
}: {
  skuInfo: skuInfoType;
  handleChooseSize: (value: string, index: number) => void;
}) => {
  const { goodsShowname = {}, pricesetNprice, dataPic, skuList } = skuInfo;
  const { Image, View } = useComponent();
  const spec = [] as any;
  return (
    <>
      <View className={'goodsInfo'}>
        <View className={'lPart'}>
          <Image src={dataPic} alt="" className={'goodsImg'} />
        </View>
        <View className={'rPart'}>
          <View className={'name'}>{goodsShowname}</View>
          <View className={'price'}>{fixPrice(pricesetNprice)}</View>
          <View className={'chosen'}>已选择: {spec.toString()}</View>
        </View>
      </View>
      {skuList.map((item, index) => (
        <SkuItems
          spec={spec}
          handleChooseSize={handleChooseSize}
          key={index}
          index={index}
          skuName={item.skuName}
          skuOption={item.skuOption}
        />
      ))}
    </>
  );
};

const DetailHandler = () => {
  const { Text, View } = useComponent();
  return (
    <View className={'btnWrap'} onClick={() => {}}>
      <Text className={'btn'}>确认</Text>
    </View>
  );
};

export const CartPopup: React.FC<CartDetailPopupType> = ({ goodsCode, visible, setVisible, skuInfo }) => {
  const { View, Popup } = useComponent();

  return (
    <Popup popupVisible={visible} popupHandler={() => setVisible(false)}>
      <View className={'goodsDetail-size-popup'}>
        <View className={'content'}>
          <SkuComponent skuInfo={skuInfo} handleChooseSize={() => {}} />
        </View>
        <DetailHandler />
      </View>
    </Popup>
  );
};
