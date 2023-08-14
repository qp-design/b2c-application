import { useComponent } from '@brushes/simulate-component';

export const NoData = () => {
  const { View, Image } = useComponent();

  const src = 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noOrder.png';

  return (
    <View>
      <Image src={src} className="img" mode={'widthFix'} />
    </View>
  );
};
