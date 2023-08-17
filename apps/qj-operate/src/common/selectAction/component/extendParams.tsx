import { dynamicFormFields, NamePath } from '@brushes/form';
import type { FormInstance } from 'antd/es/form';
import { useActionStore } from '@/common/selectAction/hooks';

export const ExtendParams = ({ name, form }: { name: NamePath; form: FormInstance }) => {
  const [extendOption] = useActionStore((state) => state['extendOption']);
  console.log(8, extendOption);
  return (
    <>
      {dynamicFormFields(
        [
          {
            name,
            type: 'select',
            extraProps: {
              mode: 'multiple',
              options: extendOption
            }
          }
        ],
        form
      )}
    </>
  );
};
