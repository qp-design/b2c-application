import React from 'react';
import { SliderInner } from '@/components/basic/slider-group/slider/slider';
import { useGoodDetail, useBanner } from 'qj-mobile-store';
import { useDataPageQuery } from '@/hooks/useDataPageQuery';

const GoodsDetailBannerInitial = {
  autoplay: false,
  vertical: false
};

export const GoodsDetailBanner: React.FC<typeof GoodsDetailBannerInitial & { [v: string]: any }> = ({
  autoplay,
  vertical,
  ...rest
}) => {
  const skuCode = useDataPageQuery(rest, 'skuNo');
  const { rsGoodsFileDomainList = [] } = useGoodDetail(skuCode);
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
