//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { THREE_DOTS } from '@/static';
import { useGoodSkuStore, popupImplement } from 'qj-mobile-store';
import { memo } from 'react';

const GoodSkuInfo = memo(() => {
  const { Text } = useComponent();
  const count = useGoodSkuStore((state: any) => state.count);
  const spec = useGoodSkuStore((state: any) => state.spec);
  return (
    <Text className={'label'}>
      已选择 数量: {count} 规格: {spec.toString()}
    </Text>
  );
});

export const GoodsDetailSku = ({ dispatchPageStore }: { dispatchPageStore: any }) => {
  const { View, Text } = useComponent();
  const { openPopup } = popupImplement(dispatchPageStore);

  return (
    <>
      <View className={'goodsDetail-size'} onClick={openPopup}>
        <Text className={'label'}>规格</Text>
        <View className={'info'}>
          <GoodSkuInfo />
          <img src={THREE_DOTS} alt="" className={'icon'} />
        </View>
      </View>
    </>
  );
};
