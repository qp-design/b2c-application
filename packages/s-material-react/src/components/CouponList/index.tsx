import { memo, type FC } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useCouponList } from 'qj-mobile-store';
import { CouponItem } from './components';
import { ScrollWrap } from '@/common/scrollWrap';

export interface CouponListProps {
  backgroundColor: string;
  color: string;
  queue: string;
  paddingTop: number;
  paddingBottom: number;
}
const CouponListJsx: FC<CouponListProps> = ({ backgroundColor, color, paddingTop, paddingBottom, queue }) => {
  const { View, Text, ScrollView } = useComponent();
  const { coe, getList, config, switchTab, list = [] } = useCouponList();

  return (
    <View className={'couponList'}>
      <View className={'couponTab'}>
        {config.current.map((item, index) => {
          return (
            <View
              className={`couponTabItem ${coe.current === index ? 'active' : ''}`}
              key={item.id}
              onClick={() => switchTab(index)}
            >
              {item.label}
              <Text className={'icon'}></Text>
            </View>
          );
        })}
      </View>
      <ScrollWrap id={'couponTab'} bottomHeight={'60'}>
        <ScrollView onScroll={getList}>
          <View className={'couponListContent'} style={{ paddingTop, paddingBottom }}>
            <CouponItem
              backgroundColor={backgroundColor}
              color={color}
              queue={queue}
              list={list}
              coe={coe}
              config={config}
            />
          </View>
        </ScrollView>
      </ScrollWrap>
    </View>
  );
};

export const CouponList = memo(CouponListJsx);
