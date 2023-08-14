import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';

const NoDataJsx = () => {
  const { View } = useComponent();
  return (
    <View className={'noData'}>
      <View className={'txt'}>暂无售后单</View>
    </View>
  );
};

export const NoData = memo(NoDataJsx);
