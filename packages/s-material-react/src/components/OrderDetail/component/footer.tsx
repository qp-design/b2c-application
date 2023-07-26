//@ts-nocheck
import { antdMobile, useComponent } from '@brushes/simulate-component';
import classNames from 'classnames';
import { useOrderOperate } from 'qj-mobile-store';

const { Button } = antdMobile;

interface Otype {
  init?: () => void;
  contractId?: string | number;
  dataState: string | number;
  contractBillcode?: string;
  contractAppraise?: number;
  color?: string;
  borderColor?: string;
  btnColor?: string;
  btnShape?: string;
}

const FooterComponent: React.FC<Otype> = ({ dataState, ...rest }) => {
  return <>{['2', '-1'].includes(dataState + '') ? null : <FooterInner dataState={dataState} {...rest} />}</>;
};

interface OperateType {
  name: string;
  handler: string;
}

const FooterInner: React.FC<Otype> = ({
  dataState,
  contractAppraise,
  color,
  borderColor,
  btnColor,
  btnShape,
  ...rest
}) => {
  const { View } = useComponent();

  if ((dataState === 4 || dataState === 4) && contractAppraise !== 1) {
    dataState = 4;
  } else if ((dataState === 4 || dataState === 4) && contractAppraise === 1) {
    dataState = 5;
  }

  const { operateArray, handlerImpl } = useOrderOperate<Otype>({
    dataState,
    ...rest
  });

  return (
    <View className={'btnGroup'}>
      {operateArray.map((item: OperateType, ind: number) => (
        <Button
          style={{ color, borderColor, backgroundColor: btnColor }}
          key={ind}
          className={classNames({ btn: true, white: ind === 0, black: ind === 1 })}
          onClick={() => handlerImpl(item.handler)}
          shape={btnShape}
        >
          {item.name}
        </Button>
      ))}
    </View>
  );
};
export default FooterComponent;
