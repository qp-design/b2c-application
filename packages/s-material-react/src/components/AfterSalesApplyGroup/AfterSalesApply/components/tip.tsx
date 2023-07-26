import { useComponent } from '@brushes/simulate-component';
import { memo, useContext } from 'react';
import { MCAfterSalesApply } from '../context';

const TipJsx = () => {
  const { View } = useComponent();
  const { tip } = useContext(MCAfterSalesApply);
  return <View className={'afterSalesApplyTip'}>{tip}</View>;
};

export const Tip = memo(TipJsx);
