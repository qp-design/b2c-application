import { SkuItemType } from '@/components/business/goods-group/common/skuItem';
import { Dispatch } from 'react';
interface skuInfoType {
    goodsShowname: string;
    pricesetNprice: number;
    dataPic: string;
    skuList: Array<SkuItemType>;
}
export interface CartDetailPopupType {
    skuInfo: skuInfoType;
    goodsCode: string;
    visible: boolean;
    setVisible: Dispatch<boolean>;
}
export declare const CartPopup: React.FC<CartDetailPopupType>;
export {};
//# sourceMappingURL=cartPopup.d.ts.map