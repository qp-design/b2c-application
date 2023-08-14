import { useComponent } from '@brushes/simulate-component';
import { useCartTop } from 'qj-mobile-store';
import { Dispatch, useMemo } from 'react';
interface cartTopType {
  dispatchPageStore: Dispatch<any>;
  btnStyle: boolean;
  borderColor: string;
  textColor: string;
  btnColor: string;
  btnShape: string;
  $_dataSource: {
    cartIsEditor: boolean;
  };
}

export const CartTop: React.FC<cartTopType> = ({
  dispatchPageStore,
  $_dataSource = {
    cartIsEditor: false
  },
  btnStyle,
  borderColor,
  textColor,
  btnColor,
  btnShape
}) => {
  const { View } = useComponent();
  const { cartIsEditor } = $_dataSource;
  const { editorImpl } = useCartTop(dispatchPageStore);
  const buttonStyle: React.CSSProperties = useMemo(() => {
    return {
      border: btnStyle ? `2px solid ${borderColor}` : '',
      color: btnStyle ? textColor : '',
      background: btnStyle ? btnColor : '',
      borderRadius: btnStyle ? btnShape : ''
    };
  }, [btnStyle, borderColor, textColor, btnColor, btnShape]);
  return (
    <View className={'cart-edit'}>
      <View className={'btn'} onClick={editorImpl} style={buttonStyle}>
        {!cartIsEditor ? '编辑' : '完成'}
      </View>
    </View>
  );
};
