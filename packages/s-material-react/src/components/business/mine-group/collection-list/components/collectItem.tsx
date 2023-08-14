import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';

const CollectItem = ({ item, edit, checked }: any) => {
  const { View, Image, Checkbox, SmoothView } = useComponent();

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
          <SmoothView className="title">{item.collectOpcont}</SmoothView>
          <SmoothView className="price">{item.collectOpnum} 元</SmoothView>
        </View>
      </View>
    </View>
  );
};

export default CollectItem;
