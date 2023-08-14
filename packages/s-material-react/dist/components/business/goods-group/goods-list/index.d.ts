import React from 'react';
import { type Link } from 'qj-mobile-store';
export interface FilterType {
    sortField: string;
    order?: string | undefined;
    activeColor?: string;
    goodsName?: boolean;
    goodsPrice?: boolean;
    lineationGoods?: boolean;
    salesQuantity?: boolean;
    goodsCar?: boolean;
    borderRadius?: boolean;
    goodsColor?: boolean;
    goodsGap?: number;
    paddingLR?: number;
    classtreeCode?: string;
    searchParam?: string;
    __link__?: Link;
}
export declare const GoodsList: React.NamedExoticComponent<FilterType>;
//# sourceMappingURL=index.d.ts.map