import { useComponent } from '@brushes/simulate-component';

export const NoData = () => {
  const { View, Image } = useComponent();

  return (
    <View className="noDate">
      <Image
        className="img"
        src="https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/noCollection.png"
      />
    </View>
  )
}
