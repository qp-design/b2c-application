import {queryAreaPage} from 'qj-b2c-api';
import {useEffect, useState} from 'react';

const localCity: {
  [v: string]: Array<{label: string; value: string}>
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
}
export function useArea(form: any) {
  const [options, setOption] = useState([]);
  const cityCode = form.getFieldValue('cityCode')
  useEffect(() => {
    (async () => {
      form.setFieldValue('areaCode', undefined);
      if(!cityCode) {
        setOption([]);
        return;
      }
      let params = {};

      if(['1', '2', '3', '4'].includes(cityCode)) {
        params = { provinceCode: cityCode}
      } else {
        params = { areaParentCode: cityCode}
      }

      const data = await queryAreaPage(params);
      const arr = data.list.map((item: { areaName: any; areaCode: any; }) => {
        return {
          value: item.areaCode,
          label: item.areaName
        }
      });
      setOption(arr)
    })()
  }, [cityCode, form])

  return {
    options
  }
}
