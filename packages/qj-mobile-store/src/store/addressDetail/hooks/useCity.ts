import { queryAreaPage } from 'qj-b2c-api';
import { useEffect, useRef, useState } from 'react';

const localCity: {
  [v: string]: Array<{ label: string; value: string }>;
} = {
  '1': [
    {
      label: '北京市',
      value: '1'
    }
  ],
  '2': [
    {
      label: '上海市',
      value: '2'
    }
  ],
  '3': [
    {
      label: '天津市',
      value: '3'
    }
  ],
  '4': [
    {
      label: '重庆市',
      value: '4'
    }
  ]
};
export function useCity(form: any) {
  const isMounted = useRef(true);
  const [options, setOption] = useState<Array<{ label: string; value: string }>>([]);
  const provinceCode = form.getFieldValue('provinceCode');
  useEffect(() => {
    (async () => {
      if (!isMounted.current) {
        form.setFieldValue('cityCode', undefined);
        form.setFieldValue('areaCode', undefined);
      }

      if (!provinceCode) {
        setOption([]);
        return;
      }
      if (['1', '2', '3', '4'].includes(provinceCode)) {
        setOption(localCity[provinceCode]);
        return;
      }
      const data = await queryAreaPage({ provinceCode });
      const arr = data.list.map((item: { areaName: any; areaCode: any }) => {
        return {
          value: item.areaCode,
          label: item.areaName
        };
      });
      setOption(arr);
    })();
    return () => {
      isMounted.current = false;
    };
  }, [provinceCode, form]);

  return {
    options
  };
}