import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useNoticeDetail } from 'qj-mobile-store';

const NoticeDetailJsx = ({ noticeId }: { noticeId: string }) => {
  const { View, Image } = useComponent();
  const { info } = useNoticeDetail(noticeId);

  return (
    <View className="noticeDetailContainer">
      <View className="title">{info.noticeTitle}</View>
      {info.noticePicurl ? <Image className="img" mode="widthFix" src={info.noticePicurl} /> : null}
      {info.noticePicurl1 ? <Image className="img" mode="widthFix" src={info.noticePicurl1} /> : null}
      {info.noticePicurl2 ? <Image className="img" mode="widthFix" src={info.noticePicurl2} /> : null}
      {info.noticePicurl3 ? <Image className="img" mode="widthFix" src={info.noticePicurl3} /> : null}
      <View className="content">{info.noticeContext}</View>
    </View>
  );
};

export const NoticeDetail = memo(NoticeDetailJsx);
