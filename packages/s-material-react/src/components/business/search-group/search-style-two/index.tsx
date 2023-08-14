import React, { memo, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';

import { SEARCH } from '@/static';
import classNames from 'classnames';

interface SearchType {
  value: string;
  iconShow: boolean;
  fontColor: string;
  backgroundColor: string;
  borderRadius: boolean;
  paddingLeft: number;
  paddingRight: number;
  sticky: boolean;
  fontsize: number;
  paddings: number;
  otherStyles: Array<string>;
}

const SearchTwoJsx: React.FC<SearchType> = ({
  value,
  iconShow,
  fontColor,
  backgroundColor,
  borderRadius,
  paddingLeft,
  paddingRight,
  sticky,
  fontsize,
  paddings,
  otherStyles = ['mockWeight', 'mockItalic']
}) => {
  const { View, Image } = useComponent();
  const otherStyle = useMemo(() => {
    return classNames('txt', ...otherStyles);
  }, [otherStyles]);
  return (
    <View
      onClick={() => navigatorHandler('search')}
      style={{
        paddingTop: paddings,
        paddingBottom: paddings,
        paddingLeft,
        paddingRight
      }}
      className={sticky ? 'boxPosition' : ''}
    >
      <View
        className={'components-search'}
        style={{
          border: `1px solid ${backgroundColor}`,
          borderRadius: borderRadius ? '20px' : '',
          height: '32px',
          lineHeight: '32px',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          backgroundColor: '#ffffff'
        }}
      >
        <View style={{ width: '80%' }}>
          <Image
            src={SEARCH}
            alt=""
            // mode={'fill'}
            style={{
              height: '16px',
              width: '16px',
              display: iconShow ? 'inline-block' : 'none',
              verticalAlign: 'top',
              marginTop: '8px',
              marginRight: '10px'
            }}
          />
          <View
            className={otherStyle}
            style={{
              color: fontColor,
              display: 'inline-block',
              fontSize: fontsize
            }}
          >
            {value}
          </View>
        </View>
        <View
          className={['seachBtn', borderRadius ? 'btnBorderRadius' : ''].join(' ')}
          style={{ fontSize: fontsize, backgroundColor, width: '20%', color: fontColor }}
        >
          搜索
        </View>
      </View>
    </View>
  );
};

export const SearchStyleTwo = memo(SearchTwoJsx);
