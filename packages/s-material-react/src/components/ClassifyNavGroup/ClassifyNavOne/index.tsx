import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useCube } from 'qj-mobile-store';
import { ClassifyItemType } from '@/components';
import { navigatorHandler } from '@brushes/utils';

const initialClassifyNavOne = {
  defaultValue: [],
  selectClassifyNav: [],
  navRadius: '',
  navBorderColor: '',
  navBgColor: '',
  navBoxShadow: false,
  imgRadius: '',
  imgBoxShadow: false,
  layout: 4,
  marginTop: 10,
  marginBottom: 10
};

export const ClassifyNavOneJsx: React.FC<typeof initialClassifyNavOne> = ({
  defaultValue,
  selectClassifyNav,
  navRadius,
  navBorderColor,
  navBgColor,
  navBoxShadow,
  imgRadius,
  imgBoxShadow,
  layout,
  marginTop,
  marginBottom
}) => {
  const { View } = useComponent();
  const list = useCube<ClassifyItemType>(defaultValue, selectClassifyNav);

  return (
    <View
      className={'classifyNav-one'}
      style={{
        gridTemplateColumns: `repeat(${layout}, 1fr)`,
        borderRadius: navRadius,
        border: `1px solid ${navBorderColor}`,
        backgroundColor: navBgColor,
        boxShadow: navBoxShadow ? '0px 0px 20px 10px #ddd' : 'none',
        marginTop,
        marginBottom
      }}
    >
      {list.map((item, index) => {
        return (
          <View
            className={'classifyNav-item'}
            key={index}
            onClick={() => navigatorHandler(item.link?.value, item.link?.params)}
          >
            <img
              src={item.imgUrl}
              alt=""
              className={'classifyNav-item-img'}
              style={{
                borderRadius: imgRadius,
                boxShadow: imgBoxShadow ? '0px 0px 20px 5px #EEE' : 'none'
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export const ClassifyNavOne = memo(ClassifyNavOneJsx);
