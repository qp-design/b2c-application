import { cancelContractC, confirmReceive } from 'qj-b2c-api';
import { detailButton } from './config';
import { useMemo } from 'react';
import { navigatorHandler } from '@brushes/utils';

export function useOrderOperate<T>({ dataState = '', contractId, contractBillcode, init }: any) {
  const operateArray = useMemo(() => {
    return detailButton[dataState + ''] || [];
  }, [dataState]);
  const handler = (() => {
    return {
      expressInfo: () => {
        navigatorHandler('expressInfo', {
          code: contractBillcode
        });
      },
      pay: () => {
        navigatorHandler('paymentMode', {
          contractBillcode
        });
      },
      evaluate: () => {
        navigatorHandler('evaluateDetail', {
          code: contractBillcode
        });
      },
      confirmReceive: async () => {
        try {
          await confirmReceive({
            contractBillcode
          });
          init?.();
        } catch (err) {}
      },
      cancel: async () => {
        try {
          await cancelContractC({
            contractId
          });
          init?.();
        } catch (err) {}
      }
    };
  })();

  const handlerImpl = (type: string) => {
    // @ts-ignore
    handler[type]();
  };

  return {
    handlerImpl,
    operateArray
  };
}
