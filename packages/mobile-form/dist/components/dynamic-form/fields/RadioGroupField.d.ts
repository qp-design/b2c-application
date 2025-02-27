import { FormInstance } from 'antd-mobile/es/components/form';
type emums = 'vertical' | 'horizontal';
export default function RadioGroupField({ form, options, optionsName, optionsKey, direction, ...extraProps }: {
    form: FormInstance;
    direction?: emums;
    options?: Array<any>;
    optionsName?: string | undefined;
    optionsKey?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
export {};
