import React from 'react';
import { useComponent } from '@brushes/simulate-component';

const initialTextLine = {
  // 文本分割线背景色
  TextLineBgColor: '#FFFFFF',
  // 文本内容
  text: '文本分割线',
  // 整个内容的样式 1：不撑满 2：撑满
  contentSize: 1,
  // 线的样式 1：实现 2：虚线 3：点线
  lineStyle: 'solid',
  // 字号大小 12 14 16
  fontSize: 14,
  // 对齐方式 左 中 右
  textAlign: 'center',
  // 字体颜色
  fontColor: '#000000',
  // 线条颜色
  lineColor: '#000000',
  // 字体加粗
  fontWeight: 'normal',
  // 字体倾斜
  fontStyle: 'normal',
  // 字体下划线
  textDecoration: 'none'
};

export const TextLine: React.FC<typeof initialTextLine> = ({
  TextLineBgColor,
  text,
  contentSize,
  lineStyle,
  fontSize,
  textAlign,
  fontColor,
  lineColor,
  fontWeight,
  fontStyle,
  textDecoration
}) => {
  const { View } = useComponent();

  return (
    <View
      className={'textLine'}
      style={{
        backgroundColor: TextLineBgColor,
        textAlign,
        margin: contentSize === 1 ? '0 10px' : ''
      }}
    >
      <View
        className={'blc'}
        style={{
          borderBottom: `1px ${lineStyle} ${lineColor}`
        }}
      ></View>
      <View
        className={'txt'}
        style={{
          backgroundColor: TextLineBgColor,
          fontWeight,
          fontStyle,
          textDecoration,
          fontSize: `${fontSize}px`,
          color: fontColor
        }}
      >
        {text}
      </View>
    </View>
  );
};
