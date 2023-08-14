import React, { memo, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import classNames from 'classnames';
import { SEARCH } from '@/static';

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
  __pageConfig: { [v: string]: any };
}

const SearchJsx: React.FC<SearchType> = ({
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
  otherStyles = [],
  __pageConfig
}) => {
  console.log(36, __pageConfig);
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
      className={sticky ? 'boxpositon' : ''}
    >
      <View
        className={'components-search'}
        style={{
          backgroundColor,
          borderRadius: borderRadius ? '20px' : '',
          height: '32px',
          lineHeight: '32px',
          width: '100%',
          display: 'inline-block',
          textAlign: 'center'
        }}
      >
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
    </View>
  );
};

export const Search = memo(SearchJsx);
