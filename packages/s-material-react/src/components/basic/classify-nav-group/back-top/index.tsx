import React, { memo, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { getEnv } from '@brushes/utils';
import { useGoTop } from 'qj-mobile-store';
const initialBackTop = {
  position: 10,
  bg: '',
  color: '',
  fontSize: 0
};

const Top: React.FC<typeof initialBackTop> = ({ position = 10, bg, color, fontSize }) => {
  const flag = useMemo(() => getEnv(), []);
  const { View } = useComponent();
  const { goTop } = useGoTop();
  return (
    <View
      className={'backTop'}
      onClick={goTop}
      style={{
        padding: flag ? '0' : '10px'
      }}
    >
      <QjMobileIcon
        style={{
          display: 'inline-block',
          color: color,
          fontSize,
          backgroundColor: bg,
          position: flag ? 'fixed' : 'relative',
          right: flag ? '20px' : '0',
          bottom: flag ? '120px' : '0',
          margin: `0 auto ${position}px`,
          zIndex: 999
        }}
        value={'backtop'}
      />
    </View>
  );
};

export const BackTop = memo(Top);
