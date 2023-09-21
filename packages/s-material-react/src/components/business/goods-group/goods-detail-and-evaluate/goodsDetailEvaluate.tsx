import { useComponent } from '@brushes/simulate-component';
import { RateItem } from '@/common/rateItem';
import { NoData } from '@/common/noData';

export const GoodsDetailEvaluate = ({ evaluateArr }: any) => {
  const { View } = useComponent();


  return (
    <View className={'goodsDetailEvaluate'}>
      {evaluateArr.length ? (
        <View>
          <View className={'topInfo'}>评价 ({evaluateArr.length})</View>
          {evaluateArr.slice(0, 5).map((item: any, index: number) => {
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
