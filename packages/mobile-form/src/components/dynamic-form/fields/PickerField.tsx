import { useComponent } from '@brushes/simulate-component';
import { useMemo } from 'react';
import { getEnv } from '@brushes/utils';

const PickField = ({
  options = [],
  placeholder = '请选择',
  value = '',
  disabled,
  onChange = (e: any) => {}
}: {
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  disabled?: boolean;
  onChange: (e: any) => void;
}) => {
  const isTaro = getEnv();
  const { View, Picker } = useComponent();
  const optionName = useMemo(
    () => options.map((item) => item.label),
    [options]
  );

  const showName = useMemo(() => {
    const { label = '重新选择' } =
      options.find((item: any) => item.value === value) || {};
    return label;
  }, [value, options]);

  const changeImpl = (e: any) => {
    const ind = e.detail.value;
    const { value } = options[ind];
    onChange(value);
  };

  return (
    <View className={'pickWrap'}>
      {isTaro ? (
        <Picker
          className={disabled ? 'disabled' : ''}
          disabled={disabled}
          mode="selector"
          range={optionName}
          onChange={changeImpl}
        >
          {!value ? placeholder : showName}
        </Picker>
      ) : (
        <View>{!value ? placeholder : showName}</View>
      )}
    </View>
  );
};
export default PickField;
