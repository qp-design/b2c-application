import { getRefundGoods, saveRefund, queryRefCause } from 'qj-b2c-api';
import { useEffect, useState } from 'react';
import { getStorage, getTaro, getBaseUrl, getEnv } from '@brushes/utils';
import { navigatorHandler } from '@brushes/utils';
import { showToast } from '@/utils';

interface useAfterSalesApplyType {
  contractBillcode: string;
  skuCode: string;
}

const baseUrl = getBaseUrl();
const tip = '请与商家协商，确认达成一致后填写协商好的退款金额。';
const placeholder = '描述补充，有助于商家更好的处理售后问题';
const limit = 3; // 最多上传几张图片

export const useAfterSalesApply = ({ contractBillcode, skuCode }: useAfterSalesApplyType) => {
  const [reasonList, getReasonList] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const [reason, setReason] = useState('');
  const [imgGroup, setImgGroup] = useState<any>([]);
  const [goodsInfo, setGoodsInfo] = useState<any>({});
  const [fillInVal, setFillInVal] = useState('');
  const [loading, setLoading] = useState(false);

  const isWeapp = getEnv();

  useEffect(() => {
    (async () => {
      await getGoodsInfo();
    })();
  }, []);

  const fixPrice = (num: number = 0) => {
    if (num) {
      return num.toLocaleString('en-Us', {
        minimumFractionDigits: 2
      });
    }
    return `0`;
  };

  const getGoodsInfo = async () => {
    try {
      const result = await getRefundGoods({
        contractBillcode,
        skuCode,
        isLocalMock: !isWeapp
      });
      setGoodsInfo(result.dataObj);
    } catch (err) {
      console.log(err);
    }
  };

  const getReason = async () => {
    setPopupLoading(true);
    try {
      const result = await queryRefCause({
        isLocalMock: !isWeapp
      });
      getReasonList(result);
    } catch (err) {
      console.log(err);
    } finally {
      setPopupLoading(false);
    }
  };

  const handleChooseReason = (e: any) => {
    setReason(e.detail.value);
    setPopupVisible(false);
  };

  const handlePopupShow = async () => {
    setPopupVisible((prevState) => !prevState);
    if (!popupVisible && reasonList.length === 0) {
      await getReason();
    }
  };

  const handleDelImg = (coe: number) => {
    setImgGroup((prevState: any) => [...prevState.slice(0, coe), ...prevState.slice(coe + 1)]);
  };

  const handleFillInReason = (e: any) => {
    setFillInVal(e.detail.value);
  };

  const handleSubmit = async (goodsNum: number, contractBillcode: string, refundType: string, goodsPrice: any) => {
    const { contractGoodsCode, goodsCamount, contractGoodsPrice } = goodsInfo;
    if (!reason) {
      showToast('请填写退款信息', 'none');
      return;
    }
    setLoading(true);

    const obj = {
      ocRefundGoodsBeanList: [
        {
          contractGoodsCode, //商品单号
          goodsCamount, //商品选购数量
          refundGoodsNum: +goodsNum, //商品退数量
          // refundGoodsAmt: +goodsNum * contractGoodsPrice //商品退金额
          refundGoodsAmt: fixPrice(goodsPrice / +goodsNum) //计算后的退款总金额再除商品数量
        }
      ],
      contractBillcode: contractBillcode, //订单编号
      // refundMoney: +goodsNum * +contractGoodsPrice, //售后单退款金额
      refundMoney: goodsPrice,
      refundEx: reason, //售后单退款原因
      refundMeo: fillInVal, //用户填写的退款原因描述
      ocRefundFileDomainList: transformArr(imgGroup), //上传的图片url
      refundType: refundType //退款类型：B01仅退款；B02退货退款
    };

    try {
      const result = await saveRefund({ params: JSON.stringify(obj) });
      if (result.success) {
        showToast(result.msg);
        setTimeout(() => {
          navigatorHandler('afterSalesList');
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const transformArr = (arr: Array<any>) => {
    return arr.map((item) => {
      return {
        refundFileUrl: item
      };
    });
  };

  const handleChooseImg = () => {
    const Taro = getTaro();
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res: any) {
        Taro.uploadFile({
          url: `${baseUrl}web/oc/refund/uploadRefFile.json`, //仅为示例，非真实的接口地址
          filePath: res.tempFilePaths[0],
          name: 'file',
          header: {
            'saas-agent': 'qj-wemini',
            'saas-token': getStorage('saas-token')
          },
          success(res: any) {
            const response = JSON.parse(res.data);
            const isTaro = getEnv();
            if (response.errorCode === 'nologin') {
              if (isTaro) {
                navigatorHandler('/account/auth/index');
              } else {
                navigatorHandler('/account/mobileLogin/index');
              }
            } else {
              const resultImg = baseUrl + response.fileUrl;
              setImgGroup((prevState: any) => [...prevState, resultImg]);
            }
          }
        });
      }
    });
  };

  return {
    tip,
    reasonList,
    popupVisible,
    popupLoading,
    handlePopupShow,
    handleChooseReason,
    reason,
    handleChooseImg,
    placeholder,
    imgGroup,
    handleDelImg,
    limit,
    goodsInfo,
    handleFillInReason,
    handleSubmit,
    loading
  };
};
