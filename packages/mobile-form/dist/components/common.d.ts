/// <reference types="react" />
import { TextAreaField, InputField, CheckboxField, CheckboxGroupField, CheckboxListField, RadioGroupField, SwitchField } from './dynamic-form/fields';
export declare const FieldTypeComponent: {
    textarea: typeof TextAreaField;
    checkboxList: typeof CheckboxListField;
    pick: ({ options, placeholder, value, onChange }: {
        placeholder?: string | undefined;
        options: {
            label: string;
            value: string;
        }[];
        value?: string | undefined;
        onChange: (e: any) => void;
    }) => import("react/jsx-runtime").JSX.Element;
    switch: typeof SwitchField;
    text: typeof InputField;
    checkbox: typeof CheckboxField;
    checkboxGroup: typeof CheckboxGroupField;
    select: ({ options, ...restProps }: {
        [x: string]: any;
        options?: never[] | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    radioGroup: typeof RadioGroupField;
    slot: import("react").MemoExoticComponent<({ render, ...extraProps }: {
        render?: Function | undefined;
    }) => any>;
};
