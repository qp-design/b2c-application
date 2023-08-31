//@ts-nocheck
import React, { memo, useMemo, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { Filter } from './components';
import { type Link, navigatorLink } from '@brushes/shared-utils'
import { useGoodsList } from 'qj-mobile-store';
import { ScrollWrap } from '@/common/scrollWrap';
import classNames from 'classnames';
import { fixPrice } from '@/utils';

export interface FilterType {
  sortField: string;
  order?: string | undefined;
  activeColor?: string;
  goodsName?: boolean;
  goodsPrice?: boolean;
  lineationGoods?: boolean;
  salesQuantity?: boolean;
  goodsCar?: boolean;
  borderRadius?: boolean;
  goodsColor?: boolean;
  goodsGap?: number;
  paddingLR?: number;
  classtreeCode?: string;
  searchParam?: string;
  __link__?: Link;
}

const GoodsListJsx: React.FC<FilterType> = ({
  classtreeCode = '',
  searchParam = '',
  activeColor = '#e54e29',
  goodsName = true,
  goodsPrice = true,
  lineationGoods = true,
  salesQuantity = true,
  goodsCar = true,
  borderRadius = true,
  goodsColor = true,
  goodsGap = 10,
  paddingLR = 0,
  __link__ = {}
}) => {
  const { View, Loading, SmoothView, Image, ScrollView, IconMobile } = useComponent();
  const [filterParmas, setFilterParams] = useState({} as FilterType);
  const { loading, getData, list } = useGoodsList(classtreeCode, searchParam, filterParmas);
  const imgStyle = useMemo(() => {
    return classNames('textBox', { btm: !goodsPrice && !lineationGoods });
  }, [goodsPrice, lineationGoods]);
  const goodsNameStyle = useMemo(() => {
    return classNames('name', { boxNone: !goodsName });
  }, [goodsName]);
  const saleStyle = useMemo(() => {
    return classNames('middle_margin', { boxNone: !salesQuantity });
  }, [salesQuantity]);
  const carstyle = useMemo(() => {
    return classNames('goodDetail', { boxNone: !goodsPrice && !lineationGoods && !goodsCar });
  }, [goodsPrice, lineationGoods, goodsCar]);
  const goodsDetail = useMemo(() => {
    return classNames({
      detailContent: !(
        goodsNameStyle.includes('boxNone') &&
        saleStyle.includes('boxNone') &&
        carstyle.includes('boxNone')
      )
    });
  }, [goodsNameStyle, saleStyle, carstyle]);

  return (
    <View className={'goodsList'}>
      <View className={'top-info'}>
        <Filter setParams={setFilterParams} activeColor={activeColor} />
      </View>
      <View className={'listWrap'} style={{ padding: ` 0px ${paddingLR}px` }}>
        <ScrollWrap id={'listWrap'}>
          <ScrollView onScroll={() => getData(filterParmas)}>
            <View className={'list'} style={{ gap: goodsGap }}>
              {list.map((item) => {
                return (
                  <View
                    onClick={() => navigatorLink(__link__, { skuCode: item.skuCode })}
                    className={'listItem'}
                    key={item.skuCode}
                    style={{
                      borderRadius: borderRadius ? '8px' : '',
                      boxShadow: goodsColor ? '4px 4px 4px #969292' : ''
                    }}
                  >
                    <Image src={item.dataPic} className={'img'}></Image>
                    <View className={goodsDetail}>
                      <SmoothView className={goodsNameStyle}>{item.goodsName}</SmoothView>
                      <View className={saleStyle}>12已售：{item.goodsNum}</View>

                      <View className={carstyle}>
                        <View className={imgStyle}>
                          <SmoothView className={'price'} style={{ display: goodsPrice ? 'block' : 'none' }}>
                            {fixPrice(item.pricesetNprice)}
                          </SmoothView>
                          &emsp;
                          <View className={'decoration'} style={{ display: lineationGoods ? 'block' : 'none' }}>
                            {fixPrice(item.pricesetMakeprice)}
                          </View>
                        </View>
                        <View style={{ display: goodsCar ? 'block' : 'none' }}>
                          <IconMobile style={{ fontSize: 20, color: '#f00' }} value={'cart'} />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
            {loading ? <Loading /> : null}
          </ScrollView>
        </ScrollWrap>
      </View>
    </View>
  );
};

export const GoodsList = memo(GoodsListJsx);
