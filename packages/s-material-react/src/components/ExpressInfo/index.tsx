import { ExpressInfoStep, ExpressInfoTop } from './components';
import { useComponent } from '@brushes/simulate-component';
import type { FC } from 'react';
import { memo } from 'react';
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
}
const ExpressInfoJsx: FC<ExpressInfoProps> = ({ code, defaultValue }) => {
  const { View } = useComponent();
  return (
    <View className="expressInfo">
      <ExpressInfoTop code={code} defaultValue={defaultValue} />
      <ExpressInfoStep code={code} defaultValue={defaultValue} />
    </View>
  );
};

export const ExpressInfo = memo(ExpressInfoJsx);
