import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useCube } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
import {useFullPath} from '@/hooks';

export interface ClassifyItemType {
  imgUrl: string;
  title: string;
  link?: any;
}

interface ClassifyNavType {
  defaultValue: Array<ClassifyItemType>;
  borderRadius: number;
  paddingTop: number;
  paddingBottom: number;
  selectClassifyNav: Array<ClassifyItemType>;
}

const ImgJsx = ({src, borderRadius}: {src: string; borderRadius: number}) => {
  const { Image } = useComponent();
  const fullPath = useFullPath(src)
  return (
    <Image
      src={fullPath}
      alt=""
      className={'img'}
      style={{
        borderRadius: `${borderRadius}px`
      }}
    />
  )
}
const ClassifyNavJsx: React.FC<ClassifyNavType> = ({
  defaultValue,
  borderRadius,
  paddingTop,
  paddingBottom,
  selectClassifyNav
}) => {
  const { View, Text } = useComponent();
  const list = useCube<ClassifyItemType>(defaultValue, selectClassifyNav);

  return (
    <View style={{ paddingTop, paddingBottom }}>
      <View className={'classifyNav'}>
        {list.map((item, index) => {
          return (
            <View
              className={'classifyNavItem'}
              key={index}
              onClick={() => navigatorHandler(item.link?.value, item.link?.params)}
            >
              <ImgJsx src={item.imgUrl} borderRadius={borderRadius} />
              <Text className={'label'}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export const ClassifyNav = memo(ClassifyNavJsx);
