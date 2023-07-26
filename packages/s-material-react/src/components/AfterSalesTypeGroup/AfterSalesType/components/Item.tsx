import React, { memo, useContext } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { tipWord } from '../tipConfig';
import { fixPrice } from '@/utils';
import { MCAfterSalesType } from '../context';

const ItemJsx: React.FC = () => {
  const { View, Image, NumStep, SmoothView } = useComponent();
  const { typeTip, setTypeTip, goodsNum, handleStep, goodsInfo, goodsPrice } = useContext(MCAfterSalesType);

  const { goodsName, skuName, dataPic } = goodsInfo;

  return (
    <View className={'afterSalesTypeItem'}>
      <View className={'afterSalesTypeTitle'}>退款商品</View>
      <View className={'afterSalesTypeContent'}>
        <Image src={dataPic} className={'img'} />
        <View className={'info'}>
          <View className={'base'}>
            <SmoothView className={'name'}>{goodsName}</SmoothView>
            <SmoothView className={'price'}>{fixPrice(goodsPrice)}</SmoothView>
          </View>
          <View className={'advance'}>
            <View className={'size'}>{skuName}</View>
            <View className={'stepWrap'}>
              <QjMobileIcon
                style={{ fontSize: 12, color: '#C3C6CD', margin: '8px' }}
                value={'bangzhu'}
                onClick={() => setTypeTip((prevState: boolean) => !prevState)}
              />
              <NumStep count={goodsNum} handleStep={handleStep} />
            </View>
          </View>
          {typeTip ? <View className={'tip'}>{tipWord}</View> : null}
        </View>
      </View>
    </View>
  );
};

export const Item = memo(ItemJsx);
