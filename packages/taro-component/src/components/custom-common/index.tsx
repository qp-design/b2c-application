import { useState } from 'react';
import { CoverView, CoverImage } from '@tarojs/components';
import { useMenu } from '@brushes/taro-hooks';
import { navigatorHandler } from '@brushes/utils';
import Taro from '@tarojs/taro';

const TabBar = ({ selectedColor, color }: { selectedColor: string; color: string }) => {
  const { path } = Taro.useRouter();
  const menuList = useMenu();

  const switchTab = (menuOpcode: string) => {
    navigatorHandler(menuOpcode);
  };

  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-border"></CoverView>
      {menuList.map((item, index) => {
        return (
          <CoverView key={index} className="tab-bar-item" onClick={() => switchTab(item.menuOpcode)}>
            <CoverImage className="tab-bar-item-img" src={path.includes(item.pagePath) ? item.selectedIconPath : item.iconPath} />
            <CoverView className="tab-bar-item-view" style={{ color: path.includes(item.pagePath) ? selectedColor : color }}>
              {item.text}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default TabBar;
