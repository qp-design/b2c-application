import { Radio, Space } from 'antd-mobile';
import { FormInstance } from 'antd-mobile/es/components/form';

type emums = 'vertical' | 'horizontal';
export default function RadioGroupField({
  form,
  options = [],
  optionsName = 'label',
  optionsKey = 'value',
  direction = 'horizontal',
  ...extraProps
}: {
  form: FormInstance;
  direction?: emums;
  options?: Array<any>;
  optionsName?: string | undefined;
  optionsKey?: string | undefined;
}) {
  return (
    <Radio.Group {...extraProps}>
      <Space direction={direction}>
        {options.map(({ direction = 'horizontal', ...restItem }, idx) => (
          <Space key={idx} direction={direction}>
            <Radio value={restItem[optionsKey]}>{restItem[optionsName]}</Radio>
          </Space>
        ))}
      </Space>
    </Radio.Group>
  );
}
