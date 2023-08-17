import { useFastStore } from '../store';
import { pagesModelTagValue } from '@/data/localModal';
import { useLowCodeGraph } from 'qj-shared-library';
import { updatePfsModelTagValueDataDomain } from 'qj-b2c-api';
import { NamePath } from '@brushes/form';
import type { FormInstance } from 'antd/es/form';
import { useEffect } from 'react';
import { isEmpty } from 'lodash-es';
import { queryModalData } from '@/hooks';
import type { optionType } from '@/common/selectData/store/fastContext';

export const useDataInit = (props: { name: NamePath; form: FormInstance; [v: string]: any }) => {
  const { name, form, ...rest } = props;
  const { connect = [], dispatchParams = [] } = form.getFieldValue(name) || {};
  const [dataOption, setData] = useFastStore((state) => state['data']);
  const monitorInstance = useLowCodeGraph();
  const [open, setOpen] = useFastStore((state) => state['open']);
  const [selectedDownStream, setDownStream] = useFastStore((state) => state['selectedDownStream']);
  const [selectedUpStream, setUpStream] = useFastStore((state) => state['selectedUpStream']);
  const [, setComponentOption] = useFastStore((state) => state['componentOption']);
  const [, setQueryOption] = useFastStore((state) => state['queryOption']);
  const [, setStoreOption] = useFastStore((state) => state['storeOption']);

  useEffect(() => {
    (async () => {
      try {
        const { modeId } = monitorInstance;
        let { data } = pagesModelTagValue[modeId] || {};
        if (isEmpty(data) || !data) {
          const { data: result } = await queryModalData(modeId);
          data = result;
        }
        console.log(36, data);
        computedData(data, 'first');
      } catch (err) {}
    })();
  }, []);

  const pushStoreImpl = (storeOption: Array<optionType>, data: Array<optionType>) => {
    const arr = storeOption.map((item) => item.value);
    let result = [];
    for (let item of data) {
      if (!arr.includes(item.value)) {
        result.push(item);
      }
    }
    return result;
  };

  const computedData = (params: { pageQuery: Array<any>; pageStore: Array<any> }, isFirst = '') => {
    const { pageQuery = [], pageStore = [] } = params || {};
    const queryOption = pageQuery.map(({ label, value }) => ({
      label,
      value
    }));

    const storeOption = pageStore.map(({ label, value }) => ({
      label,
      value
    }));

    let arr: Array<optionType> = [];
    const {
      initialValue: { data = [], componentOption = [] }
    } = rest;
    if (isFirst) {
      arr = pushStoreImpl(storeOption, data);
      setData({
        data
      });
      setComponentOption({
        componentOption
      });
    }

    setQueryOption({
      queryOption
    });
    setStoreOption({
      storeOption: storeOption.concat(arr)
    });
  };

  const openImpl = () => {
    setUpStream({
      selectedUpStream: connect
    });
    setDownStream({
      selectedDownStream: dispatchParams
    });
    setOpen({ open: true });
  };

  const cancel = () => {
    setOpen({ open: false });
  };

  const confirm = async () => {
    const { modeId } = monitorInstance;
    const { data, id } = pagesModelTagValue[modeId];

    const storeResult = computedImpl(selectedDownStream);
    const appendArray = pushStoreImpl(data.pageStore, storeResult);
    data.pageStore.push(...appendArray);

    saveImpl();

    try {
      await updatePfsModelTagValueDataDomain({
        modelTagvalueCode: modeId,
        modelTagvalueId: id,
        modelTagvalueData: JSON.stringify(data)
      });

      // 更新下
      pagesModelTagValue[modeId] = {
        data: data,
        id: id
      };
      computedData(data);
      setOpen({ open: false });
    } catch (err) {}
  };

  const saveImpl = () => {
    form.setFieldValue(name, {
      connect: selectedUpStream,
      dispatchParams: selectedDownStream
    });
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
  };

  const computedImpl = (params: Array<any>) => {
    const result = [];
    for (let i of dataOption) {
      const flag = params.includes(i.value);
      if (flag) {
        result.push(i);
      }
    }
    return result;
  };

  return {
    openImpl,
    cancel,
    confirm,
    open,
    connect,
    dispatchParams
  };
};
