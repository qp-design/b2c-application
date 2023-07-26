//@ts-nocheck
import { Fragment, memo, useRef } from 'react';
import { useComponent, antdMobile } from '@brushes/simulate-component';
import { useEvaluateDetail } from 'qj-mobile-store';
import { Rate } from '@/common/rate';
interface EvaluateDetail {
  code: string;
  borderRadius: number;
  borderColor: string;
  color: number;
  buttonColor: string;
  buttonBorderRadius: number;
  paddingTop: number;
  paddingBottom: number;
}
const EvaluateDetailJsx = ({
  code,
  borderRadius,
  borderColor,
  color,
  buttonColor,
  buttonBorderRadius,
  paddingTop,
  paddingBottom
}) => {
  const { orderInfo, changeStar, Submit, changeContent } = useEvaluateDetail(code);
  const { Button } = antdMobile;
  const { View, Image, TextArea, Textarea } = useComponent();
  const Te = TextArea || Textarea;

  const placeholder = useRef('宝贝满足你吗？分享一下它吧');
  return (
    <View className="evaluateDetail" style={{ paddingTop: paddingTop, paddingBottom: paddingBottom }}>
      {orderInfo.map((item, index) => (
        <Fragment key={index}>
          <View className="topInfo">
            <View className="lPart">
              <Image
                src={item['dataPic']}
                className="img"
                style={{ borderRadius: borderRadius === 1 ? '20px' : '0px' }}
              />
              <View className="goodsInfo">
                <View className="goodsName">{item['goodsName']}</View>
                <View className="goodsSize">{item['skuName']}</View>
              </View>
            </View>
            <View className="rPart">
              <View className="price">￥ {item['pricesetNprice']}</View>
            </View>
          </View>

          <View className="rate">
            <View className="title">商品评价</View>
            <Rate onChange={changeStar.bind(null, index)} />
          </View>

          <View className="evaluate">
            <Te
              className={'content'}
              placeholder={placeholder.current}
              rows={5}
              maxLength={30}
              onInput={changeContent.bind(null, index)}
            />
          </View>
        </Fragment>
      ))}

      <Button
        style={{
          border: `1px solid ${borderColor}`,
          color: color,
          backgroundColor: buttonColor,
          borderRadius: buttonBorderRadius === 1 ? '20px' : '0px'
        }}
        className={'btn'}
        onClick={Submit}
      >
        提交
      </Button>
    </View>
  );
};

export const EvaluateDetail = memo(EvaluateDetailJsx);
