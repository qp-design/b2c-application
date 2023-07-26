import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useCube } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
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
  const { View, Image } = useComponent();
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
            <Image
              className={`block ${outerShadow ? 'outer-shadow' : ''}`}
              key={index}
              mode={type === 1 ? 'widthFix' : 'scaleToFill'}
              src={item.imgUrl}
              style={{
                width: '100%',
                borderRadius: borderRadius + 'px'
              }}
              //@ts-ignore
              onClick={() => navigatorHandler(item.link?.value, item.link?.params)}
            />
          );
          // return type === 1 ? (
          //     <Image
          //         key={index}
          //         mode={'widthFix'}
          //         src={item.imgUrl}
          //         style={{
          //             width: '100%',
          //             borderRadius: borderRadius + 'px'
          //         }}
          //         onClick={navigatorHandler.bind(null, item.link?.value)}
          //     />
          // ) : (
          //     <View
          //         className={'block'}
          //         style={{
          //             backgroundImage: `url(${item.imgUrl})`,
          //             width: '100%',
          //             borderRadius: borderRadius + 'px'
          //         }}
          //         key={index}
          //         onClick={navigatorHandler.bind(null, item.link?.value)}
          //     />
          // );
        })}
      </View>
    </View>
  );
};

export const Cube = memo(CubeJsx);
