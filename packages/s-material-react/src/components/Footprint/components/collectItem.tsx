import { navigatorHandler } from '@brushes/utils';
import { useComponent } from '@brushes/simulate-component';

const CollectItem = ({ item, edit, checked }: any) => {
  const { View, Image, Checkbox } = useComponent();
  return (
    <View className="collectItem">
      {edit ? <Checkbox className="lPart" value={item.collectCode} checked={checked}></Checkbox> : null}
      <View
        className="rPart"
        onClick={() =>
          navigatorHandler('goodDetail', {
            skuCode: item.collectOpcode
          })
        }
      >
        <Image src={item.collectOppic} className="img" />
        <View className="info">
          <View className="title">{item.collectOpcont}</View>
          <View className="price">{item.collectOpnum} 元</View>
        </View>
      </View>
    </View>
  );
};

export default CollectItem;
