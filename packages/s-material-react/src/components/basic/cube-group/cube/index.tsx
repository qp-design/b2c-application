import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useCube } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
import {useFullPath} from '@/hooks';
interface ImgType {
  imgUrl: string;
  link: string;
}

interface CubeType {
  defaultValue: Array<ImgType>;
  type: number;
  borderRadius: number;
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
  picGap: number;
  xGap: number;
  paddingBottom: number;
  outerShadow: boolean;
  selectImg: Array<ImgType>;
}

const ItemJsx = ({outerShadow, type, item, borderRadius }: {borderRadius: number; outerShadow: boolean; type: number; item: any}) => {
  const { Image } = useComponent();
  const fullPath = useFullPath(item.imgUrl)
  return (
    <Image
      className={`block ${outerShadow ? 'outer-shadow' : ''}`}
      mode={type === 1 ? 'widthFix' : 'scaleToFill'}
      src={fullPath}
      style={{
        width: '100%',
        borderRadius: borderRadius + 'px'
      }}
      //@ts-ignore
      onClick={() => navigatorHandler(item.link?.value, item.link?.params)}
    />
  )
};

const CubeJsx: React.FC<CubeType> = ({
  defaultValue,
  type,
  borderRadius,
  outerShadow,
  paddingRight,
  paddingLeft,
  picGap,
  xGap,
  paddingTop,
  paddingBottom,
  selectImg
}) => {
  const { View } = useComponent();
  const list = useCube(defaultValue, selectImg);
  return (
    <View
      style={{
        paddingTop,
        paddingBottom,
        paddingLeft: xGap,
        paddingRight: xGap
      }}
    >
      <View className={`cube-type${type}`} style={{ paddingLeft, paddingRight, gap: picGap }}>
        {list.map((item, index) => {
          return (
            <ItemJsx key={index} borderRadius={borderRadius} item={item} outerShadow={outerShadow} type={type} />
          );
        })}
      </View>
    </View>
  );
};

export const Cube = memo(CubeJsx);
