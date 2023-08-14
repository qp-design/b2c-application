import { memo } from 'react';
import { navigatorHandler } from '@brushes/utils';
import { useComponent } from '@brushes/simulate-component';

const initialAddressListBtn = {
  borderColor: '#000000',
  color: '#FFFFFF',
  btnColor: '#000000',
  btnShape: '20px',
  paddingTop: 10,
  paddingBottom: 10
};

const AddressListBtnJsx: React.FC<typeof initialAddressListBtn> = ({
  borderColor,
  color,
  btnColor,
  btnShape,
  paddingTop,
  paddingBottom
}) => {
  const { View } = useComponent();
  return (
    <View
      className={'addressListBtnWrap'}
      style={{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`
      }}
    >
      <View
        style={{ borderRadius: btnShape, borderColor, color, backgroundColor: btnColor }}
        className={'addressListBtn'}
        onClick={() => navigatorHandler('addressEditor')}
      >
        + 新增地址
      </View>
    </View>
  );
};

export const AddressListBtn = memo(AddressListBtnJsx);
