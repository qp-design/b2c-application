/// <reference types="react" />
export interface ExpressInfoProps {
    defaultValue: {
        message: string;
        list: Array<{
            time: string;
            context: string;
        }>;
        dataPic: string;
        count: number;
        expressName: string;
        packageBillno: string;
        result: string;
    };
    code: string;
}
export declare const ExpressInfo: import("react").NamedExoticComponent<ExpressInfoProps>;
//# sourceMappingURL=index.d.ts.map