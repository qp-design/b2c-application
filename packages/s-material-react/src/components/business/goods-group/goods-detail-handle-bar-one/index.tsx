//@ts-nocheck
import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { useService } from '@/utils';
import { GoodsDetailPopup } from '../common/goodsDetailPopup';
import { useGoodSku, popupImplement, useGoodDetail, useGoodSpecAndPrice } from 'qj-mobile-store';
import { noop } from 'lodash-es';
import { useDataPageQuery } from '@/hooks/useDataPageQuery';

const GoodsDetailHandleBarInitial = {
  serverShow: true,
  cartShow: true,
  lBtnBorderColor: '#000000',
  lBtnFontColor: '#000000',
  lBtnColor: '#FFFFFF',
  lBtnStyle: 1,
  rBtnBorderColor: '#000000',
  rBtnFontColor: '#FFFFFF',
  rBtnColor: '#000000',
  rBtnStyle: 1,
  popupVisible: false,
  dispatchPageStore: noop
};

const HandlerBar: React.FC<Partial<typeof GoodsDetailHandleBarInitial>> = memo(
  ({
    serverShow,
    cartShow,
    lBtnBorderColor,
    lBtnFontColor,
    lBtnColor,
    lBtnStyle,
    rBtnBorderColor,
    rBtnFontColor,
    rBtnColor,
    rBtnStyle,
    dispatchPageStore,
    ...rest
  }) => {
    const { Text, View, IconMobile } = useComponent();
    const skuCode = useDataPageQuery(rest, 'skuNo');
    const { rsSkuDomainList } = useGoodDetail(skuCode);
    const { goodInfo } = useGoodSpecAndPrice(rsSkuDomainList);
    const { servicePopup } = useService();
    const { addCardPopup, buyOpenPopup } = popupImplement(dispatchPageStore);
    return (
      <View className={'goodsDetailHandleBarOne'}>
        <View className={'linkGroup server'} onClick={servicePopup} style={{ display: serverShow ? 'block' : 'none' }}>
          <IconMobile value={'kehufuwukefu'} style={{ fontSize: 22, display: 'block' }} />
          <Text className={'txt'}>客服</Text>
        </View>

        <View
          className={'linkGroup cart'}
          onClick={() => navigatorHandler('shopping')}
          style={{ display: cartShow ? 'block' : 'none' }}
        >
          <IconMobile value={'gouwuche'} style={{ fontSize: 22, display: 'block' }} />
          <Text className={'txt'}>购物车</Text>
        </View>

        <View className={'goods-detail-one-btn-group'}>
          <View
            className={'btn addCart'}
            onClick={addCardPopup}
            style={{
              border: `1px solid ${lBtnBorderColor}`,
              color: lBtnFontColor,
              backgroundColor: lBtnColor,
              borderRadius: lBtnStyle === 1 ? '20px' : '0'
            }}
          >
            加入购物车
          </View>
          <View
            onClick={buyOpenPopup}
            className={'btn buy'}
            style={{
              border: `1px solid ${rBtnBorderColor}`,
              color: rBtnFontColor,
              backgroundColor: rBtnColor,
              borderRadius: rBtnStyle === 1 ? '20px' : '0'
            }}
          >
            {goodInfo.goodsPro === '10' ? '预售抢购' : '立即购买'}
          </View>
        </View>
      </View>
    );
  }
);

export const GoodsDetailHandleBarOne: React.FC<typeof GoodsDetailHandleBarInitial> = ({
  popupVisible = false,
  dispatchPageStore = noop,
  ...rest
}) => {
  const skuCode = useDataPageQuery(rest, 'skuNo');
  const { rsSpecValueDomainList, goodsCode, rsSkuDomainList } = useGoodDetail(skuCode);
  const skuInfo = useGoodSku(rsSpecValueDomainList);

  return (
    <>
      <HandlerBar {...rest} dispatchPageStore={dispatchPageStore} />
      <GoodsDetailPopup
        dispatchPageStore={dispatchPageStore}
        popupVisible={popupVisible}
        goodsCode={goodsCode}
        rsSkuDomainList={rsSkuDomainList}
        skuInfo={skuInfo}
      />
    </>
  );
};
