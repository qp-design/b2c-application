import { Space } from 'antd-mobile';
import { FormInstance } from 'antd-mobile/es/components/form';
import { useComponent } from '@brushes/simulate-component';

type emums = 'vertical' | 'horizontal';
export default function CheckboxGroupField({
  form,
  options = [],
  optionsName = 'label',
  optionsKey = 'value',
  description,
  direction = 'horizontal',
  ...extraProps
}: {
  form: FormInstance;
  direction?: emums;
  options?: Array<any>;
  description?: {
    key: string;
    func: Function;
  };
  optionsName?: string | undefined;
  optionsKey?: string | undefined;
}) {
  const { SmoothCheckbox, Checkbox } = useComponent();
  return (
    <SmoothCheckbox {...extraProps}>
      <Space direction={direction}>
        {options.map(({ direction = 'horizontal', ...restItem }, idx) => (
          <Checkbox key={idx} value={restItem[optionsKey]}>
            {restItem[optionsName]}
          </Checkbox>
        ))}
      </Space>
    </SmoothCheckbox>
  );
}
