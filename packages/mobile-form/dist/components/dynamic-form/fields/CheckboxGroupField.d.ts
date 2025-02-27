import { FormInstance } from 'antd-mobile/es/components/form';
type emums = 'vertical' | 'horizontal';
export default function CheckboxGroupField({ form, options, optionsName, optionsKey, description, direction, ...extraProps }: {
    form: FormInstance;
    direction?: emums;
    options?: Array<any>;
    description?: {
        key: string;
        func: Function;
    };
    optionsName?: string | undefined;
    optionsKey?: string | undefined;
}): import("react/jsx-runtime").JSX.Element;
export {};
