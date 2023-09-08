import { dynamicFormFields, FormInstance, NamePath } from '@brushes/mobile-form';
import { useCity } from '@/hooks';
import { extendAddressData } from '@/localData';
export const CityComponent = ({ form, name, label = '' }: { form: FormInstance; name: NamePath; label?: string }) => {
  const { options } = useCity(form);
  return (
    <>
      {dynamicFormFields(
        [
          {
            type: 'pick',
            name,
            label,
            rules: [
              { required: true, message: '所在市不能为空' },
              {
                validator: (_: any, value: string) => {
                  const { label } = options.find((item: { value: string; label: string }) => item.value === value) || {
                    label: ''
                  };
                  extendAddressData.cityName = label;
                  return Promise.resolve(value);
                }
              }
            ],
            extraProps: {
              placeholder: '请选择市',
              options
            }
          }
        ],
        form
      )}
    </>
  );
};
