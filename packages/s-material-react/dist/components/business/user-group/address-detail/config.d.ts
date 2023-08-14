import { FormInstance, NamePath } from '@brushes/mobile-form';
export declare const transformConfig: {
    from: string;
    to: string;
    format: (preValue: any) => 1 | 0;
}[];
export declare const config: ({
    type: string;
    props: {
        onlyShowClearWhenFocus: boolean;
        placeholder: string;
        type?: undefined;
    };
    label: string;
    name: string;
    rules: {
        required: boolean;
        message: string;
    }[];
    extraProps?: undefined;
} | {
    type: string;
    props: {
        type: string;
        onlyShowClearWhenFocus: boolean;
        placeholder: string;
    };
    label: string;
    name: string;
    rules: ({
        required: boolean;
        message: string;
        validator?: undefined;
    } | {
        validator: (_: any, value: any) => Promise<unknown>;
        required?: undefined;
        message?: undefined;
    })[];
    extraProps?: undefined;
} | {
    type: string;
    name: string;
    extraProps: {
        render: ({ form, name }: {
            form: FormInstance;
            name: NamePath;
        }) => JSX.Element;
        color?: undefined;
    };
    props?: undefined;
    label?: undefined;
    rules?: undefined;
} | {
    type: string;
    name: string;
    extraProps: {
        shouldUpdate(currentState: {
            provinceCode: string;
        }, prevState: {
            provinceCode: string;
        }): boolean;
        render: ({ form, name }: {
            form: FormInstance;
            name: NamePath;
        }) => JSX.Element;
        color?: undefined;
    };
    props?: undefined;
    label?: undefined;
    rules?: undefined;
} | {
    type: string;
    label: string;
    name: string;
    extraProps: {
        color: string;
        render?: undefined;
    };
    props?: undefined;
    rules?: undefined;
})[];
//# sourceMappingURL=config.d.ts.map