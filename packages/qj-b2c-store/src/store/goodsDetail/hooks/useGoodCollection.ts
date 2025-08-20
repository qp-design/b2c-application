import { checkCollectExit, deleteCollectByCode, queryCollectPage, saveCollect } from 'qj-b2c-api';
import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash-es';
import { getTaro } from '@brushes/utils';
import { removeRequestCacheByKey } from '@brushes/optimize';

interface checkCollectionType {
  collectType: number;
  collectOpcode: string;
}

interface collectParamsType {
  collectType: number;
  collectOpcode: string;
  collectOppic: string;
  collectOpcont: string;
  collectOpnum: number;
  goodsOrigin: number;
}

export interface CollectProps {
  skuCode: string;
  dataPic: string;
  goodsName: string;
  pricesetNprice: number;
}

const collectionIntial = {
  dataObj: ''
};

export function useGoodCollection({ skuCode, dataPic, goodsName, pricesetNprice }: CollectProps) {
  const [collection, setCollection] = useState(collectionIntial);

  useEffect(() => {
    checkCollection();
  }, []);

  const checkCollection = async () => {
    const checkCollectionParams: checkCollectionType = {
      collectType: 0,
      collectOpcode: skuCode
    };
    try {
      const result = await checkCollectExit(checkCollectionParams);
      setCollection(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveCollect = async () => {
    const saveCollectParmas: collectParamsType = {
      collectType: 0,
      collectOpcode: skuCode,
      collectOppic: dataPic,
      collectOpcont: goodsName,
      collectOpnum: pricesetNprice,
      goodsOrigin: 0
    };
    return await saveCollect(saveCollectParmas);
  };

  const handleDeleteCollectByCode = async () => {
    const deleteCollectByCodeParams: any = {
      collectType: 0,
      collectCode: collection.dataObj || ''
    };
    return await deleteCollectByCode(deleteCollectByCodeParams);
  };

  const handleCollect = async () => {
    let data = collectionIntial;

    if (isEmpty(collection.dataObj)) {
      data = await handleSaveCollect();
      showTip('收藏成功');
    } else {
      data = await handleDeleteCollectByCode();
      showTip('取消收藏成功');
    }
    setCollection(data);
    // 成功后 清除收藏列表缓存
    removeRequestCacheByKey(queryCollectPage);
  };

  const showTip = (title: string, icon = 'success', duration = 1000) => {
    const Taro = getTaro();
    Taro.showToast({
      title,
      icon,
      duration
    });
  };

  return {
    handleCollect,
    collection
  };
}
