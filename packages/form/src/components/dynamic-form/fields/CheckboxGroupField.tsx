import { Checkbox, FormInstance } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { NamePath } from '@/components';

export default function CheckboxGroupField({
  form,
  options = [],
  optionsName = 'label',
  optionsKey = 'value',
  dependencySingle,
  dependencies,
  ...extraProps
}: {
  form: FormInstance;
  options?:
    | Array<{ [v: string]: string | number }>
    | ((e: any) => Promise<any>);
  dependencies?: NamePath;
  dependencySingle?: NamePath;
  optionsName?: string | undefined;
  optionsKey?: string | undefined;
}) {
  const [option, setOption] = useState<
    Array<{
      // @ts-ignore
      direction?: 'horizontal' | 'vertical';
      [v: string]: string | number;
    }>
  >([]);

  const value =
    dependencySingle || dependencies
      ? form.getFieldValue(dependencySingle ? dependencySingle : dependencies)
      : '';

  useEffect(() => {
    if (typeof options !== 'function') {
      setOption(options);
    }
  }, [options]);

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

  const newOption = useMemo(() => {
    return option.map((item) => ({
      ...item,
      label: item[optionsName],
      value: item[optionsKey]
    }));
  }, [option]);

  return <Checkbox.Group {...extraProps} options={newOption}></Checkbox.Group>;
}
