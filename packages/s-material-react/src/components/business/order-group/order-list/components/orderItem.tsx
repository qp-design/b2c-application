// @ts-nocheck
import { useComponent, antdMobile } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { orderStatusImpl, orderType } from 'qj-mobile-store';
import { CardJsx } from '@/common/card';
import FooterComponent from '@/components/business/order-group/order-detail/component/footer';
import { useCountDown } from '@/hooks';
import { fixPrice } from '@/utils';
const { Button } = antdMobile;
interface action {
  init: () => void;
}

const CardCount = ({ contractPaydate, init, countdownCancel, contractId }) => {
  const { View, SmoothView } = useComponent();
  const { resultTime } = useCountDown(contractPaydate, init, countdownCancel, contractId);

  return (
    <>
      {resultTime ? (
        <View className={'card-item-info-countDown'}>
          <SmoothView>{resultTime}</SmoothView>
        </View>
      ) : null}
    </>
  );
};
export function Item({
  contractBillcode,
  dataBmoney,
  dataBnum,
  goodsList,
  dataState,
  contractId,
  init,
  contractAppraise,
  borderRadius,
  orderSpacing,
  contractPaydate,
  countdownCancel
}: typeof orderType & action) {
  const { View } = useComponent();
  const status = orderStatusImpl(dataState);

  const isShow = () => {};

  return (
    <View
      className={'orderListItem'}
      style={{ borderRadius: borderRadius ? 8 : '', marginTop: orderSpacing, marginBottom: orderSpacing }}
    >
      <View onClick={() => navigatorHandler('orderDetail', { contractBillcode })}>
        <View className={'topInfo'}>
          <View className={'orderNo'}>
            订单号: {contractBillcode}
            <Button className={'copy'} size="mini" fill={'outline'}>
              复制
            </Button>
          </View>
          <View className={'status'}>{status}</View>
        </View>
        <View className={'card-item-info-countDown'}></View>
        <View className={'goodsItemWrap'}>
          {goodsList.map((item) => (
            <CardJsx key={item.contractGoodsId} {...item} dataState={dataState}>
              {dataState === 1 && (
                <CardCount
                  contractPaydate={contractPaydate}
                  init={init}
                  countdownCancel={countdownCancel}
                  contractId={contractId}
                />
              )}
            </CardJsx>
          ))}
        </View>
      </View>
      <View className={'allInfo'}>
        <View className={'totalNum'}>共{dataBnum}件商品</View>
        <View className={'totalPrice'}>合计 {fixPrice(dataBmoney)}</View>
      </View>
      <FooterComponent
        init={init}
        contractId={contractId}
        contractBillcode={contractBillcode}
        dataState={dataState}
        contractAppraise={contractAppraise}
      />
    </View>
  );
}
