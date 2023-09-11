//@ts-nocheck
import { memo, useMemo, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { CountNum } from '@/common/countNum';
import classNames from 'classnames';

interface DetailType {
  title: string;
  [propsname: string]: any;
}
const refundGoodsDetailJsx: React.FC<DetailType> = ({ title, dataPic, goodsName, goodsCamount = 2, price }) => {
  //是否显示帮助字段
  const [helpText, setHelpText] = useState(true);
  //退货数量
  const [amount, setAmount] = useState(goodsCamount);
  const { View, Image } = useComponent();
  const getAmountNum = (value) => {
    setAmount(value);
  };
  const btnStyle = useMemo(() => {
    return classNames(
      'goods_nums',
      { goods_nums_btm: Number(goodsCamount) > 1 },
      { goods_nums_btm1: Number(goodsCamount) < 2 }
    );
  }, [goodsCamount]);

  return (
    <View className="refundGoodsDeatil">
      {title}
      <View className="goodsDeatilMsg">
        <View className="goods_img">
          <Image
            src={
              'https://b2coptfa10b0d4f03f4ff48c571f14558fa068.saas.qjclouds.com/paas/shop/597370900596056114//63758997dcb34f15ae1b7f2244d52916.png'
            }
            alt=""
            className="img"
          />
        </View>
        <View className="goods_content">
          <View className="goods_text">
            <View className="goods_title">{'花秘瑰萃 明星臻选套装 花秘瑰萃 明星臻发顺丰水电费付付水电费'}</View>
            <View className="goods_price">{'￥980.00'}</View>
          </View>

          <View className={btnStyle}>
            <View className="goods_size">{'30ml/清淡型'}</View>
            {Number(goodsCamount) > 1 ? (
              <View className="nums_btn">
                <View className="icon_btn" onClick={() => setHelpText(!helpText)}>
                  <QjMobileIcon value="bangzhu" style={{ fontSize: 15 }} />
                </View>
                <CountNum value={amount} getAmountNum={getAmountNum} goodsCamount={goodsCamount} />
              </View>
            ) : (
              `x${goodsCamount}`
            )}
          </View>
        </View>
        <View className="help_btn" style={{ display: helpText ? 'block' : 'none' }}>
          如部分商品售后成功，剩余商品将不能申请售后
        </View>
      </View>
    </View>
  );
};
export const RefundGoodsDetail = memo(refundGoodsDetailJsx);
