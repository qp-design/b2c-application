import { Dispatch } from 'react';
interface CartListType {
    refreshNum: number;
    cartUpdateCount: number;
    cartSelect: Array<string>;
    dispatchPageStore: Dispatch<any>;
    cartItemRadius?: string;
    $_dataSource: {
        cartSelect: Array<any>;
        cartUpdateCount: number;
    };
}
export declare const CartList: React.FC<CartListType>;
export {};
//# sourceMappingURL=index.d.ts.map