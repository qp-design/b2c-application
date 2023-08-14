import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useOrderDetail, orderStatusImpl } from 'qj-mobile-store';
import { CardJsx } from '@/common/card';
import { QjMobileIcon } from '@/common/icon';
import FooterComponent from '@/components/business/order-group/order-detail/component/footer';
import { Copy } from '@/common/copyText';
import dayjs from 'dayjs';

interface OrderDetailProps {
  contractBillcode?: string;
  expressWay: boolean;
  backgroundColor: string;
  borderColor: string;
  color: string;
  btnColor: string;
  btnShape: string;
  paddingTop: number;
  paddingBottom: number;
}

const OrderDetailJsx: React.FC<OrderDetailProps> = ({
  contractBillcode,
  expressWay,
  backgroundColor,
  color,
  paddingBottom,
  paddingTop,
  borderColor,
  btnColor,
  btnShape
}) => {
  const { View, Text } = useComponent();
  const { orderDetail, handleApplyBtn } = useOrderDetail(contractBillcode || '');
  const iconStyle: React.CSSProperties = {
    color: '#ffffff',
    marginRight: '10px',
    fontSize: '20px'
  };
  const timeformat = (value: any) => {
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
  };

  return (
    <View className={'orderDetail'}>
      <View style={{ backgroundColor }} className={'orderDetailTopTitle'}>
        <View className={'orderDetailTopTitleContent'}>
          <View className="icon_text">
            {orderStatusImpl(orderDetail.dataState) === '待收货' ? (
              <QjMobileIcon value="daishouhuo" style={iconStyle} />
            ) : (
              ''
            )}
            <Text className={'title'}>{orderStatusImpl(orderDetail.dataState)}</Text>
          </View>

          <View className={'subTitleWrap'}>
            {timeformat(orderDetail.gmtCreate)}
            {/*<img src={ORDERTOPAY} alt="" className={'subTitleIcon'} />*/}
            {/*<Text className={'subTitle'}>{status}</Text>*/}
          </View>
        </View>
      </View>

      <View
        className={'orderDetailContent'}
        style={{
          paddingTop: paddingTop + 'px',
          paddingBottom: paddingBottom + 'px'
        }}
      >
        <View
          style={{
            position: 'relative',
            top: -26
          }}
        >
          <View className={'addressInfo'}>
            <View className={'lPart'}>
              <QjMobileIcon value="dizhi" />
            </View>
            <View className={'mPart'}>
              <View className={'personInfo'}>
                <Text className={'personName'}>{orderDetail.goodsReceiptMem}</Text>
                <Text className={'personPhone'}>{orderDetail.goodsReceiptPhone}</Text>
              </View>
              <View className={'address'}>{orderDetail.goodsReceiptArrdess}</View>
            </View>
            <View className={'rPart'}>{/*<img src={ORDERTOPAY} alt="" className={'icon'} />*/}</View>
          </View>

          <View className={'orderDetailGoodsWrap'}>
            {orderDetail.goodsList.map((item: any) => (
              <>
                <CardJsx key={item.contractGoodsId} {...item} />
                {Number(orderDetail.dataState) > 1 && Number(orderDetail.dataState) < 5 ? (
                  <View className={'orderBtn'} onClick={handleApplyBtn.bind(null, item, orderDetail.dataState)}>
                    申请退款
                  </View>
                ) : (
                  ''
                )}
              </>
            ))}

            <View className={'priceInfo'}>
              <View className={'priceInfoFloor top'}>
                <View className={'totalNum'}>共{orderDetail.goodsNum}件商品</View>
                <View className={'totalPrice'}>
                  合计 {parseFloat((orderDetail.dataBmoney - orderDetail.refundMoney).toFixed(2))}
                </View>
              </View>
              <View className={'priceInfoFloor'}>
                <View className={'totalNum'}>商品总额</View>
                <View className={'totalPrice'}>￥{orderDetail.contractInmoney}</View>
              </View>
              <View className={'priceInfoFloor'}>
                <View className={'totalNum'}>优惠</View>
                <View className={'totalPrice'}>￥{orderDetail.goodsPmoney}</View>
              </View>
            </View>
          </View>

          {expressWay && (
            <View className={'express'}>
              <View className={'label'}>配送方式</View>
              <View className={'name'}>快递</View>
            </View>
          )}

          <View className={'orderInfo'}>
            <View className={'orderInfoItem'}>
              <View className={'label'}>订单信息</View>
            </View>
            {/*<View className={'orderInfoItem'}>*/}
            {/*  <View className={'label'}>买家留言</View>*/}
            {/*  <View className={'name'}>{orderDetail.packageRemark}</View>*/}
            {/*</View>*/}
            <View className={'orderInfoItem'}>
              <View className={'label'}>订单编号</View>
              <View className={'context_copy'}>
                <View className={'name'}>{orderDetail.contractBillcode}</View>
                <Copy copyContent={orderDetail.contractBillcode} />
              </View>
            </View>
            <View className={'orderInfoItem'}>
              <View className={'label'}>下单时间</View>
              <View className={'name'}>{timeformat(orderDetail.gmtCreate)}</View>
            </View>
          </View>

          <View className={'btnGroupFooter'}>
            <FooterComponent
              borderColor={borderColor}
              btnColor={btnColor}
              btnShape={btnShape}
              color={color}
              contractBillcode={orderDetail.contractBillcode}
              contractId={orderDetail.contractId}
              dataState={orderDetail.dataState}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export const OrderDetail = memo(OrderDetailJsx);
