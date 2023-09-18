//@ts-nocheck
import { Table } from 'antd';
import { useDownData } from '@/common/selectData/hooks';
import { SelectTagComponent } from './SelectTagComponent';

export const DownDataComponent = () => {
  const { data, rowSelection, columns, selectedDownStream } = useDownData();
  return (
    <>
      <h4 style={{ margin: '0 0 10px 0' }}>当前组件数据</h4>
      <Table
        pagination={false}
        rowKey={'value'}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
      <SelectTagComponent selectedData={selectedDownStream} type={'down'} />
    </>
  );
};
