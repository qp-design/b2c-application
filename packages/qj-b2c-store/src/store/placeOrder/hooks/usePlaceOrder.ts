//@ts-nocheck
import { queryToContractImpl, queryAddressBymerberCode, getFalgSettingForPaydate, calculateFreightFare, getTotalDiscountPriceImpl, saveContract, queryShoppingToContract } from '@/utils/payment';
import { useEffect, useRef, useState } from 'react';
import { navigatorHandler, getEnv } from '@brushes/utils';
import { set, isEmpty } from 'lodash-es';
import { queryUserConByGoods } from 'qj-b2c-api';

interface PaymentOrderType {
  skuId?: string;
  goodsNum?: number;
  shoppingGoodsId?: string;
}

const addressMock = {
  provinceName: '',
  cityName: '',
  areaName: '',
  addressDetail: '',
  addressMember: '',
  addressPhone: '',
  addressDefault: ''
};

const initialValue = {
  contractSettlOpno: 0,
  promotionCodes: null,
  shoppingCountPrice: 0,
  totalDiscountPrice: 0,
  accountsSumPrice: 0,
  discount: 0,
  freight: 0,
  comDisMoney: 0,
  copyComDisMoney: 0
};

export const goodListMock = {
  dataPic: '',
  goodsName: '',
  goodsCamount: 0,
  skuName: '',
  pricesetNprice: 0
};

