import { useFastStore } from '../store';

export const useDownData = () => {
  const [selectedDownStream, setDownStream] = useFastStore(
    (state) => state['selectedDownStream']
  );
  const [data] = useFastStore((state) => state['data']);
  const [columns] = useFastStore((state) => state['columns']);

  const onSelectChange = (parmamKeys: any[]) => {
    setDownStream({
      selectedDownStream: parmamKeys
    });
  };

  const rowSelection = {
    selectedRowKeys: selectedDownStream,
    onChange: onSelectChange,
    getCheckboxProps: (record: any) => ({
      disabled: record.isDefault, // Column configuration not to be checked
      name: record.name
    })
  };

  return {
    rowSelection,
    data,
    columns,
    selectedDownStream
  };
};
