import React, { memo, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { ClassifyItemType } from '@/components';
import { useCube } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
import classNames from 'classnames';

const initialClassifyNavTwo = {
  defaultValue: [],
  selectClassifyNav: [],
  navRadius: '0',
  navBorderColor: '#FFFFFF',
  navBgColor: '#FFFFFF',
  navBoxShadow: false,
  fontSize: '',
  fontColor: '#000000',
  tagBgColor: '#FFFFFF',
  otherStyle: [],
  layout: 4,
  marginTop: 10,
  marginBottom: 10
};

const ClassifyNavTwoJsx: React.FC<typeof initialClassifyNavTwo> = ({
  defaultValue,
  selectClassifyNav,
  navRadius,
  navBorderColor,
  navBgColor,
  navBoxShadow,
  fontSize,
  fontColor,
  tagBgColor,
  otherStyle,
  layout,
  marginTop,
  marginBottom
}) => {
  const { View } = useComponent();
  const list = useCube<ClassifyItemType>(defaultValue, selectClassifyNav);
  const TextStyle = useMemo(() => {
    return classNames('classifyNav-two-item-title', ...otherStyle);
  }, [otherStyle]);
  return (
    <View
      className={'classifyNav-two'}
      style={{
        gridTemplateColumns: `repeat(${layout}, 1fr)`,
        border: `1px solid ${navBorderColor}`,
        borderRadius: navRadius,
        backgroundColor: navBgColor,
        boxShadow: navBoxShadow ? '0px 0px 20px 5px #EEE' : 'none',
        marginTop,
        marginBottom
      }}
    >
      {list.map((item, index) => {
        return (
          <View
            key={index}
            className={'classifyNav-two-item'}
            onClick={() => navigatorHandler(item.link?.value, item.link?.params)}
            style={{
              width: layout === 4 ? '74px' : '60px'
            }}
          >
            <View
              className={TextStyle}
              style={{
                fontSize,
                color: fontColor
              }}
            >
              {item.title}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export const ClassifyNavTwo = memo(ClassifyNavTwoJsx);
