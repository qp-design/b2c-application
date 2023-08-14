import { useComponent } from '@brushes/simulate-component';
import { useCartListNext } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
import { Dispatch, Fragment, memo, useMemo, useState } from 'react';
import { fixPrice } from '@/utils';
import { PromotionPopup } from './common/promotionPopup';
import { NoData } from '@/common/noData';

interface CardItemType {
  goodsName: string;
  skuName: string;
  goodsCamount: number;
  shoppingGoodsId: number;
  pricesetNprice: number;
  handleStep: (id: number, amount: number, type: string) => void;
}

const ItemInfo: React.FC<CardItemType> = memo(
  ({ goodsName, skuName, goodsCamount, shoppingGoodsId, pricesetNprice, handleStep }) => {
    const { View, SmoothView, NumStep } = useComponent();
    return (
      <>
        <View className={'cartItem-info'}>
          <SmoothView className={'cartItem-goodsName'}>{goodsName}</SmoothView>
          <View className={'cartItem-size'}>
            规格：{skuName} X {goodsCamount}
            {/*<IconMobile onClick={() => setVisible(true)} value={'bianjishuru'}/>*/}
          </View>
          <View className={'cartItem-handleWrap'}>
            <SmoothView className={'price'}>{fixPrice(pricesetNprice)}</SmoothView>
            <NumStep count={goodsCamount} handleStep={handleStep.bind(null, shoppingGoodsId, goodsCamount)} />
          </View>
        </View>
      </>
    );
  }
);

const ItemImage = memo(({ dataPic, skuCode }: { dataPic: string; skuCode: string }) => {
  const { Image } = useComponent();
  return (
    <Image
      className={'img'}
      src={dataPic}
      onClick={() =>
        navigatorHandler('goodDetail', {
          skuCode
        })
      }
    />
  );
});

const ItemCheck = memo(({ shoppingGoodsId, select = [] }: { shoppingGoodsId: number; select: Array<any> }) => {
  const { View, Checkbox } = useComponent();
  return (
    <View className={'checkBoxWrap'}>
      <Checkbox
        checked={select.includes(shoppingGoodsId + '')}
        value={shoppingGoodsId}
        style={{
          '--icon-size': '16px',
          '--font-size': '14px',
          '--gap': '6px'
        }}
      />
    </View>
  );
});

const PromotionItem = ({
  promotion = [],
  updatePm,
  shoppingGoodsId,
  promotionCode
}: {
  shoppingGoodsId: string;
  promotionCode: string;
  promotion: Array<any>;
  updatePm: (e: string, d: string) => void;
}) => {
  const { View } = useComponent();
  const [visible, setVisible] = useState(false);
  const promotName = useMemo(() => {
    const obj = (promotion || []).find((item) => item.promotionCode === promotionCode) || {};
    return obj.promotionName;
  }, [promotion]);

  const onChange = (e: any) => {
    setVisible(false);
    updatePm(shoppingGoodsId, e.detail.value);
  };

  return (
    <>
      <View className={'cart-promote-active'} onClick={() => setVisible(true)}>
        {promotName}
        <View>修改</View>
      </View>
      <PromotionPopup
        promotionCode={promotionCode}
        onChange={onChange}
        promotion={promotion || []}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

const CardItem = memo(({ item, ...rest }: { item: any; [v: string]: any }) => {
  const { View } = useComponent();
  const { select } = rest;
  return (
    <View className={'cart-list-item'}>
      <ItemCheck select={select} shoppingGoodsId={item.shoppingGoodsId} />
      <ItemImage dataPic={item.dataPic} skuCode={item.skuCode} />
      <ItemInfo {...item} {...rest} />
    </View>
  );
});

const CardItems = ({ shoppingGoodsList = [], ...rest }: { shoppingGoodsList: Array<any>; [v: string]: any }) => {
  return (
    <>
      {shoppingGoodsList.map((item, index) => (
        <Fragment key={index}>
          <CardItem {...rest} item={item}></CardItem>
          {item.pmPromotionList ? (
            <PromotionItem
              promotionCode={rest.promotionCode}
              shoppingGoodsId={item.shoppingGoodsId}
              updatePm={rest.updatePm}
              promotion={item.pmPromotionList}
            />
          ) : null}
        </Fragment>
      ))}
    </>
  );
};

const DisTitle = ({
  disNextMsg,
  promotionName,
  pbName
}: {
  pbName: string;
  disNextMsg: string;
  promotionName: string;
}) => {
  const { View, SmoothView } = useComponent();
  return (
    <View className={'cart-dis-title'}>
      <SmoothView className={'tips'}>{pbName}</SmoothView>
      <SmoothView style={{ padding: '0 10px' }}>{promotionName}</SmoothView>
      <SmoothView>{disNextMsg}</SmoothView>
    </View>
  );
};

interface CartListType {
  refreshNum: number;
  cartUpdateCount: number;
  cartSelect: Array<string>;
  dispatchPageStore: Dispatch<any>;
  cartItemRadius?: string;
  $_dataSource: {
    cartSelect: Array<any>;
    cartUpdateCount: number;
  };
}

export const CartList: React.FC<CartListType> = ({
  refreshNum,
  dispatchPageStore,
  $_dataSource = {
    cartSelect: [],
    cartUpdateCount: 0
  },
  cartItemRadius = '10px'
}) => {
  const { SmoothCheckbox, WrapLoading, View } = useComponent();
  const { cartSelect, cartUpdateCount } = $_dataSource;
  const { loading, cartList, onChange, handleStep, updatePm } = useCartListNext(
    refreshNum,
    cartUpdateCount,
    dispatchPageStore
  );

  return (
    <WrapLoading loading={loading}>
      <View className={'cart-wrap'}>
        <SmoothCheckbox onChange={onChange}>
          {cartList.length ? (
            <>
              {cartList.map(
                ({ memberCname, promotionCode, disNextMsg, promotionName, pbName, shoppingGoodsList }, index) => (
                  <Fragment key={index}>
                    <h4>{memberCname}</h4>
                    <View className={'cart-bg'} style={{ borderRadius: cartItemRadius }}>
                      {promotionName ? (
                        <DisTitle disNextMsg={disNextMsg} promotionName={promotionName} pbName={pbName} />
                      ) : null}
                      <CardItems
                        promotionCode={promotionCode}
                        handleStep={handleStep}
                        select={cartSelect}
                        updatePm={updatePm}
                        shoppingGoodsList={shoppingGoodsList}
                        cartItemRadius={cartItemRadius}
                      ></CardItems>
                    </View>
                  </Fragment>
                )
              )}
            </>
          ) : (
            <NoData
              url={'https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noCarts.png'}
              title={'购物车竟然是空的'}
              subTitle={'快点挑选点东西犒赏自己吧'}
              link={'index'}
            />
          )}
        </SmoothCheckbox>
      </View>
    </WrapLoading>
  );
};