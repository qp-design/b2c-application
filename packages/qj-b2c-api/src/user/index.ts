//@ts-nocheck
import { get, post, cacheParams } from '@brushes/optimize';

const MINI = {
  QUERY_NEW_TGINFO_MENU_TREE: 'web/cms/tginfoMenu/queryNewTginfoMenuTree.json',
  WARRANTY_LOGIN: 'web/ml/mlogin/warrantyLogin.json', //登录
  SAVE_UM_USER_PHONE_BY_WX: 'web/ml/muser/saveUmuserPhoneByWX.json', //绑定手机号
  ADD_SHOPPING_GOODS_BY_SPEC: 'web/oc/shopping/addShoppingGoodsBySpec.json', //检验规格
  ADD_SHOPPING_GOODS: 'web/oc/shopping/addShoppingGoods.json', // 加入购物车
  QUERY_SHOPPING_PAGE: 'web/oc/shopping/queryShoppingPage.json',
  QUERY_ADDRESS_BY_MERBER_CODE: 'web/um/address/queryAddressBymerberCode.json',
  QUERY_TO_CONTRACT: 'web/oc/shopping/queryToContract.json',
  GET_FLAG_SETTING_FOR_PAY_DATE: 'web/dd/falgSetting/getFalgSettingForPaydate.json', //	普通商品查询自动取消订单时间
  GET_TOTAL_DISCOUNT_PRICE: 'web/ur/userrights/getTotalDiscountPrice.json', // 用户权益差价计算
  CAL_CULATE_FREIGHT_FARE: 'web/oc/contract/calculateFreightFare.json', // 物流费用计算
  SAVE_CONTRACT: 'web/oc/contract/saveContract.json', // 加入订单
  SYNC_CONTRACT_STATE: 'web/oc/contract/syncContractState.json', // 查询订单是否创建成功 (单条)
  SYNC_CONTRACT_BATCH_STATE: 'web/oc/contract/syncContractBatchState.json', // 查询订单是否创建成功（批次）
  QUERY_PROVINCE_PAGE: 'web/bs/province/queryProvincePage.json',
  QUERY_AREA_PAGE: 'web/bs/area/queryAreaPage.json',
  //保存订单去支付{contractBillcode:''}
  SAVE_ORDER_TO_PAY: 'web/pte/pay/saveOrderToPay.json', // 获取支付方式
  QUERY_SHOPPING_TO_CONTRACT: 'web/oc/shopping/queryShoppingToContract.json', // // 购物车结算页面
  UPDATE_SHOPPING_GOODS_NUM: 'web/oc/shopping/updateShoppingGoodsNum.json', // 更新购物车数量
  CANCEL_CONTRACTC: 'web/oc/contract/cancelContractC.json',
  DELETE_SHOPPING_GOODS_BATCH: 'web/oc/shopping/deleteShoppingGoodsBatch.json',
  QUERY_EXPRESS_INFO: 'web/wl/exporg/queryExpressInfo.json',
  GET_CONTRACT_BY_CODE: 'web/oc/contract/getContractByCode.json',
  CONFIRM_RECEIVE: 'web/oc/contract/confirmReceive.json', // 确认收货
  DELETE_COLLECT_BY_CODE_STR: 'web/um/collect/deleteCollectByCodeStr.json', // 删除收藏
  SAVE_EVALUATE_SHOP: 'web/res/evaluate/saveEvaluateShop.json', // 评价
  SAVE_EVALUATE_GOODS: 'web/res/evaluate/saveEvaluateGoods.json', // 评价
  QUERY_USE_TEMPLATE: 'web/res/template/queryUseTemplate.json', // 获取评价的星数模版（五个星就是五项，一颗星就是一项）
  QUERY_EVALUATE_GOODS_PAGETRUE: 'web/res/evaluate/queryEvaluateGoodsPagetrue.json', // 评价列表 —— 商品详情
  QUERY_PROMOTION_PAGE_FULL_REDUCTION: 'web/pm/promotion/queryPromotionPageFullReduction.json',
  QUERY_COUPONLIST_BYSKU_CODE: 'web/pm/promotion/queryCouponListBySkuCode.json',
  SAVE_USER_COUPON: 'web/pm/usercoupon/saveUsercoupon.json',
  QUERY_USER_CON_BY_GOODS: 'web/oc/contract/queryUserConByGoods.json',
  SAVE_FOOTPRINT: 'web/um/footprint/saveFootprint.json', // 保存足迹
  DELETE_FOOTPRINT_BY_CODE_STR: 'web/um/footprint/deleteFootprintByCodeStr.json', // 删除足迹
  SAVE_UM_USER_PHONE: 'web/ml/muser/saveUmuserPhone.json', // H5注册
  SAVE_UM_USER_PHONE_V_CODE: 'web/ml/muser/saveUmuserPhoneVCode.json', // H5登录
  QUERY_PRO_APP_CONFIG_BY_CHANNEL: 'web/tm/Proapp/queryProappConfigByChannel.json', // 获取协议列表
  MINI_LOGOUT: '/web/ml/mlogin/loginOut.json', // 退出登录
  QUERY_OCS_CONFIG_LIST: '/web/ocs/ocsconfig/queryOcsconfigList.json', // 获取客服电话
  QUERY_PRO_APP_ENV_PAGE: '/web/tm/Proapp/queryProappEnvPage.json', // 授权页的头像背景
  GET_MINI_MOBILE: '/web/ml/mlogin/getMiniMobile.json', // wx授权获取手机号
  SAVE_UM_USER_PHONE_NO_CODE_BY_WX: '/web/ml/muser/saveUmuserPhoneNoCodeByWX.json', // 手机号直接登录
  GET_NOTICE: '/web/cms/notice/getNotice.json', // 公告详情
  QUERY_DOC_LIST_PAGE: '/web/cms/doclist/queryDoclistPage.json', // 文章列表
  UPDATE_SHOPPING_GOODS_PM_INFO: 'web/oc/shopping/updateShoppingGoodsPmInfo.json', // 更新促销信息
  GET_DOC_LIST: '/web/cms/doclist/getDoclist.json', // 文章详情
  QUERY_PROMOTION_BY_CODE_PAGE: '/web/pm/promotion/queryPromotioByCodePage.json', // 根据code获取优惠券列表
  QUERY_PROMOTIO_PAGE: '/web/pm/promotion/queryPromotioPage.json', // 优惠活动列表 1.满减 pbCode ="0002" 2.满折 pbCode ="0006" 3.全部 pbCode ="0002,0006"
  UPDATE_SHOPPING_GOODS_CHECK_STATE: '/web/oc/shopping/updateShoppingGoodsCheckState.json',
  QUERY_REFUND_PAGE_BUY: 'web/oc/refund/queryRefundPageBuy.json', // 获取售后单列表
  GET_REFUND_BY_CODE: '/web/oc/refund/getRefundByCode.json', // 获取售后单详情
  CHECK_REFUND: '/web/oc/refund/checkRefund.json', // 校验可售后商品信息
  GET_REFUND_GOODS: '/web/oc/refund/getRefundGoods.json', // 获取可售后商品信息
  QUERY_REF_CAUSE: '/web/oc/refund/queryRefCause.json', // 获取退货原因
  SAVE_REFUND: '/web/oc/refund/saveRefund.json', // 申请退款
  RES: '/web/oc/refund/res.json', // 撤销申请退款
  UPLOAD_REF_FILE: '/web/oc/refund/uploadRefFile.json', // 填写售后单时上传图片
  SEND_GOODS: '/web/oc/refund/sendGoods.json', // 售后-用户提交物流信息
  QUERY_EXPRESS_PAGE_FOR_PROP: '/web/wl/express/queryExpressPageForProp.json', // 获取物流公司的信息选项
  CANCEL_UNPAY_ORDER: '/web/oc/contract/cancelUnpayOrder.json' // 倒计时结束后，前端调用这个取消订单的接口
};

