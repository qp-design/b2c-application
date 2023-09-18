import { dataTypeEum, useFastStore } from '../store';

export function useUpSelectCommon() {
  const [componentOption] = useFastStore((state) => state['componentOption']);
  const [queryOption] = useFastStore((state) => state['queryOption']);
  const [storeOption] = useFastStore((state) => state['storeOption']);
  const showSelectValue = (param: string) => {
    const { value, label } =
      componentOption.find((item) => item.value === param) || {};
    return `${label} (${value})`;
  };

  const showPrevValue = ({
    value: param,
    type
  }: {
    value: any;
    type: dataTypeEum;
  }) => {
    const isStore = type === 'pageStore';
    const resultArray = isStore ? storeOption : queryOption;
    const { value, label } =
      resultArray.find((item) => item.value === param) || {};
    return `${label} (${value})`;
  };

  return {
    showSelectValue,
    showPrevValue
  };
}

export function useUpSelect() {
  const [selectedUpStream, setUpStream] = useFastStore(
    (state) => state['selectedUpStream']
  );
  const confirm = (ind: number) => {
    const newArr = [...selectedUpStream];
    newArr.splice(ind, 1);
    setUpStream({
      selectedUpStream: newArr
    });
  };

  return {
    confirm
  };
}
