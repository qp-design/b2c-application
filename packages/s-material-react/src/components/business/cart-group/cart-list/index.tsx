import { useComponent } from '@brushes/simulate-component';
import { useCartListNext } from 'qj-mobile-store';
import { type Link, navigatorLink } from '@brushes/shared-utils';
import { navigatorHandler } from '@brushes/utils';
import { Dispatch, Fragment, memo, useMemo, useState } from 'react';
import { fixPrice } from '@/utils';
import { PromotionPopup } from './common/promotionPopup';
import { NoData } from '@/common/noData';
import { isEmpty } from 'lodash-es';
import { useStore } from '@brushes/shared-store';

interface CardItemType {
  goodsName: string;
  skuName: string;
  dataState: number;
  goodsCamount: number;
  shoppingGoodsId: number;
  pricesetNprice: number;
  handleStep: (id: number, amount: number, type: string) => void;
}

const ItemInfo: React.FC<CardItemType> = memo(
  ({ goodsName, dataState, skuName, goodsCamount, shoppingGoodsId, pricesetNprice, handleStep }) => {
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
            {dataState === 0 && (
              <NumStep count={goodsCamount} handleStep={handleStep.bind(null, shoppingGoodsId, goodsCamount)} />
            )}
          </View>
        </View>
      </>
    );
  }
);

const ItemImage = memo(({ dataPic, dataState, skuCode }: { dataPic: string; dataState: number; skuCode: string }) => {
  const { Image, View } = useComponent();

  const Icon = useMemo(() => {
    let url = '';
    switch (dataState) {
      case 3:
      case 1:
        url = 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/goodsLose.png';
        break;
      case 2:
        url = 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/offshelf.png';
        break;
    }
    if (dataState !== 0) {
      return (
        <View className={'bg'}>
          <Image className={'icon-img'} src={url} />
        </View>
      );
    }
    return null;
  }, [dataState]);

  return (
    <View className={'cart-item-image'}>
      {Icon}
      <Image
        className={'img'}
        src={dataPic}
        onClick={() =>
          navigatorHandler('goodDetail', {
            skuCode,
            scene: '123123123'
          })
        }
      />
    </View>
  );
});

const ItemCheck = memo(
  ({
    cartIsEditor,
    shoppingGoodsId,
    dataState,
    select = []
  }: {
    shoppingGoodsId: number;
    cartIsEditor: boolean;
    dataState: number;
    select: Array<any>;
  }) => {
    const { View, Checkbox } = useComponent();
    const checked = useMemo(() => {
      if (!cartIsEditor) {
        return dataState === 0 && select.includes(shoppingGoodsId + '');
      } else {
        return select.includes(shoppingGoodsId + '');
      }
    }, [select, cartIsEditor, shoppingGoodsId, dataState]);

    return (
      <View className={'checkBoxWrap'}>
        <Checkbox
          disabled={!cartIsEditor && dataState !== 0}
          checked={checked}
          value={shoppingGoodsId}
          style={{
            '--icon-size': '16px',
            '--font-size': '14px',
            '--gap': '6px'
          }}
        />
      </View>
    );
  }
);

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

  const couponSelectImpl = (e: any) => {
    const flag = e.target.dataset.code;
    if (flag) {
      setVisible(false);
      updatePm(shoppingGoodsId, '-');
    }
  };

  return (
    <>
      <View className={'cart-promote-active'} onClick={() => setVisible(true)}>
        <View>{promotName}</View>
        <View>修改</View>
      </View>
      <View onClick={couponSelectImpl}>
        <PromotionPopup
          promotionCode={promotionCode}
          onChange={onChange}
          promotion={promotion || []}
          visible={visible}
          setVisible={setVisible}
        />
      </View>
    </>
  );
};

const CardItem = memo(({ item, ...rest }: { item: any; [v: string]: any }) => {
  const { View } = useComponent();
  const { select, cartIsEditor } = rest;
  return (
    <View className={'cart-list-item'}>
      <ItemCheck
        cartIsEditor={cartIsEditor}
        dataState={item.dataState}
        select={select}
        shoppingGoodsId={item.shoppingGoodsId}
      />
      <ItemImage dataState={item.dataState} dataPic={item.dataPic} skuCode={item.skuCode} />
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

const OperateDisTitle = ({ disNextMsg, link }: { disNextMsg: string; link: Link }) => {
  const { View, IconMobile } = useComponent();
  const content = useMemo(() => {
    if (isEmpty(link)) {
      return null;
    } else {
      return (
        <View style={{ color: '#ED4444', textAlign: 'right' }} onClick={() => navigatorLink(link, {})}>
          去凑单
          <IconMobile style={{ fontSize: '14px', color: '#888' }} value={'xiangyou1'} />
        </View>
      );
    }
  }, [link]);

  return (
    <View className={'cart-dis-title-msg'}>
      <View className={'dis-msg'}>{disNextMsg}</View>
      {content}
    </View>
  );
};
const DisTitle = ({
  disNextMsg,
  promotionName,
  pbName,
  link
}: {
  pbName: string;
  disNextMsg: string;
  promotionName: string;
  link: Link;
}) => {
  const { View, SmoothView } = useComponent();
  return (
    <View className={'cart-dis-title'}>
      <SmoothView className={'tips'}>{pbName}</SmoothView>
      <SmoothView className={'title'}>{promotionName}</SmoothView>
      {disNextMsg && <OperateDisTitle link={link} disNextMsg={disNextMsg} />}
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
    cartIsEditor: boolean;
  };
  __link__?: Link;
}

export const CartList: React.FC<CartListType> = ({
  refreshNum,
  dispatchPageStore,
  $_dataSource = {
    cartSelect: [],
    cartUpdateCount: 0,
    cartIsEditor: false
  },
  __link__ = {},
  cartItemRadius = '10px'
}) => {
  const { SmoothCheckbox, WrapLoading, View } = useComponent();
  const { cartSelect, cartUpdateCount, cartIsEditor } = $_dataSource;
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
                        <DisTitle
                          link={__link__}
                          disNextMsg={disNextMsg}
                          promotionName={promotionName}
                          pbName={pbName}
                        />
                      ) : null}
                      <CardItems
                        cartIsEditor={cartIsEditor}
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
