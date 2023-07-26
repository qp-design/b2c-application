import React from 'react';
export interface ClassifyItemType {
    imgUrl: string;
    title: string;
    link?: any;
}
interface ClassifyNavType {
    defaultValue: Array<ClassifyItemType>;
    borderRadius: number;
    paddingTop: number;
    paddingBottom: number;
    selectClassifyNav: Array<ClassifyItemType>;
}
export declare const ClassifyNav: React.NamedExoticComponent<ClassifyNavType>;
export {};
//# sourceMappingURL=index.d.ts.map