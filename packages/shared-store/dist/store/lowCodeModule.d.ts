type Module = {
    module: string;
    theme: {
        mainColor: string;
        sbuColor: string;
        success: string;
        fail: string;
        warn: string;
        link: string;
        [v: string]: any;
    };
    [v: string]: any;
};
export declare const Provider: ({ children }: {
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useStore: <SelectorOutput>(selector: (store: Module) => SelectorOutput) => [SelectorOutput, (value: Partial<Module>) => void];
export {};
