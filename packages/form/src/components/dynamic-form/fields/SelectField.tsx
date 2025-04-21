import { FormInstance, Select } from 'antd';
import { useState, useEffect } from 'react';
import { NamePath } from '@/components';

const { Option } = Select;

const SelectFieldSearch = ({
  options = [],
  optionsName = 'label',
  optionsKey = 'value',
  form,
  allowClear = true,
  dependencies,
  ...restProps
}: {
  dependencies?: NamePath;
  form: FormInstance;
  allowClear?: boolean;
  options?:
    | Array<{ [v: string]: string | number }>
    | ((e: any) => Promise<any>);
  optionsName?: string | undefined;
  optionsKey?: string | undefined;
}) => {
  const [option, setOption] = useState<Array<{ [v: string]: string | number }>>(
    []
  );
  const value = dependencies ? form.getFieldValue(dependencies) : '';
  useEffect(() => {
    (async () => {
      try {
        const data = await (typeof options !== 'function'
          ? Promise.resolve(options)
          : options(value));
        setOption(data);
      } catch (e) {
        setOption([]);
      }
    })();
  }, [value]);

  return (
    <Select
      allowClear={allowClear}
      {...restProps}
      optionLabelProp="label"
      optionFilterProp="children"
      getPopupContainer={(trigger) => {
        if (trigger) {
          return trigger.parentNode;
        } else {
          return document.body;
        }
      }}
    >
      {option.map((item) => (
        <Option
          key={item[optionsKey]}
          disabled={Boolean(item.disabled)}
          label={item[optionsName]}
          value={item[optionsKey]}
        >
          {item[optionsName]}
        </Option>
      ))}
    </Select>
  );
};
export default SelectFieldSearch;
