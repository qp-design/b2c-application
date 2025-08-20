import { getTaro } from '@brushes/utils';

//icon:  "success" or "error" or "loading" or "none"

export const showToast = (title: string, icon = 'success', duration = 1000) => {
  const Taro = getTaro();
  Taro.showToast({
    title,
    icon,
    duration
  });
};
