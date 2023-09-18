import { useEffect, useState, useRef } from 'react';
import { getPfsModelDataByModelId, updatePfsModelDataByModelId } from 'qj-b2b-api';
import { useImmutableCallback } from '@brushes/utils';
import { pagesModelTagValue } from 'operate-common';
import { useLowCodeGraph } from '@brushes/qj-shared-library';
import lz from 'lzutf8';

export const queryModalData = async (pageId: string): Promise<any> => {
  try {
    const { dataObj: data } = await getPfsModelDataByModelId({
      modelId: pageId
    });
    let json = /^{/.test(data.modelConmod) ? data.modelConmod : lz.decompress(lz.decodeBase64(data.modelConmod));
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

export function useMaterialData() {
  const monitorInstance = useLowCodeGraph();
  const [dataSource, setDataSource] = useState({});
  const [isLoading, setLoading] = useState(true);
  const modelTagvalueId = useRef('');
  useEffect(() => {
    init();
  }, [monitorInstance.modeId]);

  const init = async () => {
    try {
      setLoading(true);
      const pageId = monitorInstance.modeId;
      if (!pageId) return;
      const { data, id } = await queryModalData(pageId);
      modelTagvalueId.current = id;
      setDataSource(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = useImmutableCallback(async (values: any, suc: any, error: any) => {
    suc();
    try {
      const params = lz.encodeBase64(lz.compress(JSON.stringify(values)));

      const data = await updatePfsModelDataByModelId({
        modelId: monitorInstance.modeId,
        modelConmod: params
      });

      pagesModelTagValue[monitorInstance.modeId] = {
        data: values,
        id: modelTagvalueId.current
      };
      suc(data.msg);
      init();
    } catch (err: any) {
      error(err.msg);
    }
  });

  return {
    dataSource,
    onSubmit,
    isLoading
  };
}
