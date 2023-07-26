/// <reference types="react" />
export interface CardItemType {
    dataPic: string;
    goodsName: string;
    dataBmoney?: number;
    goodsCamount: number;
    pricesetNprice?: number;
    skuName?: string;
    skuCode?: string;
    children?: React.ReactNode;
}
export declare const CardJsx: ({ dataPic, goodsName, goodsCamount, pricesetNprice, skuName, children }: CardItemType) => JSX.Element;
//# sourceMappingURL=index.d.ts.map