import { get, isEmpty, set } from 'lodash-es';
import { saveContract } from 'qj-b2c-api';
import { getPagesRefreshStore, navigatorHandler, taroMessage, updatePagesRefreshStore } from '@brushes/utils';
import { addressInitial } from './useOrderAddress';
import { useRef, useState } from 'react';
import { goodListIntialValue, initialValueOrder } from './useOrderGood';
import { userAddressData } from '@/utils';
import { initalOrderValue } from '@/store/placeOrder/store';

export function useOrderPay(
  {
    ocContractSettlList,
    payState,
    list
  }: {
    payState: Array<typeof initialValueOrder>;
    list: Array<typeof goodListIntialValue>;
    ocContractSettlList: { current: Array<any> };
  },
  skuId = '',
  goodsNum = 0,
  orderStoreInfo: typeof initalOrderValue,
  shoppingGoodsId = ''
) {
  const rsSkuListStr = useRef<Array<any>>([]);
  const [loading, setLoading] = useState(false);

  const decodeParams = (str: string) => {
    if (str) {
      const result = decodeURIComponent(str);
      return result.split(',');
    }
    return [];
  };

  // 参数数据处理
  const paramsDataHandle = (addressInfo: typeof addressInitial) => {
    const { addressMember, userName, provinceName, cityName, areaName, addressDetail, areaCode } = addressInfo;
    const ids = decodeParams(shoppingGoodsId);
    return payState.map((item: typeof initialValueOrder) => {
      return {
        contractPaytime: new Date().valueOf(),
        goodsPbillno: 0, // 成团人数 $storage.get('PeopleNum') || 0
        goodsPmbillno: item.promotionCodes, // 团购 平团  描述营销单号
        contractProperty: '0', //订单性质
        contractBlance: 0, //结算方式:全款、订金、融资
        contractPmode: 0, //付款方式：场内、场外，即线上、线下
        contractPumode: '0', //提货方式
        goodsSupplierName: '', //配送商
        goodsSupplierCode: '', //配送商Code
        packageList: [
          {
            contractGoodsList: list,
            shoppingGoodsIdList: ids,
            promotionCode: item.promotionCode,
            packageRemark: null
          }
        ],
        packageMode: '', //配送方式
        contractType: item.shoppingType,
        ocContractSettlList: [], // 优惠信息
        contractInmoney: salesTax(item), //  销售含税金额 (优惠前)
        contractMoney: finalSales(item), // 最终销售含税金额 (优惠后)
        goodsReceiptMem: addressMember, //收货人
        goodsReceiptPhone: userName, //收货联系方式
        goodsReceiptArrdess: provinceName + cityName + areaName + addressDetail, // 地址 省市区 加详细地址
        areaCode, //从地址上面带过来`
        contractNbillcode: null,
        skuIdList: skuId
          ? [
              {
                skuId: +skuId,
                goodsNum: +goodsNum
              }
            ]
          : [],
        giftSkuIdList: []
      };
    });
  };

  // 最终销售含税金额 (优惠后)
  const finalSales = (item: typeof initialValueOrder) => {
    const { shoppingCountPrice, copyComDisMoney, discount } = item;
    return (shoppingCountPrice - copyComDisMoney - discount).toFixed(2);
  };

  //  销售含税金额 (优惠前)
  const salesTax = (item: typeof initialValueOrder) => {
    const { shoppingCountPrice, copyComDisMoney } = item;
    return (shoppingCountPrice - copyComDisMoney).toFixed(2);
  };

  const removeCartCache = () => {
    // 有值说明从购车过来，清空购物车缓存
    if (shoppingGoodsId) {
      // CartList 是对应的购物车列表组件
      const { CartList = 0 } = getPagesRefreshStore();
      updatePagesRefreshStore({
        CartList: CartList + 1
      });
    }
  };

  // 确认预订单 立即支付
  const savePayPrice = async () => {
    const address = userAddressData.addressInfo as any;
    if (isEmpty(address)) {
      taroMessage('请选择收货地址');
      return;
    }

    rsSkuListStr.current = paramsDataHandle(address);
    // 优惠信息
    set(rsSkuListStr.current, '[0].ocContractSettlList', [...ocContractSettlList.current, orderStoreInfo]);
    setLoading(true);
    const params = { orderDomainStr: JSON.stringify(rsSkuListStr.current) };
    try {
      const res = await saveContract(params);
      removeCartCache();
      const { contractBillcode, contractBbillcode } = get(res, 'dataObj', {
        contractBillcode: '',
        contractBbillcode: ''
      });
      navigatorHandler('paymentMode', {
        contractBillcode,
        contractBbillcode
      });
    } catch (err: any) {
      taroMessage(err.msg || '获取订单失败');
    } finally {
      setLoading(false);
    }
  };

  return {
    savePayPrice,
    loading
  };
}
