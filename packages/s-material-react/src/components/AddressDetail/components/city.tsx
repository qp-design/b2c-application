import {dynamicFormFields, FormInstance, NamePath} from '@brushes/mobile-form';
import {useCity, extendAddressData} from 'qj-mobile-store';

export const CityComponent = ({ form, name }: { form: FormInstance; name: NamePath }) => {
  const { options } = useCity(form);

  return (
    <>
      {
        dynamicFormFields([
          {
            type: 'pick',
            name,
            label: '选择市',
            rules: [{required: true, message: '所在市不能为空'}, {
              validator: (_: any, value: string) => {
                const {label} = options.find((item: {
                  value: string,
                  label: string
                }) => item.value === value) || {label: ''};
                extendAddressData.cityName = label;
                return Promise.resolve(value)
              }
            }],
            extraProps: {
              placeholder: "请选择",
              options
            }
          },
        ],form)
      }
    </>
  )
}

