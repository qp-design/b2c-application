import { getEnv, getTaro } from '@brushes/utils';
import { antdMobile } from '@brushes/simulate-component';
import React, { memo, useMemo, useState } from 'react';
const { Button } = antdMobile;
interface CopyType {
  copyContent: string;
}
const CopyText: React.FC<CopyType> = ({ copyContent = '' }) => {
  const [iscopy, setIscopy] = useState(false);
  const isEnv = useMemo(() => getEnv(), []);

  const copy = () => {
    if (isEnv) {
      const Taro = getTaro();
      if (copyContent === '') {
        Taro.showToast({ title: '复制内容为空', icon: 'error' });
        return;
      }
      Taro.setClipboardData({
        data: copyContent,
        success: () => {
          Taro.showToast({ title: '复制成功', icon: 'success' });
          setIscopy(true);
        },
        fail: () => {
          Taro.showToast({ title: '复制失败', icon: 'error' });
        }
      });
    }
  };

  return (
    <Button className={'copy'} size="mini" fill={'outline'} onClick={copy}>
      {iscopy ? '已复制' : '复制'}
    </Button>
  );
};
export const Copy = memo(CopyText);
