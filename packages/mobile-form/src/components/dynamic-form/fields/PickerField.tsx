import { useComponent } from '@brushes/simulate-component';
import { Space } from 'antd-mobile'
import {useEffect, useMemo, useState} from 'react';
const PickField = ({
  options = [],
  placeholder = '请选择',
  ...restProps
}: {
  options: Array<{label: string; value: string}>;
  [v: string]: any;
  onChange: (e: any) => void
}) => {
  const optionName = useMemo(() => options.map(item => item.label), [options]);
  const { Picker } = useComponent();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue('');
  }, [optionName]);

  const changeImpl = (e: any) => {
    const ind = e.detail.value;
    const { value, label } = options[ind];
    restProps.onChange(value)
    setValue(label);
  }

  return (
    <Picker mode='selector' range={optionName} onChange={changeImpl}>
       { !value ? placeholder : value }
    </Picker>
  );
};
export default PickField;
