import { NamePath } from '@brushes/mobile-form';
import { dynamicFormFields } from '@brushes/form';
import { FormInstance } from 'antd';
import { themeColorMap } from '../../static';
export const SelectTheme = ({ form, name, label }: { form: FormInstance; name: NamePath; label: string }) => {
  return (
    <>
      {dynamicFormFields(
        [
          {
            type: 'radioGroup',
            name,
            label,
            initialValue: 'rgb(51,51,51)',
            rules: [
              ({ setFieldValue }) => ({
                validator(_, value) {
                  Object.keys(themeColorMap.get(value)).forEach((item) => {
                    setFieldValue(['mmodelConfig', item], themeColorMap.get(value)[item]);
                  });
                  return Promise.resolve();
                }
              })
            ],
            extraProps: {
              options: [
                {
                  value: 'rgb(51,51,51)',
                  label: <div style={{ width: '24px', height: '24px', backgroundColor: 'rgb(51,51,51)' }}></div>
                },
                {
                  value: 'rgb(255,9,52)',
                  label: <div style={{ width: '24px', height: '24px', backgroundColor: 'rgb(255,9,52)' }}></div>
                },
                {
                  value: 'rgb(183,159,119)',
                  label: <div style={{ width: '24px', height: '24px', backgroundColor: 'rgb(183,159,119)' }}></div>
                }
              ]
            }
          }
        ],
        form
      )}
    </>
  );
};
