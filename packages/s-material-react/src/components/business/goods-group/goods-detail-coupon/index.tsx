//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { THREE_DOTS } from '@/static';
import { Coupon } from '@/common/coupon';
import { useCoupon, useGoodDetail, useGoodSpecAndPrice } from 'qj-mobile-store';
import { ScrollWrap } from '@/common/scrollWrap';
import { NoData } from './component';
import { useDataPageQuery } from '@/hooks/useDataPageQuery';

export const GoodsDetailCoupon = ({ ...rest }) => {
  const { View, Text, Popup } = useComponent();
  const skuCode = useDataPageQuery(rest, 'skuNo');
  const { rsSkuDomainList } = useGoodDetail(skuCode);
  const { goodInfo } = useGoodSpecAndPrice(rsSkuDomainList);
  const { coupon, visible, setVisible } = useCoupon(rsSkuDomainList, goodInfo.skuCode || skuCode);
  return (
    <>
      <View className={'goodsDetail-coupon'} onClick={() => setVisible(true)}>
        <Text className={'label'}>优惠券</Text>
        <View className={'info'}>
          <Text className={'label'}>请选择优惠券</Text>
          <img src={THREE_DOTS} alt="" className={'icon'} />
        </View>
      </View>
      <Popup popupVisible={visible} popupHandler={setVisible}>
        <View className={'goodsDetail-coupon-popup'}>
          <ScrollWrap>
            {coupon.length > 0 ? (
              coupon.map((item, index) => {
                return <Coupon {...item} key={index} />;
              })
            ) : (
              <View className={'NoDataImg'}>
                <NoData />
                <View className={'btn'} onClick={() => setVisible(false)}>
                  确定
                </View>
              </View>
            )}
          </ScrollWrap>
        </View>
      </Popup>
    </>
  );
};