import {useEffect, useState} from "react";
import {View, Button, Image, Input, Form, Label} from '@tarojs/components';
import Taro from "@tarojs/taro";
import { getPagesRefreshStore, updatePagesRefreshStore } from '@brushes/utils';

import './index.scss'

const Index = () => {
  const imgUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
  const [avatar, setAvatar] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    setAvatar( Taro.getStorageSync('userAvatar') || imgUrl );
    setNickname(Taro.getStorageSync('userNickname') || '');
  }, [])


  const chooseAvatar = (obj) => {
    const val = obj.detail.avatarUrl;
    Taro.setStorageSync('userAvatar', val);
    setAvatar(val);
  }

  const submit = e => {
    const val = e.detail.value.nickName;
    Taro.setStorageSync('userNickname', val);
    setNickname(val);
    const { MineData = 0 } = getPagesRefreshStore();
    updatePagesRefreshStore({
      MineData: MineData + 1
    });
    Taro.navigateBack({
      delta: 1
    });
  }

  return (
    <View className='setting'>
      <Button openType='chooseAvatar' onChooseAvatar={chooseAvatar} className='avatarWrap'>
        <Image src={avatar} className='avatar' />
      </Button>
        <Form onSubmit={submit}>
          <View className='nickNameWrap'>
            <Label className='txt'>昵称：</Label>
            <Input type='nickname' value={nickname} name='nickName' className='nickName' placeholder='请填写昵称' />
          </View>
          <Button formType='submit' className='btn'>确认</Button>
        </Form>
    </View>
  )
}


export default Index;
