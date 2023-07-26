import React from 'react';
interface ImgType {
    imgUrl: string;
    link: string;
}
interface CubeType {
    defaultValue: Array<ImgType>;
    type: number;
    borderRadius: number;
    paddingTop: number;
    paddingLeft: number;
    paddingRight: number;
    picGap: number;
    xGap: number;
    paddingBottom: number;
    outerShadow: boolean;
    selectImg: Array<ImgType>;
}
export declare const Cube: React.NamedExoticComponent<CubeType>;
export {};
//# sourceMappingURL=index.d.ts.map