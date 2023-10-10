import React, { memo, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import classNames from 'classnames';
import { SliderInner } from '@/components/basic/slider-group/slider/slider';

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
  paddingTB?: number;
  paddingLR?: number;
  fontsize?: number;
  textAlign?: string;
  fontColor?: string;
  backGroundColor?: string;
  otherStyles?: Array<string>;
  ImgShadow?: boolean;
  Position?: string;
  value?: string;
}

const SwiperJsx: React.FC<SwiperType> = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  defaultValue = [],
  type,
  autoplay,
  autoplayInterval,
  direction,
  loop,
  selectImg,
  vertical,
  imgHeight,
  paddingTB = 0,
  paddingLR = 0,
  fontsize = 16,
  textAlign = 'center',
  fontColor = '#000000',
  backGroundColor = '#ffffff',
  otherStyles = [],
  ImgShadow = false,
  Position = 'top'
}) => {
  console.log(62, loop);
  const { View } = useComponent();
  const classWrap = useMemo(() => {
    return classNames(
      'silder-title',
      {
        'silder-tops1': Position === 'top' && direction === 'horizontal',
        'silder-bottoms': Position === 'bottom' && direction === 'horizontal',
        'silder-bottoms1': direction === 'vertical' && Position === 'bottom',
        'silder-tops': direction === 'vertical' && Position === 'top'
      },
      ...otherStyles
    );
  }, [otherStyles, Position]);

  return (
    <View
      style={{
        padding: `${paddingTB}px ${paddingLR}px`
      }}
    >
      <SliderInner
        {...{
          Position,
          defaultValue,
          type,
          autoplay,
          autoplayInterval,
          direction,
          loop,
          selectImg,
          vertical,
          imgHeight,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          fontsize,
          textAlign,
          fontColor,
          backGroundColor
        }}
        className={classNames({ 'outer-shadow': ImgShadow })}
        className1={classWrap}
      />
    </View>
  );
};

export const Slider = memo(SwiperJsx);
