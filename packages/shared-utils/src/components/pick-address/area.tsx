import { dynamicFormFields, FormInstance, NamePath } from '@brushes/mobile-form';
import { useArea } from '@/hooks';
import { extendAddressData } from '@/localData';
export const AreaComponent = ({ form, name, label = '' }: { form: FormInstance; name: NamePath; label?: string }) => {
  const { options } = useArea(form);
  console.log('update');
  return (
    <>
      {dynamicFormFields(
        [
          {
            type: 'pick',
            name,
            label,
            rules: [
              { required: true, message: '所在区不能为空' },
              {
                validator: (_: any, value: string) => {
                  const { label } = options.find((item: { value: string; label: string }) => item.value === value) || {
                    label: ''
                  };
                  extendAddressData.areaName = label;
                  return Promise.resolve(value);
                }
              }
            ],
            extraProps: {
              placeholder: '请选择区',
              options
            }
          }
        ],
        form
      )}
    </>
  );
};
