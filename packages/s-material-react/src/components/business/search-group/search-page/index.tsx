//@ts-nocheck
import { FC, memo, useMemo, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import {
  navigatorHandler,
  navigatorBackImpl,
  useImmutableCallback,
  getEnv,
  getTaro,
  getStorage,
  setStorage
} from '@brushes/utils';
import { SEARCH } from '@/static';
import { QjMobileIcon } from '@/common/icon';

interface SearchPageType {
  placeholder: number;
  placeholderText: string;
  history: number;
  historyText: string;
  paddingTop: number;
  paddingBottom: number;
}

const SearchPageJsx: FC<SearchPageType> = ({
  placeholder,
  placeholderText,
  history,
  historyText,
  paddingBottom,
  paddingTop
}) => {
  const flag = useMemo(() => getEnv(), []);
  const { View, Text, Input } = useComponent();
  const [historyItem, setHistory] = useState(() => {
    return getStorage('history') || [];
  });
  const searchGoodsImpl = useImmutableCallback(async (e: any) => {
    if (!flag) return;
    setHistory((prevState) => {
      if (!prevState.includes(e.detail.value) && e.detail.value) {
        const data = prevState.concat(e.detail.value);
        setStorage('history', data);
        return data;
      }
      return prevState;
    });
    navigator(e.detail.value);
  });

  const navigator = useImmutableCallback((value: string) => {
    navigatorHandler('goodList', {
      searchParam: value
    });
  });

  const removeHistory = async () => {
    const Taro = await getTaro();
    Taro.removeStorageSync('history');
    setHistory([]);
  };
  return (
    <View
      className={'searchPage'}
      style={{
        paddingTop,
        paddingBottom
      }}
    >
      <View className={'search-title'}>
        <img src={SEARCH} alt="" />
        <Input
          confirm-type="search"
          type="text"
          className={'content'}
          onConfirm={searchGoodsImpl}
          {...(placeholder ? { placeholder: placeholderText } : {})}
        />
        <Text className={'btn'} onClick={() => navigatorBackImpl()}>
          取消
        </Text>
      </View>

      {history ? (
        <View className={'historyWrap'}>
          <View className={'title'}>
            <View className={'label'}>
              <View className={'icon'}></View>
              {historyText}
            </View>
            <QjMobileIcon
              onClick={removeHistory}
              value={'shanchu'}
              style={{ fontSize: 18, color: '#222', lineHeight: '61px', cursor: 'pointer' }}
            />
          </View>
          <View className={'content'}>
            {historyItem.map((item, index) => {
              return (
                <View onClick={() => navigator(item)} key={index} className={'historyItem'}>
                  {item}
                </View>
              );
            })}
          </View>
        </View>
      ) : null}
    </View>
  );
};

export const SearchPage = memo(SearchPageJsx);
