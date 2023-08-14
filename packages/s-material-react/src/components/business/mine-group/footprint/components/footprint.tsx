import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { useMemo } from 'react';

const FootprintItem = ({ footprintItem, edit }: any) => {
  const { View, Image, Checkbox, SmoothView } = useComponent();

  const footprintOpnumS = useMemo(() => {
    return footprintItem.footprintOpnum ? `${footprintItem.footprintOpnum}元` : '';
  }, [footprintItem.footprintOpnum]);

  return (
    <View className="footprintItem">
      {edit ? (
        <View className="lPart">
          <Checkbox value={footprintItem.footprintCode}></Checkbox>
        </View>
      ) : null}
      <View
        className="rPart"
        onClick={() =>
          navigatorHandler('goodDetail', {
            skuCode: footprintItem.footprintOpcode
          })
        }
      >
        <Image src={footprintItem.footprintOppic} className="img" />
        <View className="info">
          <SmoothView className="title">{footprintItem.footprintOpcont}</SmoothView>
          <SmoothView className="price">{footprintOpnumS}</SmoothView>
        </View>
      </View>
    </View>
  );
};

export const Footprint = ({ item, edit }: any) => {
  const { View } = useComponent();

  return (
    <View className="footPrint">
      <>
        <View className="title" style={{ paddingLeft: '20px', paddingTop: '30px', paddingBottom: '10px' }}>
          {item?.title}
        </View>
      </>
      {item.option.map((footprintItem: any, index: number) => {
        return <FootprintItem footprintItem={footprintItem} key={index} edit={edit} />;
      })}
    </View>
  );
};
