import { queryProvincePage } from 'qj-b2c-api';
import {useEffect, useState} from 'react';


export function useProvince() {
  const [options, setOption] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await queryProvincePage();
      const arr = data.list.map((item: { provinceCode: any; provincName: any; }) => {
        return {
          value: item.provinceCode,
          label: item.provincName
        }
      });
      setOption(arr)
    })()
  }, [])

  return {
    options
  }
}
