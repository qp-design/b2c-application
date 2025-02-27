import { FormProps } from 'antd-mobile';
import React, { ReactNode } from 'react';
import { FormInstance } from 'antd-mobile/es/components/form';
import { Action, FieldType, submitType, TransformType } from '@/components/types';
export interface FormAddProps extends FormProps {
    name?: string;
    footer?: ReactNode;
    initialValues?: {
        [v: string]: unknown;
    };
    onSubmit: (...args: submitType) => void;
    fields: Array<FieldType>;
    transformSubmitDataConfig?: Array<TransformType>;
    otherAction?: Array<Action>;
}
export declare const NoFormDynamic: React.MemoExoticComponent<({ fields, form }: {
    fields: Array<FieldType>;
    form: FormInstance;
}) => import("react/jsx-runtime").JSX.Element>;
export declare const DynamicForm: React.MemoExoticComponent<({ name, footer, layout, onSubmit, form: defaultForm, fields: defaultFields, transformSubmitDataConfig, otherAction, ...restFormConfig }: FormAddProps) => import("react/jsx-runtime").JSX.Element>;
export * from './dynamicFormFields';
export * from './hooks/formHook';
export * from './types';
