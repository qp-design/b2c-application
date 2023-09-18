//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { actionName, useAddShopping, useGoodSkuStore, useGoodSpecAndPrice } from 'qj-mobile-store';
import { SkuItems, SkuItemType } from './skuItem';
import { ScrollWrap } from '@/common/scrollWrap';
import { fixPrice } from '@/utils';
import { memo } from 'react';

interface skuInfoType {
  goodsShowname: string;
  pricesetNprice: number;
  dataPic: string;
  skuList: Array<SkuItemType>;
}

export interface GoodsDetailPopupType {
  skuInfo: skuInfoType;
  goodsCode: string;
  rsSkuDomainList: Array<any>;
}

const GoodSkuCount = memo(({ handleStep }: { handleStep: (e: actionName) => void }) => {
  const { View, NumStep } = useComponent();
  const count = useGoodSkuStore((state: any) => state.count);

  return (
    <View className={'countWrap'}>
      <View className={'label'}>购买数量</View>
      <NumStep count={count} handleStep={handleStep} />
    </View>
  );
});

const SkuComponent = ({
  skuInfo,
  handleChooseSize,
  spec,
  goodInfo
}: {
  skuInfo: skuInfoType;
  spec: Array<any>;
  goodInfo: Object;
  handleChooseSize: (value: string, index: number) => void;
}) => {
  const { Image, View } = useComponent();
  const { skuList } = skuInfo;
  return (
    <>
      <View className={'goodsInfo'}>
        <View className={'lPart'}>
          <Image src={goodInfo.dataPic} alt="" className={'goodsImg'} />
        </View>
        <View className={'rPart'}>
          <View className={'name'}>{goodInfo.goodsName}</View>
          <View className={'price'}>{fixPrice(goodInfo.pricesetNprice)}</View>
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

interface DetailType {
  cashImpl: () => void;
  addShoppingImpl: () => void;
  addCardImpl: () => void;
}

const DetailHandler: React.FC<DetailType> = ({ cashImpl, addShoppingImpl, addCardImpl }) => {
  const { Text, View } = useComponent();
  const isNeedButton = useGoodSkuStore((state) => state.isNeedButton);
  return (
    <>
      {isNeedButton ? (
        <View className={'btnWrap'} onClick={addShoppingImpl}>
          <Text className={'btn'}>确认</Text>
        </View>
      ) : (
        <View className={'goods-detail-btn-group popup-buy-button'}>
          <View className={'btn addCart'} onClick={addCardImpl}>
            加入购物车
          </View>
          <View className={'btn buy'} onClick={cashImpl}>
            立即购买
          </View>
        </View>
      )}
    </>
  );
};
export const InnerComponent: React.FC<GoodsDetailPopupType> = memo(
  ({ dispatchPageStore, goodsCode, skuInfo, rsSkuDomainList }) => {
    const { View, ScrollView } = useComponent();
    const { spec, goodInfo } = useGoodSpecAndPrice(rsSkuDomainList);
    const {
      handleChooseSize, // 规格选择方法
      handleStep, // 数量操作方法
      addCardImpl, // 加入购物车
      cashImpl, // 立即购物
      addShoppingImpl // 立即购物 - 购物车
    } = useAddShopping(goodsCode, skuInfo, dispatchPageStore);

    return (
      <View className={'goodsDetail-size-popup'}>
        <ScrollWrap>
          <ScrollView>
            <View className={'content'}>
              <SkuComponent skuInfo={skuInfo} handleChooseSize={handleChooseSize} spec={spec} goodInfo={goodInfo} />
              <GoodSkuCount handleStep={handleStep.bind(null, goodInfo.goodsNum)} />
            </View>
          </ScrollView>
        </ScrollWrap>
        <DetailHandler cashImpl={cashImpl} addShoppingImpl={addShoppingImpl} addCardImpl={addCardImpl} />
      </View>
    );
  }
);

export const GoodsDetailPopup: React.FC<GoodsDetailPopupType> = ({
  popupVisible,
  dispatchPageStore,
  goodsCode,
  skuInfo,
  rsSkuDomainList
}) => {
  const { Popup } = useComponent();
  const closePopup = () => {
    dispatchPageStore({
      visible: false
    });
  };
  return (
    <Popup popupVisible={popupVisible} popupHandler={closePopup}>
      <InnerComponent
        dispatchPageStore={dispatchPageStore}
        goodsCode={goodsCode}
        skuInfo={skuInfo}
        rsSkuDomainList={rsSkuDomainList}
      />
    </Popup>
  );
};
