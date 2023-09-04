import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';

interface PromotionType {
  promotionName: string;
  promotionCode: string;
  checked: boolean;
}

const PromotionJsx: React.FC<PromotionType> = ({ promotionName, checked, promotionCode }) => {
  const { View, Radio } = useComponent();
  return (
    <View className="promotion-item">
      <View className={'content'}>{promotionName}</View>
      <View className={'choose'}>
        <Radio data-code={checked} checked={checked} value={promotionCode}></Radio>
      </View>
    </View>
  );
};

export const Promotion = memo(PromotionJsx);
