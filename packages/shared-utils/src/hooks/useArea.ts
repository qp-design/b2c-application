import { queryAreaPage } from 'qj-b2c-api';
import { useEffect, useRef, useState } from 'react';

export function useArea(form: any) {
  const isMounted = useRef(true);
  const [options, setOption] = useState([]);
  const cityCode = form.getFieldValue('cityCode');
  const provinceCode = form.getFieldValue('provinceCode');
  useEffect(() => {
    (async () => {
      if (!isMounted.current) {
        form.setFieldValue('areaCode', undefined);
      }
      if (!cityCode) {
        setOption([]);
        return;
      }
      let params = {};

      if (['1', '2', '3', '4'].includes(cityCode)) {
        params = { provinceCode: cityCode };
      } else {
        params = { areaParentCode: cityCode };
      }

      const data = await queryAreaPage(params);
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
  }, [cityCode, form, provinceCode]);

  return {
    options
  };
}
