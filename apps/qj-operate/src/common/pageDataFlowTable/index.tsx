import type { FC } from 'react';
import { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import Button from 'antd/es/button';
import type { FormInstance } from 'antd/es/form';
import type { TableProps } from 'antd/es/table';
import { EditableCell } from './components';
import { usePageDataFlowTable, ETableType } from './hooks';
import './index.scss';
import { PageStoreDataType } from '@/common/pageDataFlowTable/config';
interface PageDataFlowTableProps {
  form: FormInstance;
  type: keyof typeof ETableType;
  defaultValue: ColumnsType<any>;
  rowSelection?: TableProps<any>['rowSelection'];
  selectedRows?: Array<PageStoreDataType>;
}
export const PageDataFlowTable: FC<
  Omit<PageDataFlowTableProps, 'rowSelection' | 'selectedRows'> &
    (
      | Required<Pick<PageDataFlowTableProps, 'rowSelection' | 'selectedRows'>>
      | Partial<Record<'rowSelection' | 'selectedRows', never>>
    )
> = ({ rowSelection, selectedRows, type, defaultValue, form }) => {
  const { data, columns, save } = usePageDataFlowTable(type, defaultValue, form);
  return (
    <div className={'pageArgs-container'}>
      <Table
        rowSelection={rowSelection}
        pagination={false}
        dataSource={data}
        sticky
        columns={columns}
        components={{ body: { cell: EditableCell } }}
      />
      {type === 'PAGE_ARGS' && (
        <Button type="dashed" onClick={() => save!(String(+new Date()))}>
          新增
        </Button>
      )}
      {!!selectedRows?.length && (
        <div
          style={{
            display: 'grid',
            gridTemplate: '1fr/repeat(2,auto)',
            alignItems: 'start',
            justifyContent: 'start',
            gap: '10px'
          }}
        >
          <div>已选择:</div>
          {Array.isArray(selectedRows) && selectedRows.map((item) => `${item.title}(${item.code})`)}
        </div>
      )}
    </div>
  );
};
