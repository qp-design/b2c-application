import { useComponent } from '@brushes/simulate-component';
import React, { memo } from 'react';
import { ClassifyItemType } from '@/components';
import { useCube } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';

const initialClassifyNavThree = {
  defaultValue: [],
  selectClassifyNav: [],
  navRadius: '0',
  navBorderColor: '#FFFFFF',
  navBgColor: '#FFFFFF',
  navBoxShadow: false,
  imgRadius: '0',
  imgBoxShadow: false,
  fontSize: '',
  fontColor: '#000000',
  tagBgColor: '#FFFFFF',
  otherStyle: [],
  layout: 4,
  marginTop: 10,
  marginBottom: 10
};

const ClassifyNavThreeJsx: React.FC<typeof initialClassifyNavThree> = ({
  defaultValue,
  selectClassifyNav,
  navRadius,
  navBorderColor,
  navBgColor,
  navBoxShadow,
  imgRadius,
  imgBoxShadow,
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

  return (
    <View
      className={'classifyNav-three'}
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
            className={'classifyNav-three-item'}
            onClick={() => navigatorHandler(item.link?.value, item.link?.params)}
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              borderRadius: imgRadius,
              boxShadow: imgBoxShadow ? '0px 0px 20px 5px #EEE' : 'none',
              width: layout === 4 ? '74px' : '60px',
              height: layout === 4 ? '74px' : '60px'
            }}
          >
            <View
              className={'classifyNav-three-item-tag'}
              style={{
                backgroundColor: tagBgColor
              }}
            >
              <View
                className={['classifyNav-three-item-txt', ...otherStyle].join(' ')}
                style={{
                  fontSize,
                  color: fontColor
                }}
              >
                {item.title}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export const ClassifyNavThree = memo(ClassifyNavThreeJsx);