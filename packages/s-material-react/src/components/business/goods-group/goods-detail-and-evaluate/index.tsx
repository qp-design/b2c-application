//@ts-nocheck
import React, { useMemo } from 'react';
import { GoodsDetailEvaluate } from './goodsDetailEvaluate';
import { GoodsDetailInfo } from './goodsDetailInfo';
import { useComponent } from '@brushes/simulate-component';
import { Dispatch, Fragment, useState } from 'react';
import { useGoodDetail, useEvaluate } from 'qj-mobile-store';

const GoodsDetailAndEvaluateInitial = {
  evaluateShow: true,
  evaluateImgShow: true,
  evaluateImg: 2,
  skuCode: '',
  scene: '',
};

interface TabsProps {
  tabActive: number;
  setTabActive: Dispatch<number>;
  evaluateShow?: boolean;
  evaluateImgShow?: boolean;
  evaluateImg?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabActive, setTabActive, evaluateShow, evaluateImgShow, evaluateImg }) => {
  const { Text } = useComponent();
  const config = useMemo(() => {
    return evaluateImgShow
      ? [
          {
            title: '商品详情',
            id: '1'
          },
          {
            title: '评价',
            id: '2'
          }
        ]
      : [
          {
            title: '商品详情',
            id: '1'
          }
        ];
  }, [evaluateShow]);

  return (
    <>
      {config.map((item, index) => (
        <Fragment key={index}>
          <Text className={`tabsItem ${tabActive === index ? 'active' : ''}`} onClick={() => setTabActive(index)}>
            {item.title}
            <Text className={'line'}></Text>
          </Text>
        </Fragment>
      ))}
    </>
  );
};
export const GoodsDetailAndEvaluate: React.FC<typeof GoodsDetailAndEvaluateInitial> = ({
  evaluateShow,
  evaluateImgShow,
  evaluateImg,
  skuCode,
  scene
}) => {
  const { View } = useComponent();
  const [tabActive, setTabActive] = useState(0);
  const { goodsRemark, goodsCode } = useGoodDetail(skuCode, scene);
  const evaluate = useEvaluate(goodsCode);
  return (
    <View className={'goodsDetailTab'}>
      <View className={'tabs'}>
        <Tabs
          tabActive={tabActive}
          setTabActive={setTabActive}
          evaluateShow={evaluateShow}
          evaluateImgShow={evaluateImgShow}
          evaluateImg={evaluateImg}
        />
      </View>
      <View className={'group'}>
        {tabActive === 0 ? (
          <GoodsDetailInfo goodsRemark={goodsRemark} />
        ) : (
          <GoodsDetailEvaluate evaluateArr={evaluate} evaluateImgShow={evaluateImgShow} evaluateImg={evaluateImg} />
        )}
      </View>
    </View>
  );
};
