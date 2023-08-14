import type { FC, MutableRefObject } from 'react';
import type { CouponListProps } from '../index';
interface CouponItemProps extends Omit<CouponListProps, 'paddingBottom' | 'paddingTop'> {
    list: Array<any>;
    coe: MutableRefObject<number>;
    config: MutableRefObject<any>;
}
export declare const CouponItem: FC<CouponItemProps>;
export {};
//# sourceMappingURL=couponItem.d.ts.map