import { ScrollWrap } from '@/common/scrollWrap';
import { Promotion } from './promotion';
import { useComponent } from '@brushes/simulate-component';
import { Dispatch } from 'react';

interface PromotionType {
  setVisible: Dispatch<boolean>;
  visible: boolean;
  promotion: Array<any>;
  onChange: (e: string) => void;
  promotionCode: string;
}
export const PromotionPopup: React.FC<PromotionType> = ({
  onChange,
  promotionCode,
  visible,
  setVisible,
  promotion
}) => {
  const { Popup, ScrollView, View, SmoothRadio } = useComponent();
  return (
    <Popup popupVisible={visible} popupHandler={setVisible}>
      <View className={'goodsDetail-coupon-popup'}>
        <ScrollWrap>
          <ScrollView>
            <SmoothRadio onChange={onChange}>
              {promotion.map((item, index) => {
                return <Promotion checked={item.promotionCode === promotionCode} {...item} key={index} />;
              })}
            </SmoothRadio>
          </ScrollView>
        </ScrollWrap>
      </View>
    </Popup>
  );
};
