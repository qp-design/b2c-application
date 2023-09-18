import { DynamicForm } from '@brushes/form';
import { useMaterialData } from '@/hooks';
import { formConfig, transformSubmitDataConfig } from 'operate-common';
import { Collapse, CollapseProps } from 'antd';
const OperateData = () => {
  const { dataSource, onSubmit, isLoading } = useMaterialData();
  return (
    <>
      {isLoading ? null : (
        <DynamicForm
          name={'data-operate-form'}
          transformSubmitDataConfig={transformSubmitDataConfig}
          initialValues={dataSource}
          onSubmit={onSubmit}
          fields={formConfig}
          layout="vertical"
          saveText={'保存'}
        />
      )}
    </>
  );
};

const WrapperOperate = ({ pageId }: { pageId: string }) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <div style={{ fontSize: 16, fontWeight: 600 }}>{'页面数据中心1'}</div>,
      children: <OperateData key={pageId} />
    }
  ];
  return <Collapse items={items} defaultActiveKey={[]} expandIconPosition={'end'}></Collapse>;
};

export default WrapperOperate;
