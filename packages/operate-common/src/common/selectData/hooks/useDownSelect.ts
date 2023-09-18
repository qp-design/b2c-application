import { useFastStore } from '../store';

export function useDownSelectCommon() {
  const [data] = useFastStore((state) => state['data']);
  // const [defaultDownStreamOption] = useFastStore(state => state['defaultDownStreamOption']);

  // const defaultDownStream = useMemo(() => {
  //   return defaultDownStreamOption.map(item => item.value)
  // }, [defaultDownStreamOption]);

  const showSelectValue = (param: string) => {
    const {
      value = '',
      label = '',
      isDefault
    } = data.find((item) => item.value === param) || {};
    return {
      value: `${label} (${value})`,
      isDefault
    };
  };

  return {
    showSelectValue
    // defaultDownStream
  };
}

export function useDownSelect() {
  const [selectedDownStream, setDownStream] = useFastStore(
    (state) => state['selectedDownStream']
  );

  const confirm = (ind: number) => {
    const newArr = [...selectedDownStream];
    newArr.splice(ind, 1);
    setDownStream({
      selectedDownStream: newArr
    });
  };

  return {
    confirm
  };
}
