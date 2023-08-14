/// <reference types="react" />
import { SkuItemType } from './skuItem';
interface skuInfoType {
    goodsShowname: string;
    pricesetNprice: number;
    dataPic: string;
    skuList: Array<SkuItemType>;
}
export interface GoodsDetailPopupType {
    skuInfo: skuInfoType;
    goodsCode: string;
    rsSkuDomainList: Array<any>;
}
export declare const InnerComponent: React.FC<GoodsDetailPopupType>;
export declare const GoodsDetailPopup: React.FC<GoodsDetailPopupType>;
export {};
//# sourceMappingURL=goodsDetailPopup.d.ts.map