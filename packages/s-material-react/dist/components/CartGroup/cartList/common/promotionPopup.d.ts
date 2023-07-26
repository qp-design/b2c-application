import { Dispatch } from 'react';
interface PromotionType {
    setVisible: Dispatch<boolean>;
    visible: boolean;
    promotion: Array<any>;
    onChange: (e: string) => void;
    promotionCode: string;
}
export declare const PromotionPopup: React.FC<PromotionType>;
export {};
//# sourceMappingURL=promotionPopup.d.ts.map