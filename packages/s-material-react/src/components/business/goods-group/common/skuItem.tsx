import { useComponent } from '@brushes/simulate-component';
import { useGoodSkuStore } from 'qj-mobile-store';
import classNames from 'classnames';

export interface SkuItemType {
  skuName: string;
  skuOption: Array<any>;
}

interface LocalType extends SkuItemType {
  index: number;
  handleChooseSize: (value: string, ind: number) => void;
  spec: Array<string>;
}
export const SkuItems: React.FC<LocalType> = ({ skuName, handleChooseSize, spec, skuOption, index }) => {
  const { View, Text } = useComponent();
  const offShelf = useGoodSkuStore((state) => state['offShelf']);
  return (
    <View className={'sizeArr'}>
      <Text className={'title'}>{skuName}</Text>
      <View className={'sizeArrItemWrap'}>
        {skuOption.map((item: any, ind: number) => {
          return (
            <View
              className={classNames({
                sizeItem: true,
                active: spec[index] === item.specValueValue,
                offShelf: spec[index] === item.specValueValue && offShelf
              })}
              key={ind}
              onClick={handleChooseSize.bind(null, item.specValueValue, index)}
            >
              {item.specValueValue}
            </View>
          );
        })}
      </View>
    </View>
  );
};
