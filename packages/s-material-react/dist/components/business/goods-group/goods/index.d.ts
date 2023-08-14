/// <reference types="react" />
export interface GoodsType {
    defaultValue: Array<{
        goodsCode: string | number;
        goodsName: string | number;
        dataPic: string;
        goodsSalesvolume: number;
        brandName: string | number;
        pricesetNprice: number;
        pricesetMakeprice?: number;
    }>;
    margin?: number;
    cell: number;
    gap?: number;
    showSales: boolean;
    goods: Array<never> | undefined;
    circular?: boolean;
    markedPrice?: number;
    classCode?: string;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    goodsName?: boolean;
    goodsPrice?: boolean;
    goodsCar?: boolean;
    goodsBorder?: boolean;
    goodsShadow?: boolean;
    marginGap?: number;
}
export declare const Goods: import("react").NamedExoticComponent<GoodsType>;
//# sourceMappingURL=index.d.ts.map