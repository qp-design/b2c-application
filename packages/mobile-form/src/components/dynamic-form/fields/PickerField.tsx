import { useComponent } from '@brushes/simulate-component';
import { useMemo } from 'react';
const PickField = ({
  options = [],
  placeholder = '请选择',
  value = '',
  onChange = (e: any) => {},
  name
}: {
  placeholder?: string;
  name: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onChange: (e: any) => void;
}) => {
  const { Picker } = useComponent();
  const optionName = useMemo(
    () => options.map((item) => item.label),
    [options]
  );

  const showName = useMemo(() => {
    const { label = '' } =
      options.find((item: any) => item.value === value) || {};
    return label;
  }, [value, options]);

  const changeImpl = (e: any) => {
    const ind = e.detail.value;
    const { value } = options[ind];
    onChange(value);
  };

  return (
    <Picker
      value={value}
      mode="selector"
      range={optionName}
      onChange={changeImpl}
    >
      {!value ? placeholder : showName}
    </Picker>
  );
};
export default PickField;