export const cancelUnpayOrder = (params = {}) => post(MINI.CANCEL_UNPAY_ORDER, params);

export const queryExpressPageForProp = (params = {}) => post(MINI.QUERY_EXPRESS_PAGE_FOR_PROP, params);

export const sendGoods = (params = {}) => post(MINI.SEND_GOODS, params);

export const checkRefund = (params = {}) => get(MINI.CHECK_REFUND, params);

export const getRefundGoods = (params = {}) => get(MINI.GET_REFUND_GOODS, params);

export const cancelAfterSales = (params = {}) => post(MINI.RES, params);

export const uploadRefFile = (params = {}) => post(MINI.UPLOAD_REF_FILE, params);

export const getRefundByCode = (params = {}) => post(MINI.GET_REFUND_BY_CODE, cacheParams(params));

export const queryRefundPageBuy = (params = {}) => post(MINI.QUERY_REFUND_PAGE_BUY, params);

export const saveRefund = (params = {}) => post(MINI.SAVE_REFUND, params);

export const queryRefCause = (params = {}) => get(MINI.QUERY_REF_CAUSE, params);

export const queryPromotioPage = (params = {}) => post(MINI.QUERY_PROMOTIO_PAGE, params);

export const queryPromotioByCodePage = (params = {}) => post(MINI.QUERY_PROMOTION_BY_CODE_PAGE, params);

export const getDoclist = (params = {}) => post(MINI.GET_DOC_LIST, params);

export const queryDoclistPage = (params = {}) => post(MINI.QUERY_DOC_LIST_PAGE, params);

export const getNotice = (params = {}) => get(MINI.GET_NOTICE, params);

export const saveUmuserPhoneNoCodeByWX = (params = {}) => post(MINI.SAVE_UM_USER_PHONE_NO_CODE_BY_WX, params);

export const getMiniMobile = (params = {}) => post(MINI.GET_MINI_MOBILE, params);

export const queryProappEnvPage = (params = {}) => get(MINI.QUERY_PRO_APP_ENV_PAGE, params);

export const queryOcsconfigList = (params = {}) => get(MINI.QUERY_OCS_CONFIG_LIST, params);

export const miniLogout = (params = {}) => post(MINI.MINI_LOGOUT, params);

