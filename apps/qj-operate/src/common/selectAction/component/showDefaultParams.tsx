import Button from 'antd/es/button';
import { useActionStore } from '@/common/selectAction/hooks';

export const ShowDefaultParams = () => {
  const [defaultOption] = useActionStore((state) => state['defaultOption']);
  return (
    <div className={'up-data-select-info'} style={{ marginBottom: 15 }}>
      {defaultOption.map((item) => (
        <Button key={item.value}>
          {item.label}({item.value})
        </Button>
      ))}
    </div>
  );
};
