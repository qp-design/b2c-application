import { get, postFormData, post, cacheParams } from '@brushes/optimize';

export const LIBARY = {
  LOGIN: 'web/ml/mlogin/loginIn.json',
  REGISTER: 'web/ml/muser/saveUserPhoneForPla.json',
  CHECK_USER_PHONE_THERE: '/web/ml/muser/checkUserPhoneThere.json',
  LOGINOUT: 'web/os/osOAuthEnvconfig/queryOsOAuthEnvconfig.json',
  GOODS_QUERY: 'web/rs/resourceGoods/queryResGoodsPageByMemCode.json',
  GOODS_UPDATE: 'web/rs/resourceGoods/updateAuditOrCannel.json',
  GOODS_DETAIL: 'web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json',
  // 添加商品
  GOODS_CLASSTREE: 'web/rs/classtree/queryClasstreeForUser.json',
  GOODS_BRAND: 'web/rs/brandrelation/queryBrandRelationPage.json',
  GOODS_CATEGORE: 'web/rs/specOption/fetchSpeOptByPntCodeNomRel.json',
  UPLOAD_FILES: 'web/rs/goodsFile/uploadGoodsFiles.json',
  FREIGHT_EXP: 'web/wl/freightExp/queryFreightExpPage.json',
  // 商品详情页面
  QUERY_SkU_Shelf: 'web/rs/sku/querySkuNotOnShelf.json',
  // 低代码配置保存
  LOW_CODE_SAVE: 'web/pfs/pfsmodeltagvalue/updatePfsModelTagValueDomain.json',
  // 开通场景、场景信息bottom{sceneType:'',tmsceneCode:''}
  QUERY_TMSCENE: 'web/tm/Tmtmscene/queryTmscenePageForSc.json',
  //账户余额
  QUERY_ACCOUNTOUTERBYUSER: 'web/vd/vdfaccountouter/queryAccountOuterByUser.json',
  //消息列表
  QUERY_IMSGPUSHMSGPAGE: 'web/mns/mnsblist/queryMnsblistPage.json',
  //账户基本信息
  GET_USER_INFO_AUTH: 'web/um/userInfoAuth/getUserInfoAuth.json',
  //账户登录日志
  QUERY_USERLOGININFOSERVICE: 'web/log/logservice/queryLogservicePage.json',
  //查看全部订单
  QUERY_CONTRACTPAGEC: 'web/oc/contract/queryContractPageC.json',
  //财务充值记录
  QUERYR_ECHARGEPAGEFORATBYMEM: 'web/cp/recharge/queryRechargePageForAtByMem.json',
  //财务-在线充值-获取订单ID
  BALANCE_RECHARGE_ONLINE: 'web/cp/recharge/balanceRechargeOnline.json',
  //财务-在线充值-返回code_url
  PAYMENT_COMMIT: 'web/pte/pay/paymentCommit.json',
  //应用场景(开通、流量运营)
  QUERY_TMSCENEPAGEFORSC: 'web/tm/Tmtmscene/queryTmscenePageForSc.json',
  //TODO:应用场景(开通前)
  QUERY_SCENESPROAPPPAGE: 'web/tm/sceneSproapp/querySceneSproappPage.json',
  //TODO:应用场景(开通时)
  QUERY_TMPROAPPPAGEFORSC: 'web/tm/Tmscene/queryTmProappPageForSc.json',
  //TODO:应用场景(检查手机号)
  CHECK_USERPHONEBYENANT: 'web/ml/muser/checkUserPhoneByTenant.json',
  //TODO:应用场景(确认开通)
  SAVE_TMSCENEFORPLATSCNEW: 'web/tm/Tmtmscene/saveTmsceneForPlatScNew.json',
  //TODO:获取logo
  GET_PROAPPINFO: 'web/ml/mlogin/getProappinfo.json',
  //应用场景(商城交易、流量运营)
  QUERY_SCENESELECTPAGE: 'web/tm/Tmtmscene/querySceneSelectPage.json',
  // 图片
  QUERY_FILE_LIST_VIEW: 'web/fm/file/queryFilelistView.json',
  //用户-实名认证
  SAVE_USERINFO_AUTH: 'web/um/userInfoAuth/saveUserInfoAuth.json',
  //用户-安全设置-修改支付密码
  UPDATE_USER_PAYWD: 'web/um/userservice/updateUserPaywd.json',
  //用户-安全设置-修改登录密码
  UPDATE_USER_PSW: 'web/um/userservice/updateUserpsw.json',
  SEND_PHONE: 'web/ml/muser/sendPhone.json',
  LOGIN_IN_BY_CODE: 'web/ml/mlogin/loginInByCode.json',
  CHECK_USER_PHONE: 'web/ml/muser/checkUserPhone.json',
  GET_PHONE_FOR_PLA_REG_SC: 'web/ml/muser/getPhoneForPlaRegSc.json',
  UPDATE_UMUSER_PSW: 'web/ml/muser/updateUmuserPw.json',
  FIND: 'web/es/searchengine/find.json',
  QUERY_GOODS_CLASS_TREE: 'web/rs/rsGoodsClass/queryGoodsClassTree.json',
  GET_RESOURCE_GOODS_INFO_BY_SKU_CODE: 'web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json',
  QUERY_PROMOTION_LIST_BY_GOODS_CODE: 'web/pm/promotion/queryPromotionListByGoodsCode.json',
  CHECK_COLLECT_EXIT: 'web/um/collect/checkCollectExit.json',
  SAVE_COLLECT: 'web/um/collect/saveCollect.json',
  DELETE_COLLECT_BY_CODE: 'web/um/collect/deleteCollectByCode.json',
  GET_PFS_MODEL_TAG_VALUE: 'web/pfs/pfsmodeltagvalue/getPfsModelTagValue.json',
  GET_PFS_MODEL_TAG_VALUE_BY_TG_INFO: 'web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json',
  //提交订单支付(立即结算)
  //保存订单{orderDomainStr:{}}
  SAVE_PRODUCTORDER: 'web/tm/Tmtmscene/saveProductOrder.json',

  //立即支付{ptradeSeqno:'',payCommitStr:{},contractBlance:0,paywd}
  //购买场景
  //获取场景信息top{sceneType:'',tmsceneCode: :''}
  QUERY_TMSCENEPROAPPPAGE_FORSC: 'web/tm/Tmtmscene/queryTmsceneProappPageForSc.json',
  GET_USERSERVICE_INFO: 'web/um/userservice/getUserserviceInfo.json',
  //检查支付密码
  QUERY_CHECKPAYWD: 'web/um/userservice/queryCheckPaywd.json',
  //自动续费切换{tmsceneId:'',tmsceneTtdeposit:''}
  UPDATE_TMSCENETTDEPOSIT: 'web/tm/Tmtmscene/updateTmsceneTtdeposit.json',
  //续费产品
  // table {sceneCode:''}
  QUERY_SCENEPAGE: 'web/tm/Scene/queryScenePage.json',
  QUERY_TG_INFO_MENU_TREE: 'web/cms/tginfoMenu/queryTginfoMenuTree.json',
  QUERY_TG_INFO_MENU_TREE_FOR_TG_INFO: 'web/cms/tginfoMenu/queryTginfoMenuTreeForTginfo.json',
  //已开通站点  获取场景信息top{sceneType:'',tmsceneCode: :''}
  //去结算 保存订单{orderDomainStr:{}}
  //查询支付状态
  SYNC_CONTRACTPAYSTATE: 'web/oc/contract/syncContractPayState.json',
  //获取临时token
  GET_TEMPORARY_TOKEN: `web/ml/mlogin/getTemporaryToken.json`,
  //无密码登录
  LOGIN_WITHOUT_PASSWORD: `web/ml/mlogin/loginWithoutPassword.json`,

  //云微店
  //我的优惠券
  QUERY_USERCOUPONNEMBER: 'web/pm/usercoupon/queryUsercouponNember.json',
  //page ,rows ,dataState(0未使用，1已使用，2已过期),pbCode(0004,0005)
  QUERY_USERCOUPONPAGE_FORC: 'web/pm/usercoupon/queryUsercouponPageForC.json',
  //我的收藏
  //page: 1,rows: 10,collectType: 0
  QUERY_COLLECTPAGE: 'web/um/collect/queryCollectPage.json',
  //我的地址
  QUERY_ADDRESS_BYMERBERCODE: 'web/um/address/queryAddressBymerberCode.json',
  //最近浏览 page: 1 rows: 50
  QUERY_FOOTPRINTPAGEPLAT: 'web/um/footprint/queryFootprintPagePlat.json',
  //设置
  //绑定手机号
  INDEX_MEM: 'web/mi/mindex/indexMem.json',
  //发送验证码
  //检查验证码 userPhone: 18551991024 code: 412384
  CHECK_VERIFICATIONMA: 'web/um/userservice/checkVerificationMa.json',
  //修改手机号 newUserPhone: 18551991024 oldUserPhone: 18551991024 code: 507642
  UPDATE_USERPHONE_BYUSERPHONE: 'web/um/userservice/updateUserPhoneByUserPhone.json',
  //新增收获地址 addressMember、addressPhone、provinceCode、provinceName、cityCode、cityName、areaCode、areaName、addressDefault、addressDetail、userCode
  SAVE_ADDRESS: 'web/um/address/saveAddress.json',
  //修改密码 oldPassword: 987654321 newPassword: 1234567890
  //删除收获地址 addressId
  DELETE_ADDRESS: 'web/um/address/deleteAddress.json',
  UPDATE_ADDRESS: 'web/um/address/updateAddress.json',
  GET_ADDRESS: '/web/um/address/getAddress.json',
  // 我的页面获取订单各个状态的角标
  GET_CONTRACT_NUMBERS: '/web/oc/contract/getContractNumbers.json',
  QUERY_RESOURCE_GOODS_PAGE_PALT: '/web/rs/resourceGoods/queryResourceGoodsPagePalt.json',
  // 查看订单状态
  LOGIN_BY_TOKEN: 'web/ml/mlogin/loginByToken.json',
  // 公告
  QUERY_NOTICE_PAGE: 'web/cms/notice/queryNoticePage.json',

  QUERY_FILE_PAGE: 'web/fm/file/queryFilePage.json',

  // 查看所有优惠券
  QUERY_PROMOTION_PAGE_FULL_REDUCTION: 'web/pm/promotion/queryPromotionPageFullReduction.json',
  GET_PFS_TAG_VALUE_DATA_BY_TG_INFO: 'web/pfs/pfsmodeltagvalue/getPfsModelTagValueDataByTginfo.json',
  UPDATE_PFS_MODEL_TAG_VALUE_DATA_DOMAIN: 'web/pfs/pfsmodeltagvalue/updatePfsModelTagValueDataDomain.json',
  GET_SETS_UP_DIS_UTIL: '/web/pm/promotion/getSetsupDisUtil.json'
};

