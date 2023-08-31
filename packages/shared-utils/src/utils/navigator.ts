import { navigatorHandler } from '@brushes/utils';
import { Link } from '@/type';

const fetchQuery = (defaultQuery: Array<any>, extendQuery: Array<any>, params: { [v: string]: any }) => {
  const arr = defaultQuery.concat(extendQuery);
  let obj: { [v: string]: any } = {};
  for (let i of arr) {
    obj[i] = params[i];
  }
  return obj;
};

export function navigator({ target, defaultQuery = [], extendQuery = [] }: Link, params: { [v: string]: any }) {
  const menuCode = target.value;
  const query = fetchQuery(defaultQuery, extendQuery, params);
  navigatorHandler(menuCode, query);
}
