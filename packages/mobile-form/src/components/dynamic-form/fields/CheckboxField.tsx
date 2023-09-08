import { useComponent } from '@brushes/simulate-component';
import { ReactNode } from 'react';

export default function CheckboxField({
  value,
  onChange,
  initialValue,
  ...restProps
}: {
  optionValue: any;
  initialValue: { value: any; label: ReactNode };
  value: any;
  onChange: (e: any) => void;
}) {
  const { SmoothCheckbox, Checkbox } = useComponent();
  const { value: optionValue, label: labelInfo } = initialValue;
  const onChangeImpl = (e: any) => {
    const { value } = e.detail;
    onChange(value[0]);
  };

  return (
    <SmoothCheckbox value={value} onChange={onChangeImpl} {...restProps}>
      <Checkbox value={optionValue}></Checkbox>
      {labelInfo}
    </SmoothCheckbox>
  );
}
