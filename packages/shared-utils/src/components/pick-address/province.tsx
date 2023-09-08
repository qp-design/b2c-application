import { dynamicFormFields, FormInstance, NamePath } from '@brushes/mobile-form';
import { useProvince } from '@/hooks';
import { extendAddressData } from '@/localData';
export const ProvinceComponent = ({ form, name, label = '' }: { form: FormInstance; name: NamePath; label?: string }) => {
  const { options } = useProvince();

  return (
    <>
      {dynamicFormFields(
        [
          {
            type: 'pick',
            name,
            label,
            rules: [
              { required: true, message: '所在省不能为空' },
              {
                validator: (_: any, value: string) => {
                  const { label } = options.find((item: { value: string; label: string }) => item.value === value) || {
                    label: ''
                  };
                  extendAddressData.provinceName = label;
                  return Promise.resolve(value);
                }
              }
            ],
            extraProps: {
              placeholder: '请选择省',
              options
            }
          }
        ],
        form
      )}
    </>
  );
};
