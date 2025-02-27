import { ReactNode } from 'react';
export default function CheckboxField({ value, onChange, initialValue, ...restProps }: {
    optionValue: any;
    initialValue: {
        value: any;
        label: ReactNode;
    };
    value: any;
    onChange: (e: any) => void;
}): import("react/jsx-runtime").JSX.Element;
