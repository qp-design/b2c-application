import {BaseWrapCommon} from "@/components/baseWrapCommon";
import { useComponent } from '@brushes/simulate-component';

const Index = () => {
  const { View } = useComponent();
  return (
    <View>
      <BaseWrapCommon base />
    </View>
  )
}


export default Index;
