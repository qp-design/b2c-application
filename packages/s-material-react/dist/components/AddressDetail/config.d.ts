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
} | {
    type: string;
    label: string;
    name: string;
    rules: {
        required: boolean;
        message: string;
    }[];
    props?: undefined;
} | {
    type: string;
    props: {
        onlyShowClearWhenFocus?: undefined;
        placeholder?: undefined;
        type?: undefined;
    };
    label: string;
    name: string;
    rules?: undefined;
})[];
//# sourceMappingURL=config.d.ts.map