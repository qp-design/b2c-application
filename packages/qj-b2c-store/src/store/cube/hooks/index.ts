import { useState, useEffect } from 'react';
import { isUndefined, isEmpty } from 'lodash-es';

interface ImgType {
  imgUrl: string;
  link: string;
}

export function useCube<T = ImgType>(defaultValue: Array<T>, selectImg: Array<T>): Array<T> {
  const [list, setList] = useState(defaultValue);
  useEffect(() => {
    const computedArr = selectImg
      .filter((item) => !(isUndefined(item) || isEmpty(item)))
      .filter((item) => {
        //@ts-ignore
        return !Object.values(item).every((citem) => isUndefined(citem) || isEmpty(item));
      });
    let arr = defaultValue;
    if (!isEmpty(computedArr)) {
      arr = computedArr;
    }
    setList(arr);
  }, [selectImg]);

  return list;
}
