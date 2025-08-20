import { getEnv, getTaro } from '@brushes/utils';

export const useGoodsShare = () => {
  const handleShare = () => {
    const isTaro = getEnv();
    if (!isTaro) return;
    const Taro = getTaro();
    Taro.showShareMenu({
      withShareTicket: true,
      success: () => {
        console.log('share success');
      }
    });
  };

  return {
    handleShare
  };
};
