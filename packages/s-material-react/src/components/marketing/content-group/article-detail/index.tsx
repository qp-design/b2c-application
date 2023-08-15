import React, { memo } from 'react';
import { useArticleDetail } from 'qj-mobile-store';
import { useComponent } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';

const initialArticleDetail = {
  doclistId: 2031,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10
};

const ArticleDetailJsx: React.FC<typeof initialArticleDetail> = ({
  doclistId,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
}) => {
  const { info } = useArticleDetail(doclistId);
  const { View, ScrollView } = useComponent();

  const { doclistContent, doclistTitle, doclistTitle4 } = info;

  return (
    <View
      className={'articleDetail'}
      style={{
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
      }}
    >
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