export const getSetsupDisUtil = (params = {}) => post(LIBARY.GET_SETS_UP_DIS_UTIL, cacheParams(params));

export const getContractNumbers = (params = {}) => get(LIBARY.GET_CONTRACT_NUMBERS, params);

export const getAddress = (params = {}) => get(LIBARY.GET_ADDRESS, params);

export const deleteAddress = (params = {}) => get(LIBARY.DELETE_ADDRESS, params);

export const updateAddress = (params = {}) => get(LIBARY.UPDATE_ADDRESS, params);

//新增收获地址
export const saveAddress = (params = {}) => get(LIBARY.SAVE_ADDRESS, params);

//修改手机号
export const updateUserPhoneByUserPhone = (params = {}) => post(LIBARY.UPDATE_USERPHONE_BYUSERPHONE, params);
//检查验证码
export const checkVerificationMa = (params = {}) => post(LIBARY.CHECK_VERIFICATIONMA, params);
export const INDEX_MEM = (params = {}) => get(LIBARY.INDEX_MEM, params);
//最近浏览 page: 1 rows: 50
export const queryFootprintPagePlat = (params = {}) => post(LIBARY.QUERY_FOOTPRINTPAGEPLAT, params);
//我的收藏
//page: 1,rows: 10,collectType: 0
export const queryCollectPage = (params = {}) => post(LIBARY.QUERY_COLLECTPAGE, params);
//page ,rows ,dataState(0未使用，1已使用，2已过期),pbCode(0004,0005)
export const queryUsercouponPageForC = (params = {}) => post(LIBARY.QUERY_USERCOUPONPAGE_FORC, params);
//我的优惠券
export const queryUsercouponNember = (params = {}) => post(LIBARY.QUERY_USERCOUPONNEMBER, params);
//获取临时token
export const getTemporaryToken = (params = {}) => post(LIBARY.GET_TEMPORARY_TOKEN, params);
//查询支付状态
export const syncContractPayState = (params = {}) => post(LIBARY.SYNC_CONTRACTPAYSTATE, params);
//验证手机号是否存在
export const checkUserPhoneThere = (params = {}) => post(LIBARY.CHECK_USER_PHONE_THERE, params);
export const queryTginfoMenuTreeForTginfo = (params = {}) => post(LIBARY.QUERY_TG_INFO_MENU_TREE_FOR_TG_INFO, params);
export const queryTginfoMenuTree = (params = {}) => post(LIBARY.QUERY_TG_INFO_MENU_TREE, params);
export const queryScenePage = (params = {}) => post(LIBARY.QUERY_SCENEPAGE, params);
//自动续费切换
export const updateTmsceneTtdeposit = (params = {}) => post(LIBARY.UPDATE_TMSCENETTDEPOSIT, params);
//获取场景信息top
export const queryTmsceneProappPageForSc = (params = {}) => get(LIBARY.QUERY_TMSCENEPROAPPPAGE_FORSC, params);
export const getUserserviceInfo = (params = {}) => get(LIBARY.GET_USERSERVICE_INFO, params);
//检查支付密码
export const queryCheckPaywd = (params = {}) => post(LIBARY.QUERY_CHECKPAYWD, params);
//保存订单{orderDomainStr:{}}
export const saveProductOrder = (params = {}) => post(LIBARY.SAVE_PRODUCTORDER, params);
export const getPfsModelTagValueByTginfo = (params = {}) => post(LIBARY.GET_PFS_MODEL_TAG_VALUE_BY_TG_INFO, cacheParams(params));
//商品详情页
export const getResourceGoodsInfoBySkuCode = (params = {}) => get(LIBARY.GET_RESOURCE_GOODS_INFO_BY_SKU_CODE, cacheParams(params));
// 商品详情获取促销列表
export const queryPromotionListByGoodsCode = (params = {}) => get(LIBARY.QUERY_PROMOTION_LIST_BY_GOODS_CODE, params);
// 检查用户是否收藏商品
export const checkCollectExit = (params = {}) => get(LIBARY.CHECK_COLLECT_EXIT, params);
// 商品详情-收藏商品
export const saveCollect = (params = {}) => get(LIBARY.SAVE_COLLECT, params);
// 商品详情-取消收藏商品
export const deleteCollectByCode = (params = {}) => get(LIBARY.DELETE_COLLECT_BY_CODE, params);
// 获取商品列表
export const find = (params = {}) => get(LIBARY.FIND, cacheParams(params));
// 获取商品分类
export const queryGoodsClassTree = (params = {}) => get(LIBARY.QUERY_GOODS_CLASS_TREE, cacheParams(params));
//TODO:获取图片logo
export const getProappinfo = (params = {}) => get(LIBARY.GET_PROAPPINFO, params);
//TODO:应用场景(确认开通)
export const saveTmsceneForPlatScNew = (params = {}) => post(LIBARY.SAVE_TMSCENEFORPLATSCNEW, params);
//TODO:应用场景(检查手机号)
export const checkUserPhoneByTenant = (params = {}) => get(LIBARY.CHECK_USERPHONEBYENANT, params);
//TODO:应用场景(开通时)
export const queryTmProappPageForSc = (params = {}) => get(LIBARY.QUERY_TMPROAPPPAGEFORSC, params);
//TODO:应用场景(开通前)
export const querySceneSproappPage = (params = {}) => post(LIBARY.QUERY_SCENESPROAPPPAGE, params);
// 登录修改密码
export const updateUmuserPw = (params = {}) => post(LIBARY.UPDATE_UMUSER_PSW, params);
// 注册检测手机
export const getPhoneForPlaRegSc = (params = {}) => get(LIBARY.GET_PHONE_FOR_PLA_REG_SC, params);
// 修改密码检查手机号
export const checkUserPhone = (params = {}) => post(LIBARY.CHECK_USER_PHONE, params);
// 获取验证码
export const loginInByCode = (params = {}) => get(LIBARY.LOGIN_IN_BY_CODE, params);
// 获取验证码
export const sendPhone = (params = {}) => get(LIBARY.SEND_PHONE, params);
export const queryFilelistView = (params = {}, query = '') => {
  return post(`${LIBARY.QUERY_FILE_LIST_VIEW}?fileSort=FILE_GD&fileRemark=${query}`, params);
};
export const queryFilePage = (params = {}) => post(LIBARY.QUERY_FILE_PAGE, params);

