import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';

interface LineType {
  borderRadius: number;
  height: number;
  width: number;
  borderStyle: string;
  backgroundColor: string;
  paddingTop: number;
  paddingBottom: number;
}

const LineJsx: React.FC<LineType> = ({
  borderStyle,
  borderRadius,
  height,
  width,
  backgroundColor,
  paddingTop,
  paddingBottom
}) => {
  const { View } = useComponent();
  return (
    <View
      style={{
        paddingTop,
        paddingBottom
      }}
    >
      <View
        style={{
          borderRadius: borderRadius + '%',
          borderStyle,
          width: width + '%',
          height: height + 'px',
          backgroundColor,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
    </View>
  );
};

export const Line = memo(LineJsx);
