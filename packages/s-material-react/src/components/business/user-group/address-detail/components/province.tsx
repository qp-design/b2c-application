import { dynamicFormFields, FormInstance, NamePath } from '@brushes/mobile-form';
import { useProvince, extendAddressData } from 'qj-mobile-store';

export const ProvinceComponent = ({ form, name }: { form: FormInstance; name: NamePath }) => {
  const { options } = useProvince();

  return (
    <>
      {dynamicFormFields(
        [
          {
            type: 'pick',
            name,
            label: '选择省',
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
              placeholder: '请选择',
              options
            }
          }
        ],
        form
      )}
    </>
  );
};