export function usePlaceOrder({ skuId, goodsNum, shoppingGoodsId }: PaymentOrderType, refreshNum: number, aId: String) {
  const list = useRef<Array<typeof goodListMock>>([
    {
      dataPic: '',
      goodsName: '',
      goodsCamount: 0,
      skuName: '',
      pricesetNprice: 0
    }
  ]);
  const [coupon, setCoupon] = useState([]);
  const [address, setAddress] = useState<typeof addressMock>(addressMock);
  const promotionCode = useRef<string>('');
  const ocContractSettlList = useRef<Array<any>>([]); //优惠信息
  const shoppingGoodsList = useRef<Array<any>>([]); // 获取优惠劵列表需要传所有商品的参数
  const rsSkuListStr = useRef<Array<any>>([]);
  const [amount, setAmount] = useState(0);
  const isTaro = getEnv();
  const payState = useRef(initialValue);
  const couponList = useRef([]);

  useEffect(() => {
    (async () => {
      setAmount(0);
      payState.current = {
        contractSettlOpno: 0,
        promotionCodes: null,
        shoppingCountPrice: 0,
        totalDiscountPrice: 0,
        accountsSumPrice: 0,
        discount: 0,
        freight: 0,
        comDisMoney: 0,
        copyComDisMoney: 0
      };
      shoppingGoodsList.current = [];
      ocContractSettlList.current = [];
      // 初始化地址信息
      // 预订单详情
      // 购物车到下单页面
      if (shoppingGoodsId) {
        await initImpl(() =>
          queryShoppingToContract({
            shoppingGoodsIdStr: `[${shoppingGoodsId}]`
          })
        );
      } else {
        // 商品详情到下单页
        await initImpl(() => queryToContractImpl(skuId, goodsNum));
      }
    })();
  }, [refreshNum]);

  //获取优惠券
  const getCouponList = async () => {
    try {
      const data = await queryUserConByGoods({
        pmContractGoodsDomainListStr: JSON.stringify(shoppingGoodsList.current)
      });
      setCoupon(data);
    } catch (err) {
      console.log(74, err);
    }
  };

  const confirm = (couponItem) => {
    const { couponAmount, usercouponCode, promotionCode, discAmount } = couponItem;
    couponList.current = [
      {
        contractSettlBlance: 'COP',
        contractPmode: '0',
        contractSettlGmoney: +couponAmount,
        contractSettlPmoney: +discAmount,
        contractSettlOpno: usercouponCode,
        contractSettlOpemo: promotionCode
      }
    ];
    payState.current.discount = discAmount;
    resultPrice();
  };

  const initImpl = async (callback: () => Promise<any>) => {
    try {
      const data = await Promise.all([
        queryAddressBymerberCode({
          isLocalMock: !isTaro
        }),
        callback()
      ]);
      const [addressData = [], contractData = []] = data;
      const addressInfo = aId ? addressData.find((item: AddressType) => item.addressId === aId) : addressData.find((item: AddressType) => item.addressDefault === '1') || {};
      setAddress(addressInfo);
      computedValue(contractData, addressInfo);
      aId = '';
    } catch (err: any) {
      console.log(err);
    }
  };
  //
  // const initializePrice = () => {
  //   // 初始化涉及到钱的变量，防止页面从后台到前台的时候在原有基础上再次计算
  //   that.shoppingCountPrice = 0;
  //   that.totalDiscountPrice = 0;
  //   that.accountsSumPrice = 0;
  //   that.discount = 0;
  //   that.freight = 0;
  //   that.comDisMoney = 0;
  //   that.copyComDisMoney = 0;
  //   // that.baseColor = '#' + $storage.get('baseColor');
  // }
  const computedValue = (res: Array<any>, addressInfo) => {
    if (isEmpty(res)) {
      return;
    }
    res.forEach((v) => {
      // 查看商品是否促销
      v.shoppingpackageList.forEach((vk: any) => {
        payState.current.comDisMoney += vk.disMoney;
        payState.current.copyComDisMoney += vk.disMoney;

        vk.shoppingGoodsList.forEach((item: any) => {
          shoppingGoodsList.current.push(item);

          payState.current.shoppingCountPrice += item.pricesetNprice * item.goodsCamount;

          item.contractGoodsGtype = 0;
          promotionCode.current = vk.promotionCode;
          // 普通商品获取自动取消订单时间
          if (item.goodsType == '00') {
            getFalgSettingForPaydate().then((res) => {
              if (res) {
                // 暂时放这里不处理
                // $storage.set('payTime', Number(res.flagSettingInfo));
              }
            });
          }
        });
        // 优惠
        if (vk.disMoney > 0) {
          ocContractSettlList.current.push({
            contractSettlBlance: vk.promotionInType == 0 ? 'PM' : 'COP',
            contractPmode: '0',
            contractSettlGmoney: Number(vk.disMoney.toFixed(2)),
            contractSettlPmoney: Number(vk.disMoney.toFixed(2)),
            contractSettlOpno: vk.promotionCode,
            contractSettlOpemo: vk.promotionName
          });
        }

        if (vk.giftList) {
          vk.shoppingGoodsList.forEach((eItem: any) => {
            // 满赠  0001
            eItem.ginfoCode = eItem.pmPromotionList.find((gift: any) => gift.pbCode == '0001').promotionCode;
          });
          list.current = [...vk.shoppingGoodsList, ...vk.giftList];
        } else {
          list.current = vk.shoppingGoodsList;
        }
      });
      resultPrice();

      // 非装修端需要继续往下执行
      if (isTaro) {
        freightCalculation();
        // 获取优惠券
        getCouponList();
        //用户权益差价
        userEquitySpread(addressInfo);
      }
    });
  };

  const resultPrice = () => {
    const { shoppingCountPrice, totalDiscountPrice, discount, comDisMoney, freight } = payState.current;
    const amountCount = shoppingCountPrice - totalDiscountPrice - discount - comDisMoney + freight;
    setAmount(amountCount);
  };

  //运费计算
  const freightCalculation = async () => {
    console.log(224);
    let payload = {};
    if (shoppingGoodsId) {
      // 购物车计算运费
      payload = { shoppingGoodsIdStr: `[${shoppingGoodsId}]` };
    } else {
      // 商品详情计算运费
      payload = { skuIdStr: JSON.stringify([{ skuId, goodsNum }]) };
    }
    try {
      const data = await calculateFreightFare({
        isLocalMock: !isTaro,
        ...payload
        // areaCode: 110000
      });
      payState.current.freight = data.dataObj;
      resultPrice();
    } catch (err) {
      console.log(180, err);
    }
  };

  // 参数数据处理
  const paramsDataHandle = (addressInfo) => {
    const { addressMember, userName, provinceName, cityName, areaName, addressDetail, areaCode } = addressInfo;
    return [
      {
        contractPaytime: new Date().valueOf(),
        // contractPaydate: new Date().valueOf(),
        goodsPbillno: 0, // 成团人数 $storage.get('PeopleNum') || 0
        goodsPmbillno: payState.current.promotionCodes, // 团购 平团  描述营销单号
        contractProperty: '0', //订单性质
        contractBlance: 0, //结算方式:全款、订金、融资
        contractPmode: 0, //付款方式：场内、场外，即线上、线下
        contractPumode: '0', //提货方式
        goodsSupplierName: '', //配送商
        goodsSupplierCode: '', //配送商Code
        packageList: [
          {
            contractGoodsList: list.current,
            shoppingGoodsIdList: [],
            promotionCode: promotionCode.current,
            packageRemark: null
          }
        ],
        packageMode: '', //配送方式
        contractType: '50',
        ocContractSettlList: [], // 优惠信息
        contractInmoney: salesTax(), //  销售含税金额 (优惠前)
        contractMoney: finalSales(), // 最终销售含税金额 (优惠后)
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
      }
    ];
  };

  // 最终销售含税金额 (优惠后)
  const finalSales = () => {
    const { shoppingCountPrice, copyComDisMoney, discount } = payState.current;
    return (shoppingCountPrice - copyComDisMoney - discount).toFixed(2);
  };

  //  销售含税金额 (优惠前)
  const salesTax = () => {
    const { shoppingCountPrice, copyComDisMoney, freight } = payState.current;
    return (shoppingCountPrice - copyComDisMoney + freight).toFixed(2);
  };

  // 用户权益差价计算
  const userEquitySpread = (addressInfo) => {
    rsSkuListStr.current = paramsDataHandle(addressInfo);
    let skuList = { rsSkuListStr: JSON.stringify(rsSkuListStr.current) };
    getTotalDiscountPriceImpl(skuList).then((res) => {
      payState.current.totalDiscountPrice = res.dataObj.totalDiscountPrice;
      payState.current.contractSettlOpno = res.dataObj.contractSettlOpno;
      resultPrice();
    });
  };

  // 会员权益差价
  const getMembership = () => {
    const { contractSettlOpno, totalDiscountPrice } = payState.current;
    if (contractSettlOpno && totalDiscountPrice != 0) {
      // index 暂时 0；
      ocContractSettlList.current.push({
        contractSettlBlance: 'UR',
        contractPmode: '0',
        contractSettlPmoney: totalDiscountPrice,
        contractSettlOpno
      });
    }
  };

  //计算优惠券
  const getCouple = () => {};

  // 确认预订单 立即支付
  const savePayPrice = () => {
    if (isEmpty(address)) return;
    getMembership();
    // 优惠信息
    set(rsSkuListStr.current, '[0].ocContractSettlList', [...ocContractSettlList.current, ...couponList.current]);

    const params = { orderDomainStr: JSON.stringify(rsSkuListStr.current) };
    saveContract(params).then((res) => {
      navigatorHandler('paymentMode', {
        code: res.dataObj.contractBillcode
      });
      // navigatorImpl(`${routerMap.paymentMode}?code=${res.dataObj.contractBillcode}`);
    });
  };

  return {
    savePayPrice,
    address,
    list,
    payState,
    coupon,
    confirm,
    amount
  };
}
