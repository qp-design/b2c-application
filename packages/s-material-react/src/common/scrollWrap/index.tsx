import React, { ReactNode, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useDynamicHeight } from '@/hooks';
import { useSafeTabBar } from '@/hooks/useSafeTabBar';
import { getEnv, getTaro } from '@brushes/utils';

interface ScrollWrapType {
  id?: string;
  bottomHeight?: string;
  children: ReactNode;
  heightWrap?: string;
}

export const ScrollWrap: React.FC<ScrollWrapType> = ({ bottomHeight, children, id, heightWrap, ...props }) => {
  const isTaro = useMemo(() => getEnv(), []);
  const heightSize = useDynamicHeight(id);
  const extraHeight = useSafeTabBar(bottomHeight);
  const { View } = useComponent();

  const height = useMemo(() => {
    if (!isTaro) {
      return id ? { height: '100%' } : { maxHeight: '50vh', overflow: 'auto' };
    }

    if (id) {
      const windowHeight = getTaro().getSystemInfoSync().windowHeight + 'px';
      return {
        height: `calc(${windowHeight} - ${heightSize + extraHeight}px)`
      };
    }

    return { maxHeight: '50vh', overflow: 'auto' };
  }, [heightSize, extraHeight]);
  return (
    <View {...props} style={{ ...height, paddingBottom: id ? '' : extraHeight }} id={id}>
      {children}
    </View>
  );
};
