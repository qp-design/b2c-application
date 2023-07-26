import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { RefundOption } from '@/common/refundOption';
import { RefundGoodsDetail } from '@/common/refundGoodsDetail';
// import { CardJsx } from '@/common/card';
// interface refundType_Type {
//     dataPic: string;
//     goodsName: string;
//     dataBmoney?: number;
//     goodsCamount: number;
//     // contractGoodsId: number
//     pricesetNprice?: number;
//     skuName?: string;
//     skuCode?: string;
// }
const refundTypeJsx = (props: any) => {
  console.log('退款类型', props);

  const { View } = useComponent();
  return (
    <View className={'refundPage'}>
      <View className={'goodsMsg'}>
        <RefundGoodsDetail title="退款商品" {...props} />
      </View>
      <View className={'refundOption'}>
        <RefundOption title="选择售后类型" />
      </View>
    </View>
  );
};
export const RefundAfter = memo(refundTypeJsx);
