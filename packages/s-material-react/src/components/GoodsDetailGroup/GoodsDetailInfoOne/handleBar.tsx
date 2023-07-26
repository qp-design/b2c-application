//@ts-nocheck
import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useGoodCollection, CollectProps, useGoodsShare } from 'qj-mobile-store';
import { isEmpty } from 'lodash-es';

const HandleBarJsx: React.FC<any> = (props: CollectProps) => {
  const { collectionShow, shareShow } = props;
  const { View } = useComponent();
  const { handleCollect, collection } = useGoodCollection(props);

  const { handleShare } = useGoodsShare();

  return (
    <View className={'handleBar'}>
      {collectionShow ? (
        <View
          className={'collection'}
          onClick={handleCollect}
          style={{
            borderRight: shareShow ? '1px solid #ddd' : 'none'
          }}
        >
          {isEmpty(collection.dataObj) ? '收藏' : '已收藏'}
        </View>
      ) : null}
      {shareShow ? (
        <View className={'share'} onClick={handleShare}>
          分享
        </View>
      ) : null}
    </View>
  );
};

export const HandleBar = memo(HandleBarJsx);
