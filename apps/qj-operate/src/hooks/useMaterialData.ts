import { useEffect, useState, useRef } from 'react';
import { getPfsModelTagValueDataByTginfo, updatePfsModelTagValueDataDomain } from 'qj-b2c-api';
import { useImmutableCallback } from '@brushes/utils';
import { pagesModelTagValue } from '@/data/localModal';
import { useLowCodeGraph } from '@brushes/qj-shared-library';

export const queryModalData = async (pageId: string): Promise<any> => {
  try {
    const data = await getPfsModelTagValueDataByTginfo({
      menuOpcode: pageId,
      proappCode: '021'
    });
    const parseData = JSON.parse(data.modelTagvalueData) || { pageStore: [], pageQuery: [] };
    pagesModelTagValue[pageId] = {
      data: parseData,
      id: data.modelTagvalueId
    };
    return {
      id: data.modelTagvalueId,
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
      const data = await updatePfsModelTagValueDataDomain({
        modelTagvalueCode: monitorInstance.modeId,
        modelTagvalueId: modelTagvalueId.current,
        modelTagvalueData: JSON.stringify(values)
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
