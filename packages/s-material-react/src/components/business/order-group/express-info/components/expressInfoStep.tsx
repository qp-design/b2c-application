import { useComponent } from '@brushes/simulate-component';
import { get } from 'lodash-es';
import type { FC } from 'react';
export const ExpressInfoStep: FC<any> = ({ defaultValue, detail }) => {
  const { View } = useComponent();
  const message: string = get(detail, 'message', defaultValue.message);
  const list: Array<any> = get(detail, 'data', defaultValue.list);

  return (
    <View className="expressInfoStep">
      {message === 'ok' ? (
        list.map((item, index) => {
          return (
            <View key={index} className="step">
              <View className="time">{item.time}</View>
              <View>{item.context}</View>
            </View>
          );
        })
      ) : (
        <View className="noInfo">{message}</View>
      )}
    </View>
  );
};
