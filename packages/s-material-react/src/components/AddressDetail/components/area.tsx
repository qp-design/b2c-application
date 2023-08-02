import {dynamicFormFields, FormInstance, NamePath} from '@brushes/mobile-form';
import {extendAddressData, useArea} from 'qj-mobile-store';

export const AreaComponent = ({ form, name }: { form: FormInstance; name: NamePath }) => {
  const { options } = useArea(form);
  return (
    <>
      {
        dynamicFormFields([
          {
            type: 'pick',
            name,
            label: '选择市',
            rules: [{required: true, message: '所在区不能为空'}, {
              validator: (_: any, value: string) => {
                const {label} = options.find((item: {
                  value: string,
                  label: string
                }) => item.value === value) || {label: ''};
                extendAddressData.areaName = label;
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

