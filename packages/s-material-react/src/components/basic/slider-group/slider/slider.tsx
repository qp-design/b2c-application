//@ts-nocheck
import React, { memo, useState, useEffect, useMemo } from 'react';
import { useComponent, useImageHeight } from '@brushes/simulate-component';
import { Items } from './item';
import { useCube } from 'qj-mobile-store';
import classNames from 'classnames';

export interface itemType {
  imgUrl: string;
  link: string;
  title?: string;
}

interface SwiperType {
  defaultValue?: Array<itemType>;
  type?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  direction?: 'horizontal' | 'vertical';
  loop?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  selectImg?: Array<itemType>;
  imgHeight?: { height: number; width: number };
  vertical?: boolean;
  className?: string;
  className1?: string;
  Position?: string;
  fontsize?: number;
  textAlign?: string;
  fontColor?: string;
  backGroundColor?: string;
}

const SwiperJsx: React.FC<SwiperType> = ({
  Position,
  className = '',
  className1 = '',
  defaultValue = [],
  type,
  autoplay,
  autoplayInterval,
  direction,
  loop,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  selectImg,
  imgHeight,
  fontsize = 16,
  textAlign = 'center',
  fontColor = '#000000',
  backGroundColor = '#ffffff'
}) => {
  const classNames1 = useMemo(() => {
    return classNames({
      paddingbtm: Position !== 'none',
      imgHeights: Position === 'bottom' && direction === 'horizontal'
    });
  });
  const { SmoothSwiper, View } = useComponent();
  const list = useCube(defaultValue, selectImg || []);

  console.log(67, list, selectImg);
  const domContext = (item: itemType) => {
    return (
      <View
        className={className1}
        style={{
          fontSize: fontsize,
          zIndex: 99,
          justifyContent: textAlign === 'left' ? 'flex-start' : textAlign === 'center' ? 'center' : 'flex-end',
          color: fontColor,
          backgroundColor: backGroundColor
        }}
      >
        {item.title}
      </View>
    );
  };
  return (
    <View
      className={className}
      style={{
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
      }}
    >
      <SmoothSwiper<itemType>
        imgHeight={imgHeight}
        data={list}
        className={classNames1}
        type={type}
        autoplay={autoplay}
        autoplayInterval={autoplayInterval}
        direction={direction}
        loop={loop}
        interval={5000}
        vertical={direction === 'vertical'}
        render={(item: itemType) => {
          return (
            <>
              {Position === 'top' || Position === 'bottom' ? domContext(item) : null}
              <Items item={item} position={Position} direction={direction} />
            </>
          );
        }}
      />
    </View>
  );
};

export const SliderInner = memo(SwiperJsx);
