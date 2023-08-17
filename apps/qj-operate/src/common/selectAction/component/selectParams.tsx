import { NamePath } from '@brushes/form';
import type { FormInstance } from 'antd/es/form';
import { useShowParams } from '@/common/selectAction/hooks';
import { SelectLink } from '@/common';

export const SelectParams = ({ name, form }: { name: NamePath; form: FormInstance }) => {
  const { callback } = useShowParams(form);
  return (
    <div>
      <SelectLink name={name} form={form} callback={callback} />
    </div>
  );
};
