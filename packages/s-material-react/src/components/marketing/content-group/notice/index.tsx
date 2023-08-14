import React from 'react';
import { NoticeBar } from '@brushes/simulate-component';
import { useNotice } from 'qj-mobile-store';

export const Notice: React.FC<NoticeType> = ({ direction, speed, num, color }) => {
  const { content, navigator } = useNotice(num);
  return (
    <NoticeBar navigator={navigator} color={color} speed={speed} direction={direction} content={content}></NoticeBar>
  );
};

interface NoticeType {
  direction: 'horizontal' | 'vertical';
  speed?: number;
  num: number;
  color: string;
  fontSize: number;
}
