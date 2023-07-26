// @ts-nocheck
import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { Item } from './orderItem';
import { TabItemType } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';
import { useOrderList } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
import { NoData } from './NoData';
function OrderListItemJsx({
  item,
  refreshNum,
  borderRadius,
  orderSpacing
}: {
  item: TabItemType;
  refreshNum: number;
  borderRadius?: boolean;
  orderSpacing?: number;
}) {
  const { View, ScrollView, Loading } = useComponent();
  const { onScroll, data, loading, init, countdownCancel } = useOrderList<TabItemType>(item, refreshNum);

  return (
    <View className={'orderListItemWrap'}>
      <ScrollWrap id={'orderListItemWrap'}>
        <ScrollView onScroll={onScroll}>
          {data.length > 0 ? (
            <View>
              {data.map((item, index) => (
                <Item
                  init={init}
                  {...item}
                  key={index}
                  borderRadius={borderRadius}
                  orderSpacing={orderSpacing}
                  countdownCancel={countdownCancel}
                />
              ))}
              <View>{loading ? <Loading /> : null}</View>
            </View>
          ) : (
            <View className="nodata_img">
              <NoData />
              <View className="nodata-btn" onClick={() => navigatorHandler('goodList')}>
                前往购物
              </View>
            </View>
          )}
        </ScrollView>
      </ScrollWrap>
    </View>
  );
}

export const OrderListItem = memo(OrderListItemJsx);
