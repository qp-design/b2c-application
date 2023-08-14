import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useMySetting } from 'qj-mobile-store';
import { QjMobileIcon } from '@/common/icon';

export const MySettingJsx: React.FC = () => {
  const { View } = useComponent();

  const { mySettingGoBind, mySettingLogout } = useMySetting();

  return (
    <View className="mySetting">
      <View className="item" onClick={mySettingGoBind}>
        <View>绑定手机</View>
        <View>
          <QjMobileIcon value={'xiangyou1'} />
        </View>
      </View>

      <View className="btn" onClick={mySettingLogout}>
        退出登录
      </View>
    </View>
  );
};

export const MySetting = memo(MySettingJsx);
