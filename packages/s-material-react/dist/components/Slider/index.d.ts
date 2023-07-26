import React from 'react';
export interface itemType {
    imgUrl: string;
    link: string;
    title?: string;
}
interface SwiperType {
    defaultValue?: Array<itemType>;
    type?: number;
    autoplay?: boolean;
    autoplayInterval?: number;
    direction?: 'horizontal' | 'vertical';
    loop?: boolean;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    selectImg?: Array<itemType>;
    imgHeight?: {
        height: number;
        width: number;
    };
    vertical?: boolean;
    paddingTB?: number;
    paddingLR?: number;
    fontsize?: number;
    textAlign?: string;
    fontColor?: string;
    backGroundColor?: string;
    otherStyles?: Array<string>;
    ImgShadow?: boolean;
    Position?: string;
    value?: string;
}
export declare const Slider: React.NamedExoticComponent<SwiperType>;
export {};
//# sourceMappingURL=index.d.ts.map