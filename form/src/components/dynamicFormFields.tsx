//@ts-nocheck
import React from 'react';
import { FieldType, NamePath } from '@/components/types';
import type { FormInstance } from 'antd/es/form';
import Form from 'antd/es/form';
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
        ...extraPropsRest
      } = extraProps;
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
      if (type === 'upload') {
        formItemProps.valuePropName = 'fileList';
        formItemProps.getValueFromEvent = (e: any) => {
          return e.fileList;
        };
      }
      const FieldComponent = get(
        FieldTypeComponent,
        type,
        FieldTypeComponent.text
      );
      return (
        <FormItem
          shouldUpdate={shouldUpdate}
          key={(name || idx).toString()}
          noStyle
        >
          {() =>
            calIsVisible(form) ? (
              <FormItem
                {...(['formList'].includes(type) ? {} : formItemProps)}
                style={{
                  marginBottom: ['slot'].includes(type) ? 0 : 24
                }}
                noStyle={['formList'].includes(type)}
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
