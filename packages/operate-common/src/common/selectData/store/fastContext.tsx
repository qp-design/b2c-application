//@ts-nocheck
import { createFastContext } from '@brushes/utils';

export type optionType = {
  label: string;
  value: string;
  isDefault?: boolean;
};

type ColumnsType = [
  {
    title: '名称';
    dataIndex: 'label';
  },
  {
    title: 'Code';
    dataIndex: 'value';
  }
];

export type dataTypeEum = 'pageQuery' | 'pageStore';

export interface DataType {
  prevKey: {
    value: string;
    type: dataTypeEum;
  };
  nextKey: string;
}

type InitType = {
  open: boolean;
  columns: ColumnsType;
  componentOption: Array<optionType>;
  storeOption: Array<optionType>;
  queryOption: Array<optionType>;
  data: Array<optionType>;
  selectedDownStream: Array<string>;
  selectedUpStream: Array<DataType>;
};

const init = {
  open: false,
  columns: [
    {
      title: '名称',
      dataIndex: 'label'
    },
    {
      title: 'Code',
      dataIndex: 'value'
    }
  ],
  componentOption: [],
  storeOption: [],
  queryOption: [],
  data: [],
  selectedDownStream: [],
  selectedUpStream: []
};

//@ts-ignore
export const { Provider: FastContextProvider, useStore: useFastStore } =
  createFastContext<InitType>(init);
