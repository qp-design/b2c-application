import { useComponent } from '@brushes/simulate-component';
import { Rate } from '@/common/rate';

export const RateItem = ({ item }: any) => {
  const { View, Image } = useComponent();

  return (
    <View className={'rateItem'}>
      <View className={'topInfo'}>
        <View className={'lPart'}>
          <Image src={item.userImgurl} className={'avatar'} />
          <View className={'userInfo'}>
            <View className={'name'}>{item.userName}</View>
            <Rate readOnly size={14} count={item.evaluateScopeReList.length} />
          </View>
        </View>
        <View className={'rPart'}>
          {`${new Date(item.gmtCreate).getFullYear()}-${new Date(item.gmtCreate).getMonth() + 1}-${new Date(
            item.gmtCreate
          ).getDate()}`}
        </View>
      </View>
      <View className={'size'}>{item.skuName}</View>
      <View className={'content'}>{item.evaluateGoodsContent}</View>
    </View>
  );
};
