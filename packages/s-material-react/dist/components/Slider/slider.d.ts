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
    className?: string;
    className1?: string;
    Position?: string;
    fontsize?: number;
    textAlign?: string;
    fontColor?: string;
    backGroundColor?: string;
}
export declare const SliderInner: React.NamedExoticComponent<SwiperType>;
export {};
//# sourceMappingURL=slider.d.ts.map