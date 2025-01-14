import { useComponent } from '@brushes/simulate-component';
import { getEnv } from '@brushes/utils';
import { useMemo, useRef } from 'react';

export const ClassifySkeleton = () => {
  const flag = useMemo(() => getEnv(), []);

  const { View, Skeleton } = useComponent();
  const lBlcArr = useRef(Array(3).fill(1));

  return (
    <View className={'classifySkeleton'} style={{ height: flag ? 'calc(100vh - 51px)' : '667px' }}>
      <View className={'lPart'}>
        {lBlcArr.current.map((item, index) => {
          return <Skeleton animated className={'blc'} key={index} />;
        })}
      </View>
      <View className={'rPart'}>
        <Skeleton.Paragraph lineCount={5} animated />
      </View>
    </View>
  );
};
