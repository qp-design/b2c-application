import { useComponent } from '@brushes/simulate-component';
import { CardJsx } from '@/common/card';
import { goodListMock } from 'qj-mobile-store';

export const ShopJsx = ({ goodsList }: { goodsList: Array<typeof goodListMock> }) => {
  const { View } = useComponent();

  console.dir(goodsList);
  return (
    <View className={'place-order-goods'}>
      {goodsList.map((item, ind) => (
        <CardJsx key={ind} {...item} />
      ))}
    </View>
  );
};
