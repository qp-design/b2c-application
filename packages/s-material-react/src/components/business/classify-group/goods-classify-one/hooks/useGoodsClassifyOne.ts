import { useMemo } from 'react';

export const useGoodsClassifyOne = ({ navList, fCoe, sCoe }: any) => {
  const secondList = useMemo(() => {
    return navList[fCoe]?.childList || [];
  }, [fCoe, navList]);

  const thirdList = useMemo(() => {
    return secondList[sCoe]?.childList || [];
  }, [sCoe, fCoe, navList]);

  return {
    secondList,
    thirdList
  };
};
