import React from 'react';
import { SliderInner } from '@/components/basic/slider-group/slider/slider';
import { useGoodDetail, useBanner } from 'qj-mobile-store';

const GoodsDetailBannerInitial = {
  autoplay: false,
  vertical: false,
  skuCode: ''
};

export const GoodsDetailBanner: React.FC<typeof GoodsDetailBannerInitial & { [v: string]: any }> = ({
  autoplay,
  vertical,
  skuCode,
  scene
}) => {
  const { rsGoodsFileDomainList = [] } = useGoodDetail(skuCode, scene);

  const banner = useBanner(rsGoodsFileDomainList);
  return (
    <SliderInner
      selectImg={banner}
      type={1}
      autoplay={autoplay}
      vertical={vertical}
      imgHeight={{ height: 375, width: 375 }}
    />
  );
};
