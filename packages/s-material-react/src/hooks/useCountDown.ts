import { useEffect, useState } from 'react';
import { formatTime } from '@/utils';

export const useCountDown = (
  contractPaydate: number,
  init: () => void,
  countdownCancel: any,
  contractId: string | number
) => {
  const [resultTime, setResultTime] = useState('');
  useEffect(() => {
    const updateCountDown = () => {
      const endDate = new Date(contractPaydate);
      const now = new Date();
      const timeRemaining = endDate.getTime() - (now.getTime() - 3600);
      if (timeRemaining < 999 && timeRemaining > 0) {
        countdownCancel(contractId).then(() => {
          init();
        });
        return;
      }
      if (timeRemaining > 1000) {
        setResultTime(formatTime(timeRemaining, '后将取消订单，请尽快支付'));
      }
    };

    const timeoutId = setTimeout(updateCountDown, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [resultTime]);

  return {
    resultTime
  };
};
