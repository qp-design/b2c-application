import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { RefundMsg } from '@/common/refundMsg';
import { UploadingImg } from '@/common/uploadingImg';
const refundOnlyJsx = () => {
  const { View } = useComponent();
  return (
    <View className="refundOnlyPage">
      <View className="refundTip">请与商家协商，确认达成一致后填写协商好的退款金额</View>
      <View className="refundMsg_style">
        <RefundMsg />
      </View>
      <View className="refundUploading">
        <UploadingImg />
      </View>
    </View>
  );
};
export const RefundOnly = memo(refundOnlyJsx);
