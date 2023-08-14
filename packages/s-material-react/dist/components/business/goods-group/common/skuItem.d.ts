/// <reference types="react" />
export interface SkuItemType {
    skuName: string;
    skuOption: Array<any>;
}
interface LocalType extends SkuItemType {
    index: number;
    handleChooseSize: (value: string, ind: number) => void;
    spec: Array<string>;
}
export declare const SkuItems: React.FC<LocalType>;
export {};
//# sourceMappingURL=skuItem.d.ts.map