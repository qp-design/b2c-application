import { isEmpty } from 'lodash-es';
import { message } from 'antd';
import { DataType, dataTypeEum } from '../store/fastContext';
import { useFastStore } from '../store';

export const useUpData = (type: dataTypeEum) => {
  const [selectedUpStream, setUpStream] = useFastStore((state) => state['selectedUpStream']);
  const [storeOption] = useFastStore((state) => state['storeOption']);
  const [queryOption] = useFastStore((state) => state['queryOption']);
  const [componentOption] = useFastStore((state) => state['componentOption']);

  const isExistImpl = (values: DataType) => {
    const { nextKey } = values;
    const result = selectedUpStream.find((item) => item.nextKey === nextKey) || {};
    return !isEmpty(result);
  };

  const transformImpl = (values: any) => {
    const { prevKey, nextKey } = values;
    return {
      prevKey: {
        value: prevKey,
        type
      },
      nextKey
    };
  };

  const onSubmit = (values: any, suc: any) => {
    suc();
    const transValue: DataType = transformImpl(values);
    const isExister = isExistImpl(transValue);
    if (isExister) {
      message.info('映射关系已经存在!');
      return;
    }
    setUpStream({
      selectedUpStream: selectedUpStream.concat(transValue)
    });
  };

  return {
    onSubmit,
    storeOption,
    queryOption,
    componentOption,
    selectedUpStream
  };
};
