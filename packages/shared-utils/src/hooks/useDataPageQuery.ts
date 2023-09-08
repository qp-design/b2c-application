import { useMemo } from 'react';

export const useDataPageQuery = (rest: { [v: string]: any }, param: string) => {
  return useMemo(() => {
    const { $_pageQuery = {} } = rest;
    const key = $_pageQuery[param];
    return rest[key];
  }, [rest]);
};
