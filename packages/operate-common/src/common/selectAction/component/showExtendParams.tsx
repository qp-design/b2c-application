import { Button } from 'antd';
import { useActionStore } from '@/common/selectAction/hooks';
import { useMemo } from 'react';

export const ShowExtendParams = ({
  extendOption
}: {
  extendOption: Array<{ label: string; value: string }>;
}) => {
  const [extendQuery] = useActionStore((state) => state['extendQuery']);

  const extendOp = useMemo(() => {
    let arr = [];
    for (let i of extendOption) {
      if (extendQuery.includes(i.value)) {
        arr.push(i);
      }
    }
    return arr;
  }, [extendOption, extendQuery]);

  return (
    <div className={'up-data-select-info'}>
      {extendOp.map((item) => (
        <Button key={item.value}>
          {item.label}({item.value})
        </Button>
      ))}
    </div>
  );
};
