import { ExpressInfoStep, ExpressInfoTop } from './components';
import { useComponent } from '@brushes/simulate-component';
import type { FC } from 'react';
import { memo } from 'react';
import { useExpressInfo } from 'qj-mobile-store';
export interface ExpressInfoProps {
  defaultValue: {
    message: string;
    list: Array<{ time: string; context: string }>;
    dataPic: string;
    count: number;
    expressName: string;
    packageBillno: string;
    result: string;
  };
  code: string;
  platform: string;
}
const ExpressInfoJsx: FC<ExpressInfoProps> = ({ code, defaultValue }) => {
  const { View } = useComponent();
  const { info, detail, stateObj } = useExpressInfo(code);
  return (
    <View className="expressInfo">
      <ExpressInfoTop info={info} detail={detail} stateObj={stateObj} defaultValue={defaultValue} />
      <ExpressInfoStep detail={detail} defaultValue={defaultValue} />
    </View>
  );
};

export const ExpressInfo = memo(ExpressInfoJsx);
