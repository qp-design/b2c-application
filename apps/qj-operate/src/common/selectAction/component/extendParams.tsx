import { dynamicFormFields, NamePath } from '@brushes/form';
import { FormInstance } from 'antd';
import { useActionStore } from '@/common/selectAction/hooks';
import { useEffect } from 'react';

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
