import { FormInstance, Select } from 'antd';
import { useState, useEffect } from 'react';
import { NamePath } from '@/components';
import { set } from 'lodash';

const SelectFieldSearch = ({
  options = [],
  form,
  allowClear = true,
  dependencies,
  ...restProps
}: {
  dependencies?: NamePath[];
  form: FormInstance;
  allowClear?: boolean;
  options?:
    | Array<{ [v: string]: string | number }>
    | ((e: any) => Promise<any>);
}) => {
  const [option, setOption] = useState<Array<{ [v: string]: string | number }>>(
    []
  );

  const value = dependencies
    ? dependencies.map((item) => form.getFieldValue(item) ?? '').join(',')
    : '';

  useEffect(() => {
    if (typeof options !== 'function') {
      setOption(options);
    }
  }, [options]);

  useEffect(() => {
    (async () => {
      try {
        let params = {};
        if (typeof options === 'function') {
          if (value === ',') {
            params = {};
          } else {
            const va = value.split(',');
            (dependencies || []).forEach((item, index) => {
              set(params, item, va[index]);
            });
          }
        }
        const data = await (typeof options !== 'function'
          ? Promise.resolve(options)
          : options(params));
        setOption(data);
      } catch (e) {
        setOption([]);
      }
    })();
  }, [value]);
  console.log(63, 1123);
  return (
    <Select
      allowClear={allowClear}
      options={option}
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
    ></Select>
  );
};
export default SelectFieldSearch;
