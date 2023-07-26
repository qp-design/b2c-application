import React from 'react';
interface GoodsType {
    goodsCode: number;
    goodsName: string;
    brandName: string;
    pricesetNprice: number;
    pricesetMakeprice: number;
    dataPic: string;
}
interface GroupType {
    title: string;
    subTitle: string;
    defaultValue: Array<GoodsType>;
    goodsList?: Array<GroupType>;
    borderRadius: number;
}
interface GoodsGroupType {
    defaultValue: Array<GroupType>;
    type: 1;
    selectGoodsGroup: Array<GroupType>;
    marginTop: number;
    marginBottom: number;
    borderRadius: number;
}
export declare const GoodsGroup: React.NamedExoticComponent<GoodsGroupType>;
export {};
//# sourceMappingURL=index.d.ts.map