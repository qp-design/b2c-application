import { useComponent } from '@brushes/simulate-component';
import { useMemo } from 'react';

export const GoodsDetailInfo = ({ goodsRemark }: { goodsRemark: string }) => {
  const { View } = useComponent();
  const goodsDetail = useMemo(() => {
    return goodsRemark
      .replace(/<style>[\s\S]*<\/style>/gi, '')
      .replace(/<img/gi, `<img class="mystyle" mode="widthFix"`)
      .replace(/<!--[\s\S]*-->/gi, '');
  }, [goodsRemark]);

  return (
    <View className={'goodsDetail-info'}>
      <div dangerouslySetInnerHTML={{ __html: goodsDetail || '' }}></div>
    </View>
  );
};
