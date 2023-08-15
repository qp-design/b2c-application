import { useComponent } from '@brushes/simulate-component';
import React, { memo } from 'react';
import { CardJsx } from '@/common/card';
import { getState } from './state';
import { useAfterSalesDetail } from 'qj-mobile-store';
import dayjs from 'dayjs';
import { SenderWrite } from './components';
import { MCAfterSalesDetail } from './context';

const initailAfterSalesDetail = {
  refundCode: '',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
};

const AfterSalesDetailJsx: React.FC<typeof initailAfterSalesDetail> = ({
  refundCode,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom
}) => {
  const {
    afterSalesDetailInfo,
    submitExpressInfo,
    handleCancelAfterSales,
    companyList,
    popupShow,
    handlePopupShow,
    chooseCompany,
    packageName,
    setPackageBillno,
    loading
  } = useAfterSalesDetail({
    refundCode
  });

  const {
    dataState,
    gmtCreate,
    ocRefundGoodsList,
    refundMoney,
    refundMeo,
    refundEx,
    refundType,
    ocRefundFileList,
    goodsReceiptMem,
    goodsReceiptPhone,
    goodsReceiptArrdess,
    packageCode,
    packageBillno
  } = afterSalesDetailInfo as any;

  const { View, Image, WrapLoading } = useComponent();
  return (
    <WrapLoading loading={loading}>
      <View
        className={'afterSalesDetail'}
        style={{
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight
        }}
      >
        <MCAfterSalesDetail.Provider
          value={{
            companyList,
            popupShow,
            handlePopupShow,
            chooseCompany,
            packageName,
            setPackageBillno,
            submitExpressInfo
          }}
        >
          <View className="afterSalesDetailTopTitle" style={{ background: '#000' }}>
            <View className="left_text">{getState(refundType, dataState)}</View>
            <View className="right_time">{dayjs(gmtCreate).format('YYYY-MM-DD HH:mm:ss')}</View>
          </View>
          <View className="afterSalesDetailContent">
            <View className="refundDetail">
              <View className="title">退款信息</View>
              <View className="goodsDetail">
                {ocRefundGoodsList?.map((item: any, index: any) => {
                  return (
                    <CardJsx
                      key={index}
                      dataPic={item.dataPic}
                      pricesetNprice={item.pricesetNprice}
                      goodsName={item.goodsName}
                      goodsCamount={item.refundGoodsNum}
                      skuName={item.skuName}
                    />
                  );
                })}
              </View>
              <View className="refund_Detail">
                <View className="left">退款原因</View>
                <View className="right">{refundEx}</View>
              </View>
              <View className="refund_Detail">
                <View className="left">退款金额</View>
                <View className="right">{refundMoney}</View>
              </View>
              <View className="refund_Detail">
                <View className="left">描述说明</View>
                <View className="right">{refundMeo}</View>
              </View>
              <View className="refund_Detail">
                <View className="left">补充凭证</View>
                <View className="right">
                  {ocRefundFileList?.map((item: any, index: any) => {
                    return (
                      <Image
                        src={(item as { refundFileUrl: string }).refundFileUrl}
                        key={index}
                        mode="widthFix"
                        className="refundImg"
                      />
                    );
                  })}
                </View>
              </View>
              <View className="refund_Detail">
                <View className="left">申请时间</View>
                <View className="right">{dayjs(gmtCreate).format('YYYY-MM-DD HH:mm:ss')}</View>
              </View>
              <View className="refund_Detail">
                <View className="left">退款编号</View>
                <View className="right">{refundCode}</View>
              </View>
              <>
                {refundType === 'B02' ? (
                  <>
                    {dataState > 0 ? (
                      <View className="merchantMsg">
                        <View className="title">商家信息</View>
                        <View className="name">
                          {goodsReceiptMem} &emsp;{goodsReceiptPhone}
                        </View>
                        <View className="address">{goodsReceiptArrdess}</View>
                      </View>
                    ) : (
                      ''
                    )}
                    {dataState === 1 ? (
                      <View className="writeMsg">
                        <View className="wlMsg">物流信息</View>
                        <SenderWrite />
                      </View>
                    ) : (
                      ''
                    )}
                    {dataState > 1 ? (
                      <View className="writeMsg">
                        <View className="wlMsg">物流信息</View>
                        <View className="express_content">
                          <View className="name">物流单号</View>
                          <View className="code">{packageBillno}</View>
                        </View>
                        <View className="express_content">
                          <View className="name">物流公司</View>
                          <View className="code">{packageName}</View>
                        </View>
                        <View className="express_content">
                          <View className="name">物流公司编码</View>
                          <View className="code">{packageCode}</View>
                        </View>
                      </View>
                    ) : (
                      ''
                    )}
                  </>
                ) : (
                  ''
                )}
              </>
            </View>
          </View>
          {dataState === 0 ? (
            <View className="footerBtn">
              <View className="btn" onClick={handleCancelAfterSales.bind(null, ocRefundGoodsList[0].goodsCode)}>
                撤销申请
              </View>
            </View>
          ) : null}
        </MCAfterSalesDetail.Provider>
      </View>
    </WrapLoading>
  );
};
export const AfterSalesDetail = memo(AfterSalesDetailJsx);
