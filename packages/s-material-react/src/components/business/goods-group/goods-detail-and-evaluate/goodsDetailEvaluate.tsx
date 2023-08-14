import { useComponent } from '@brushes/simulate-component';
import { RateItem } from '@/common/rateItem';
import { useRef } from 'react';
import { NoData } from '@/common/noData';

export const GoodsDetailEvaluate = ({ evaluateArr }: any) => {
  const { View } = useComponent();
  const list = useRef(evaluateArr);

  return (
    <View className={'goodsDetailEvaluate'}>
      {list.current.length ? (
        <View>
          <View className={'topInfo'}>评价 ({list.current.length})</View>
          {list.current.slice(0, 5).map((item: any, index: number) => {
            return <RateItem item={item} key={index} />;
          })}
        </View>
      ) : (
        <NoData
          style={{ margin: '100px auto' }}
          url={'https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noEvaluate.png'}
          title={'还没有评价, 期待您的评价'}
        />
      )}
    </View>
  );
};
