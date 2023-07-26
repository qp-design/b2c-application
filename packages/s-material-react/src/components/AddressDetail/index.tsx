//@ts-nocheck
import { memo, type FC, useMemo } from 'react';
import { getEnv } from '@brushes/utils';
import { config } from './config';
import { useEditAddress } from 'qj-mobile-store';
import { useComponent, antdMobile } from '@brushes/simulate-component';
import { PickChinaAddress, Skull, SwitchItem } from './components';

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
  addressId = undefined,
  btnShape,
  btnColor,
  borderColor,
  color,
  paddingTop,
  paddingBottom
}) => {
  const { View, Switch, Picker, Text } = useComponent();
  const { Form, Button, Input } = antdMobile;
  const platform = process.env.TARO_ENV;
  const flag = useMemo(() => getEnv(), []);
  const { skullShow, form, area, defaultAddress, handleArea, handleDefaultAddress, handleFinish } = useEditAddress(
    addressId,
    Form,
    flag
  );

  return (
    <View
      className={'addressDetail'}
      style={{
        height: flag ? '100%' : '667px',
        paddingBottom: paddingBottom + 'px',
        paddingTop: paddingTop + 'px'
      }}
    >
      {skullShow ? (
        <Skull />
      ) : (
        <Form
          form={form}
          layout="horizontal"
          mode="card"
          onFinish={handleFinish}
          footer={
            <Button
              style={{ color, backgroundColor: btnColor, borderColor }}
              shape={btnShape}
              block
              type="submit"
              size="large"
            >
              提交
            </Button>
          }
        >
          {config.map((item, index) => {
            return (
              <Form.Item
                key={index}
                label={item.label}
                name={item.name}
                rules={item.rules}
                trigger={item.type === 'cascader' ? 'onConfirm' : 'onChange'}
                arrow={false}
              >
                {(() => {
                  if (item.type === 'input') {
                    return <Input {...item.props} />;
                  } else if (item.type === 'switch') {
                    return platform === 'h5' ? (
                      <SwitchItem onChange={handleDefaultAddress.bind(null, 'h5')} checked={defaultAddress === '1'} />
                    ) : (
                      <Switch
                        color={'#000'}
                        onChange={handleDefaultAddress.bind(null, 'weapp')}
                        checked={defaultAddress === '1'}
                      />
                    );
                  } else if (item.type === 'cascader') {
                    return (
                      <>
                        <View className="page-section">
                          <Text>地区选择器</Text>
                          <View>
                            <Picker mode="selector" range={['美国', '中国', '巴西', '日本']} onChange={handleArea}>
                              <View className="picker">当前选择：123123123</View>
                            </Picker>
                          </View>
                        </View>
                        {/*{flag ? (*/}
                        {/*  platform === 'h5' ? (*/}
                        {/*    <PickChinaAddress form={form} handleArea={handleArea} />*/}
                        {/*  ) : (*/}
                        {/*    <picker mode={'region'} onChange={handleArea.bind(null, 'weapp')} value={area}>*/}
                        {/*      <View className={'areaWrap'}>*/}
                        {/*        {!area.provinceName*/}
                        {/*          ? '请选择所在地区'*/}
                        {/*          : `${area.provinceName}—${area.cityName}-${area.areaName}`}*/}
                        {/*      </View>*/}
                        {/*    </picker>*/}
                        {/*  )*/}
                        {/*) : (*/}
                        {/*  '请选择所在地区'*/}
                        {/*)}*/}
                      </>
                    );
                  }
                })()}
              </Form.Item>
            );
          })}
        </Form>
      )}
    </View>
  );
};

export const AddressDetail = memo(AddressDetailJsx);
