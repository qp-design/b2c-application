import { useMemo } from 'react';
import { isEmpty } from 'lodash-es';
export const useDataPageQuery = (rest: { [v: string]: any }, param: string) => {
  console.log(rest);
  return useMemo(() => {
    const { $_pageQuery = {} } = rest;
    const key = $_pageQuery[param];
    return rest[key];
  }, [rest]);
};

export const useDataPageQueryNext = (rest: { [v: string]: any }) => {
  return useMemo(() => {
    const { $_pageQuery = {} } = rest;
    if (isEmpty($_pageQuery)) {
      return rest;
    }

    const result = Object.entries($_pageQuery);
    let obj = {};
    result.forEach(([key, value]) => {
      // @ts-ignore
      obj[key] = rest[value];
    });
    return { ...rest, ...obj };
  }, [rest]);
};
