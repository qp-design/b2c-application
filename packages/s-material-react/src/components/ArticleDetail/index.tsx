//@ts-nocheck
import { memo } from 'react';
import { useArticleDetail } from 'qj-mobile-store';
import { useComponent } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';

const ArticleDetailJsx = ({ doclistId = 2031 }: { doclistId: number }) => {
  const { info } = useArticleDetail(doclistId);
  const { View, ScrollView } = useComponent();

  const { doclistContent, doclistTitle, doclistTitle4 } = info;

  return (
    <View className={'articleDetail'}>
      <ScrollWrap id="a">
        <ScrollView>
          <View className={'title'}>{doclistTitle}</View>
          <View className={'author'}>{doclistTitle4}</View>
          <div className={'content'} dangerouslySetInnerHTML={{ __html: doclistContent || '' }} />
        </ScrollView>
      </ScrollWrap>
    </View>
  );
};

export const ArticleDetail = memo(ArticleDetailJsx);