//应用场景(商城交易、流量运营)
export const querySceneSelectPage = (params = {}) => post(LIBARY.QUERY_SCENESELECTPAGE, params);
//应用场景
export const queryTmscenePageForSc = (params = {}) => get(LIBARY.QUERY_TMSCENEPAGEFORSC, params);
//财务充值记录
export const queryRechargePageForAtByMem = (params = {}) => post(LIBARY.QUERYR_ECHARGEPAGEFORATBYMEM, params);
//财务-在线充值-获取订单ID
export const balanceRechargeOnline = (params = {}) => post(LIBARY.BALANCE_RECHARGE_ONLINE, params);
//财务-在线充值-返回code_url
export const paymentCommit = (params = {}) => post(LIBARY.PAYMENT_COMMIT, params);
// 查看全部订单
export const queryContractPageC = (params = {}) => post(LIBARY.QUERY_CONTRACTPAGEC, params);
//账户登录日志
export const queryUserlogininfoservicePage = (params = {}) => post(LIBARY.QUERY_USERLOGININFOSERVICE, params);
// 获取账户信息
export const getUserInfoAuth = (params = {}) => post(LIBARY.GET_USER_INFO_AUTH, params);
// 开通场景
export const queryTmscene = (params = {}) => get(LIBARY.QUERY_TMSCENE, params);
//账户余额
export const queryAccount = (params = {}) => get(LIBARY.QUERY_ACCOUNTOUTERBYUSER, params);
//消息列表
export const queryImsgPushmsgPage = (params = {}) => post(LIBARY.QUERY_IMSGPUSHMSGPAGE, params);
// 登录
export const login = (params = {}) => post(LIBARY.LOGIN, params);
// 注册
export const regiter = (params = {}) => post(LIBARY.REGISTER, params);
// 注销
export const loginOut = (params = {}) => get(LIBARY.LOGINOUT, params);
// 商品查询
export const goodsQuery = (params = {}) => {
  const searchParams = Object.assign({ rows: 10, page: 1 }, params);
  return post(LIBARY.GOODS_QUERY, searchParams);
};
// 商品更新
export const goodsUpdate = (params = {}) => {
  return post(LIBARY.GOODS_UPDATE, params);
};
// 商品分类
export const queryClasstreeForUser = (params = {}) => get(LIBARY.GOODS_CLASSTREE, params);
// 品牌
export const queryBrandRelationPage = (params = {}) => get(LIBARY.GOODS_BRAND, params);
// 商品规格
export const fetchSpeOptByPntCodeNomRel = (params = {}) => post(LIBARY.GOODS_CATEGORE, params);
// 图片上传
export const uploadGoodsFiles = (params = {}) => postFormData(LIBARY.UPLOAD_FILES, params);
// 运费模版
export const queryFreightExpPage = (params = {}) => post(LIBARY.FREIGHT_EXP, params);
// 商品详情页面
export const querySkuNotOnShelf = (params = {}) => post(LIBARY.QUERY_SkU_Shelf, params);
// 低代码配置保存
export const lowCodeSave = (params = {}) => post(LIBARY.LOW_CODE_SAVE, params);
export const goodsDetailQuery = (params = {}) => get(LIBARY.GOODS_DETAIL, params);
//用户-安全设置-修改登录密码(oldPassword,newPassword)
export const updateUserPsw = (params = {}) => post(LIBARY.UPDATE_USER_PSW, params);
//用户-安全设置-修改支付密码(oldUserPaywd,userPaywd)
export const updateUserPaywd = (params = {}) => post(LIBARY.UPDATE_USER_PAYWD, params);
//用户-实名认证
export const saveUserInfoAuth = (params = {}) => postFormData(LIBARY.SAVE_USERINFO_AUTH, params);
//获取店铺装修数据
export const getPfsModelTagValue = (params = {}) => post(LIBARY.GET_PFS_MODEL_TAG_VALUE, params);
//获取多个商品接口
export const queryResourceGoodsPagePalt = (params = {}) => post(LIBARY.QUERY_RESOURCE_GOODS_PAGE_PALT, params);

//不同产线换取token
export const loginByToken = (params = {}) => post(LIBARY.LOGIN_BY_TOKEN, params);

//公告接口
export const queryNoticePage = (params = {}) => post(LIBARY.QUERY_NOTICE_PAGE, params);

// 所有优惠券
export const queryPromotionPageFullReductionManage = (params = {}) => post(LIBARY.QUERY_PROMOTION_PAGE_FULL_REDUCTION, params);

// 页面数据流查询
export const getPfsModelTagValueDataByTginfo = (params = {}) => post(LIBARY.GET_PFS_TAG_VALUE_DATA_BY_TG_INFO, params);

// 页面数据流设置
export const updatePfsModelTagValueDataDomain = (params = {}) => post(LIBARY.UPDATE_PFS_MODEL_TAG_VALUE_DATA_DOMAIN, params);
