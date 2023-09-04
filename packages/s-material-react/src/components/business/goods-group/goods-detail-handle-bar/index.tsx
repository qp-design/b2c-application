//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { useService } from '@/utils';
import { GoodsDetailPopup } from '../common/goodsDetailPopup';
import { useGoodSku, popupImplement, useGoodDetail, useGoodSpecAndPrice } from 'qj-mobile-store';
import { noop } from 'lodash-es';
import { memo } from 'react';
import { useDataPageQuery } from '@/hooks/useDataPageQuery';

const GoodsDetailHandleBarInitial = {
  serverShow: true,
  cartShow: true,
  lPartColor: '#fff',
  lPartBgColor: '#959595',
  lPartStyle: '20px',
  rPartColor: '#fff',
  rPartBgColor: '#000000',
  rPartStyle: '20px',
  $_dataSource: {
    popupVisible: false
  },
  dispatchPageStore: noop
};

const HandlerBar: React.FC<Partial<typeof GoodsDetailHandleBarInitial>> = memo(
  ({
    serverShow,
    cartShow,
    lPartColor,
    lPartBgColor,
    lPartStyle,
    rPartColor,
    rPartBgColor,
    rPartStyle,
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
      <View className={'goodsDetailHandleBar'}>
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

        <View className={'goods-detail-btn-group'}>
          <View
            className={'btn addCart'}
            onClick={addCardPopup}
            style={{
              color: lPartColor,
              backgroundColor: lPartBgColor,
              borderTopLeftRadius: lPartStyle,
              borderBottomLeftRadius: lPartStyle
            }}
          >
            加入购物车
          </View>
          <View
            onClick={buyOpenPopup}
            className={'btn buy'}
            style={{
              color: rPartColor,
              backgroundColor: rPartBgColor,
              borderTopRightRadius: rPartStyle,
              borderBottomRightRadius: rPartStyle
            }}
          >
            {goodInfo.goodsPro === '10' ? '预售抢购' : '立即购买'}
          </View>
        </View>
      </View>
    );
  }
);

export const GoodsDetailHandleBar: React.FC<typeof GoodsDetailHandleBarInitial> = ({
  $_dataSource = {},
  dispatchPageStore = noop,
  ...rest
}) => {
  const skuCode = useDataPageQuery(rest, 'skuNo');
  const { rsSpecValueDomainList, goodsCode, rsSkuDomainList } = useGoodDetail(skuCode);
  const skuInfo = useGoodSku(rsSpecValueDomainList);
  const { popupVisible } = $_dataSource;
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
