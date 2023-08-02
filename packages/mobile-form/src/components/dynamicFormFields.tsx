//@ts-nocheck
import { FieldType, NamePath } from '@/components/types';
import { Form } from 'antd-mobile';
import { FormInstance } from 'antd-mobile/es/components/form';
import { get, isUndefined } from 'lodash-es';
import { FieldTypeComponent } from './common';

export function dynamicFormFields(
  fields: Array<FieldType>,
  form: FormInstance,
  indx?: number
) {
  return fields.map(
    (
      {
        name: transformName,
        type,
        extraProps = {},
        calIsVisible = () => true,
        calIsDisabled = () => false,
        ...rest
      }: FieldType,
      idx: number
    ) => {
      const { shouldUpdate = (prevValues: any, curValues: any) => false, ...extraPropsRest} = extraProps;
      const FormItem = Form.Item;
      let name = (
        isUndefined(indx) ? transformName : [indx, transformName]
      ) as NamePath;
      const formItemProps: { [k: string]: unknown } = {
        name,
        type,
        valuePropName: ['checkbox', 'switch'].includes(type)
          ? 'checked'
          : 'value',
        ...rest
      };

      const FieldComponent = get(
        FieldTypeComponent,
        type,
        FieldTypeComponent.text
      );
      return (
        <FormItem
          shouldUpdate={shouldUpdate}
          key={(name || idx).toString()}
          noStyle>
          {() =>
            calIsVisible(form) ? (
              <FormItem
                {...(['formList'].includes(type) ? {} : formItemProps)}
                noStyle={['formList', 'slot'].includes(type)}
              >
                <FieldComponent
                  form={form}
                  name={name}
                  disabled={calIsDisabled(form)}
                  {...extraPropsRest}
                />
              </FormItem>
            ) : null
          }
        </FormItem>
      );
    }
  );
}
