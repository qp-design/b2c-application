import { NamePath } from '@brushes/form';
import { FormInstance } from 'antd';
import { useShowParams } from '../../selectAction/hooks';
import { SelectLink } from '../../selectLink';

export const SelectParams = ({
  name,
  form
}: {
  name: NamePath;
  form: FormInstance;
}) => {
  const { callback } = useShowParams(form);
  return (
    <div>
      <SelectLink name={name} form={form} callback={callback} />
    </div>
  );
};
