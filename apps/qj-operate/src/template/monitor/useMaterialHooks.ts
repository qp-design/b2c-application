import { getPfsModel, queryUsePfsModelPage } from 'qj-b2b-api';
import { use } from './use';
import { get, orderBy } from 'lodash-es';
import lz from 'lzutf8';

const query = queryUsePfsModelPage();

let cache = new Map();

function fetchData(params) {
  if (!cache.has(params)) {
    cache.set(params, getData(params));
  }
  return cache.get(params);
}

function getData(modelId) {
  return getPfsModel({ modelId });
}

export const useNodes = (id: number, ind: number) => {
  const { modelConfig } = use(fetchData(id));
  let json = /^{/.test(modelConfig) ? modelConfig : lz.decompress(lz.decodeBase64(modelConfig));
  let data = JSON.parse(json || '{}');
  console.log(25, data);
  return data.nodeGraph;
};

export const useMaterialHooks = () => {
  const result = use(query);
  const menu = get(result, ['supQueryResult', 'list'], []);
  const IdsImpl = () => {
    let ids = [];
    for (let item of menu) {
      if (['goodDetail', 'orderDetermine'].includes(item.menuOpcode)) {
        ids.push({
          id: item.modelId,
          menuOpcode: item.menuOpcode
        });
      }
    }

    return orderBy(ids, ['menuOpcode']);
  };

  // ids.splice(1, 0, ids[0]);
  return IdsImpl();
};