export const queryProappConfigByChannel = (params = {}) => get(MINI.QUERY_PRO_APP_CONFIG_BY_CHANNEL, params);

export const saveUmuserPhoneVCode = (params = {}) => post(MINI.SAVE_UM_USER_PHONE_V_CODE, params);

export const saveUmuserPhone = (params = {}) => post(MINI.SAVE_UM_USER_PHONE, params);

export const deleteFootprintByCodeStr = (params = {}) => post(MINI.DELETE_FOOTPRINT_BY_CODE_STR, params);

export const saveFootprint = (params = {}) => post(MINI.SAVE_FOOTPRINT, cacheParams(params));

export const queryEvaluateGoodsPagetrue = (params = {}) => post(MINI.QUERY_EVALUATE_GOODS_PAGETRUE, params);

export const queryUseTemplate = (params = {}) => post(MINI.QUERY_USE_TEMPLATE, params);

export const saveEvaluateGoods = (params = {}) => post(MINI.SAVE_EVALUATE_GOODS, params);

export const saveEvaluateShop = (params = {}) => post(MINI.SAVE_EVALUATE_SHOP, params);

export const deleteCollectByCodeStr = (params = {}) => post(MINI.DELETE_COLLECT_BY_CODE_STR, params);

export const confirmReceive = (params = {}) => post(MINI.CONFIRM_RECEIVE, params);

export const getContractByCode = (params = {}) => get(MINI.GET_CONTRACT_BY_CODE, params);

export const queryExpressInfo = (params = {}) => get(MINI.QUERY_EXPRESS_INFO, params);

///  =====   小程序   ===== 代码
export const warrantyLogin = (params = {}) => get(MINI.WARRANTY_LOGIN, params);
export const saveUmuserPhoneByWX = (params = {}) => post(MINI.SAVE_UM_USER_PHONE_BY_WX, params);

// 商品详情页米
export const addShoppingGoodsBySpec = (params = {}) => post(MINI.ADD_SHOPPING_GOODS_BY_SPEC, params);
export const addShoppingGoods = (params = {}) => post(MINI.ADD_SHOPPING_GOODS, params);

// 购物车
export const queryShoppingPage = (params = {}) => post(MINI.QUERY_SHOPPING_PAGE, params);

// 确认订单页面接口
//我的地址
export const queryAddressBymerberCode = (params = {}) => post(MINI.QUERY_ADDRESS_BY_MERBER_CODE, cacheParams(params));
export const queryToContract = (params = {}) => post(MINI.QUERY_TO_CONTRACT, cacheParams(params));
export const getFalgSettingForPaydate = (params = {}) => post(MINI.GET_FLAG_SETTING_FOR_PAY_DATE, params);
export const getTotalDiscountPrice = (params = {}) => post(MINI.GET_TOTAL_DISCOUNT_PRICE, params);
export const calculateFreightFare = (params = {}) => post(MINI.CAL_CULATE_FREIGHT_FARE, params);
export const saveContract = (params = {}) => post(MINI.SAVE_CONTRACT, params);
export const syncContractState = (params = {}) => post(MINI.SYNC_CONTRACT_STATE, params);
export const syncContractBatchState = (params = {}) => post(MINI.SYNC_CONTRACT_BATCH_STATE, params);
//保存订单去支付{contractBillcode:''}
export const saveOrderToPay = (params = {}) => post(MINI.SAVE_ORDER_TO_PAY, params);
export const queryShoppingToContract = (params = {}) => post(MINI.QUERY_SHOPPING_TO_CONTRACT, cacheParams(params));
export const updateShoppingGoodsNum = (params = {}) => post(MINI.UPDATE_SHOPPING_GOODS_NUM, params);
export const cancelContractC = (params = {}) => post(MINI.CANCEL_CONTRACTC, params);
export const deleteShoppingGoodsBatch = (params = {}) => post(MINI.DELETE_SHOPPING_GOODS_BATCH, params);
export const queryPromotionPageFullReduction = (params = {}) => post(MINI.QUERY_PROMOTION_PAGE_FULL_REDUCTION, params);
export const queryCouponListBySkuCode = (params = {}) => post(MINI.QUERY_COUPONLIST_BYSKU_CODE, params);
export const saveUsercoupon = (params = {}) => post(MINI.SAVE_USER_COUPON, params);
export const queryUserConByGoods = (params = {}) => post(MINI.QUERY_USER_CON_BY_GOODS, params);
export const queryNewTginfoMenuTree = (params = {}) => post(MINI.QUERY_NEW_TGINFO_MENU_TREE, params);
export const updateShoppingGoodsPmInfo = (params = {}) => post(MINI.UPDATE_SHOPPING_GOODS_PM_INFO, params);

export const updateShoppingGoodsCheckState = (params = {}) => post(MINI.UPDATE_SHOPPING_GOODS_CHECK_STATE, params);

export const queryProvincePage = (params = {}) => post(MINI.QUERY_PROVINCE_PAGE, params);
export const queryAreaPage = (params = {}) => post(MINI.QUERY_AREA_PAGE, params);
