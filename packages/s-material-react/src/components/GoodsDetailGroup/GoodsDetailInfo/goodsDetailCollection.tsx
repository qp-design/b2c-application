import { QjMobileIcon } from '@/common/icon';
import { useComponent } from '@brushes/simulate-component';
import { isEmpty } from 'lodash-es';
import { useGoodCollection, CollectProps } from 'qj-mobile-store';

export const GoodsDetailCollection = (props: CollectProps) => {
  const { SmoothView, View } = useComponent();
  const { handleCollect, collection } = useGoodCollection(props);

  return (
    <View onClick={handleCollect}>
      {isEmpty(collection.dataObj) ? (
        <QjMobileIcon value="star-fill" style={{ fontSize: 20 }} />
      ) : (
        <QjMobileIcon value="star-fill" style={{ color: 'red', fontSize: 20 }} />
      )}
      <SmoothView className={'txt'}>{isEmpty(collection.dataObj) ? '收藏' : '已收藏'}</SmoothView>
    </View>
  );
};
