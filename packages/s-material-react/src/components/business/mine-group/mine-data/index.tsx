import React, { memo, useEffect, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler, getStorage } from '@brushes/utils';
import { useService } from '@/utils';

const MineDataJsxInitial = {
  avatarStyle: 1,
  userNickname: '用户名',
  userAvatar: '',
  paddingTop: 0,
  paddingBottom: 0,
  refreshNum: 0
};

const MineDataJsx: React.FC<typeof MineDataJsxInitial> = ({
  avatarStyle,
  paddingTop,
  paddingBottom,
  userAvatar,
  userNickname,
  refreshNum
}) => {
  const { View, Text, IconMobile, Image } = useComponent();
  const { servicePopup } = useService();
  const [name, setName] = useState(userNickname);
  const [avatar, setAvatar] = useState(userAvatar);

  useEffect(() => {
    setName(getStorage('userNickname'));
    setAvatar(getStorage('userAvatar'));
  }, [refreshNum]);

  return (
    <View
      className={'mineData'}
      style={{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`
      }}
    >
      <View className={'topBoard'}>
        <IconMobile value={'bianzu'} onClick={() => navigatorHandler('/account/setting/index')} />
        <IconMobile value={'kehufuwukefu'} onClick={servicePopup} />
      </View>
      <View className={'userSetting'} onClick={() => navigatorHandler('/account/setting/index')}>
        <View className={'lPart'}>
          <Text className={'name'}>{name || '用户名称'}</Text>
          <View className={'link'} style={{ paddingTop: '10px' }}>
            {'编辑个人资料 >'}
          </View>
        </View>
        <Image src={avatar} alt="" className={'avatar'} style={{ borderRadius: avatarStyle ? '50%' : '2px' }} />
      </View>
    </View>
  );
};

export const MineData = memo(MineDataJsx);
