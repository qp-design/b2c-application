import type { FC } from 'react';
import { NamePath } from '@brushes/form';
import { ColorPicker, Button, FormInstance } from 'antd';
export const ColorPickerJsx: FC = ({
  form,
  name,
  value,
  onChange
}: {
  form: FormInstance;
  value: string;
  onChange: (e: any) => void;
  name: NamePath;
}) => {
  const onReset = () => form.resetFields([name]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button type="link" onClick={onReset}>
        重置
      </Button>
      <ColorPicker format="rgb" value={value} onChange={onChange} />
    </div>
  );
};
