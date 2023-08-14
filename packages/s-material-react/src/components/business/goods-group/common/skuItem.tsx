import { useComponent } from '@brushes/simulate-component';

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

  return (
    <View className={'sizeArr'}>
      <Text className={'title'}>{skuName}</Text>
      <View className={'sizeArrItemWrap'}>
        {skuOption.map((item: any, ind: number) => {
          return (
            <View
              className={`sizeItem ${spec[index] === item.specValueValue ? 'active' : ''}`}
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
