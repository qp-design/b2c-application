declare const PickField: ({ options, placeholder, value, onChange }: {
    placeholder?: string | undefined;
    options: {
        label: string;
        value: string;
    }[];
    value?: string | undefined;
    onChange: (e: any) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default PickField;
