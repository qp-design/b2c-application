import { getPfsModelDataByModelId } from 'qj-b2b-api';
import { pagesModelTagValue } from '@/data/localModal';
import lz from 'lzutf8';

export const queryModalData = async (pageId: string): Promise<any> => {
  try {
    const { dataObj: data } = await getPfsModelDataByModelId({
      modelId: pageId
    });
    let json = /^{/.test(data.modelConmod)
      ? data.modelConmod
      : lz.decompress(lz.decodeBase64(data.modelConmod));
    const parseData = JSON.parse(json) || { pageStore: [], pageQuery: [] };
    pagesModelTagValue[pageId] = {
      data: parseData,
      id: data.modelId
    };
    return {
      id: data.modelId,
      data: parseData
    };
  } catch (err) {}
};
