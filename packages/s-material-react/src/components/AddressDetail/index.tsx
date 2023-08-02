//@ts-nocheck
import { memo, type FC } from 'react';
import {config, transformConfig} from './config';
import { useComponent } from '@brushes/simulate-component';
import {DynamicForm} from '@brushes/mobile-form';
import {useEditAddress} from 'qj-mobile-store';

interface AddressDetailProps {
  addressId?: string;
  borderColor: string;
  color: string;
  btnColor: string;
  btnShape: string;
  paddingTop: number;
  paddingBottom: number;
}
const AddressDetailJsx: FC<AddressDetailProps> = ({
  btnShape,
  btnColor,
  borderColor,
  color,
  paddingTop,
  paddingBottom
}) => {
  const { View, Button } = useComponent();
  const { onSubmit } = useEditAddress()

  return (
    <View
      className={'addressDetail'}
      style={{
        paddingBottom: paddingBottom + 'px',
        paddingTop: paddingTop + 'px'
      }}
    >
      <DynamicForm footer={
        <Button
          style={{ color, backgroundColor: btnColor, borderColor }}
          shape={btnShape}
          block
          type="submit"
          size="large"
        >
          提交
        </Button>
      } transformSubmitDataConfig={transformConfig} onSubmit={onSubmit} fields={config}/>
    </View>
  );
};

export const AddressDetail = memo(AddressDetailJsx);
