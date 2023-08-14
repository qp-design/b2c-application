import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { OrderListItem } from './components';
import { orderStatusList } from 'qj-mobile-store';

interface OrderListType {
  borderRadius?: boolean;
  refreshNum?: number;
  indexId?: number;
  orderSpacing?: number;
}

const OrderListJsx: React.FC<OrderListType> = ({
  refreshNum = 0,
  indexId = 0,
  borderRadius = false,
  orderSpacing = 12
}) => {
  const { View, Tabs } = useComponent();
  return (
    <View className={'order-container'}>
      <Tabs
        defaultIndex={+indexId}
        tabs={orderStatusList}
        render={(item: any) => (
          <View className={'orderList'}>
            <OrderListItem
              item={item}
              orderSpacing={orderSpacing}
              refreshNum={refreshNum}
              borderRadius={borderRadius}
            />
          </View>
        )}
      />
    </View>
  );
};

export const OrderList = memo(OrderListJsx);
