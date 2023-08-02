import { CheckList, Space } from 'antd-mobile';
import { FormInstance } from 'antd-mobile/es/components/form'

type emums = 'vertical' | 'horizontal';
export default function CheckboxListField({
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
  return (
    <CheckList {...extraProps}>
      <Space direction={direction}>
        {options.map(({ direction = 'horizontal', ...restItem }, idx) => (
          <Space key={idx} direction={direction}>
            <CheckList.Item value={restItem[optionsKey]}>
              {restItem[optionsName]}
            </CheckList.Item>
            {description && description.func(restItem[description.key])}
          </Space>
        ))}
      </Space>
    </CheckList>
  );
}
