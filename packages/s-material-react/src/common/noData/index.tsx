import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { IconMobile } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';

const NoDataJsx = ({
  url,
  title,
  subTitle,
  link,
  style
}: {
  url?: string;
  title?: string;
  subTitle?: string;
  link?: string;
  style?: any;
}) => {
  const { View, Image } = useComponent();
  return (
    <View className="noData" style={style}>
      <View className="content">
        <Image className="img" src={url} />
        <View className="title">{title}</View>
        <View className="subTitle">{subTitle}</View>
        {link ? (
          <View className="link" onClick={() => navigatorHandler(link)}>
            去看看
            <IconMobile value={'xiangyou1'} />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export const NoData = memo(NoDataJsx);
