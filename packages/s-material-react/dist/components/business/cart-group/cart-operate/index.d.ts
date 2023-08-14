import { Dispatch } from 'react';
interface CartOperateType {
    dispatchPageStore: Dispatch<any>;
    countBorderColor: string;
    countTextColor: string;
    countBtnColor: string;
    countBtnShape: string;
    $_dataSource: {
        cartInfo: Array<any>;
        cartIsEditor: boolean;
        cartSelect: Array<any>;
        cartDisMoney: number;
    };
}
export declare const CartOperate: React.FC<CartOperateType>;
export {};
//# sourceMappingURL=index.d.ts.map