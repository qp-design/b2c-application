/// <reference types="react" />
interface OrderPriceType {
    payState: {
        shoppingCountPrice: string | number;
        freight: string | number;
        accountsSumPrice: string | number;
        comDisMoney: string | number;
    };
    savePayPrice: () => void;
    amount: number;
}
export declare const OrderPrice: React.FC<OrderPriceType>;
export {};
//# sourceMappingURL=orderPrice.d.ts.map