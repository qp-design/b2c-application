import { useEffect, useState } from 'react';
import { getEnv, getTaro } from '@brushes/utils';

export function useDynamicHeight(element?: string) {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const isTaro = getEnv();
    if (!isTaro || !element) return;
    const Taro = getTaro();
    const query = Taro.createSelectorQuery();
    setTimeout(() => {
      query
        .select(`#${element}`)
        .boundingClientRect((res: any) => {
          if (res) {
            const { top } = res;
            setHeight(top);
          }
        })
        .exec();
    });
  });

  return height;
}
