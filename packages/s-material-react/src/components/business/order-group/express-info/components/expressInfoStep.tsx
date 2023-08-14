import { useComponent } from '@brushes/simulate-component';
import { useExpressInfo } from 'qj-mobile-store';
import { get } from 'lodash-es';
import type { FC } from 'react';
import type { ExpressInfoProps } from '../index';
interface ExpressInfoStepProps extends ExpressInfoProps {}
export const ExpressInfoStep: FC<ExpressInfoStepProps> = ({ code, defaultValue }) => {
  const { detail } = useExpressInfo(code);
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
