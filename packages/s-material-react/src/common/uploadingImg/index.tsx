import { useComponent } from '@brushes/simulate-component';
import { memo } from 'react';
import { UploadImg } from '@/common/uploading';
const uploadingImgJsx = () => {
  const { View } = useComponent();
  return (
    <View className="uploadingPage">
      <View className="uploadingContent">补充描述和凭证</View>
      <View className="uploadingText">
        {/* <Textarea placeholder='补充描述，有助于商家更好的处理售后问题' /> */}
        补充描述，有助于商家更好的处理售后问题
        <View className="uploadImg">
          <UploadImg />
        </View>
      </View>
    </View>
  );
};
export const UploadingImg = memo(uploadingImgJsx);
