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
      const {
        shouldUpdate = (prevValues: any, curValues: any) => false,
        dependencies,
        ...extraPropsRest
      } = extraProps;
      const FormItem = Form.Item;
      let name = (
        isUndefined(indx) ? transformName : [indx, transformName]
      ) as NamePath;
      const formItemProps: { [k: string]: unknown } = {
        name,
        type,
        dependencies,
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

      const content = (
        <FieldComponent
          form={form}
          name={name}
          disabled={calIsDisabled(form)}
          {...extraPropsRest}
        />
      );

      return (
        <FormItem
          shouldUpdate={shouldUpdate}
          key={(name || idx).toString()}
          noStyle
        >
          {() =>
            calIsVisible(form) ? (
              <FormItem {...formItemProps} noStyle={['slot'].includes(type)}>
                {content}
              </FormItem>
            ) : null
          }
        </FormItem>
      );
    }
  );
}
