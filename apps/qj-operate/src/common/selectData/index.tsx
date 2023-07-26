//@ts-nocheck
import { Button, Descriptions, Modal, Divider, Space, Tag } from 'antd';
import { QjIcon } from '@brushes/share-resource';
import { UpDataComponent, DownDataComponent } from '@/common/selectData/components';
import { FastContextProvider, useFastStore } from './store';
import { SelectTagComponent } from './components/SelectTagComponent';
import { useDataInit } from './hooks';

const WrapInfo = () => {
  const [componentOption] = useFastStore((state) => state['componentOption']);
  return (
    <>
      <Divider orientation="left">当前组件数据流入参</Divider>
      <Space size={[0, 8]} wrap>
        {componentOption.map((item: any) => (
          <Tag key={item.value} color="default">
            {item.label}({item.value})
          </Tag>
        ))}
      </Space>
      <p>上游是组件接入数据，下游是组件输出数据输出到页面store，可以供页面内其他组件使用</p>
    </>
  );
};

const WrapData = () => {
  return (
    <>
      <WrapInfo />
      <Descriptions title="" bordered>
        <Descriptions.Item labelStyle={{ width: 80 }} label="上游" span={3}>
          <UpDataComponent />
        </Descriptions.Item>
        <Descriptions.Item label="下游" span={3}>
          <DownDataComponent />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

const ShowDataSelect = ({ selectedUpStream, selectedDownStream }) => {
  return (
    <>
      {!(selectedUpStream + selectedDownStream) ? (
        <Button icon={<QjIcon name={'icon-zengjia'} />} type={'dashed'}>
          添加
        </Button>
      ) : (
        <>
          <SelectTagComponent layout="vertical" selectedData={selectedUpStream} title={'上游'} isOperate={false} />
          <SelectTagComponent
            layout="vertical"
            selectedData={selectedDownStream}
            type={'down'}
            title={'下游'}
            isOperate={false}
          />
        </>
      )}
    </>
  );
};
const ComponentWrap = ({ cancel, confirm, open }) => {
  return (
    <Modal onCancel={cancel} okText={'确认'} onOk={confirm} width={800} title="数据流" centered open={open}>
      <WrapData />
    </Modal>
  );
};

const WrapRoot = (props) => {
  const { openImpl, cancel, confirm, open, dispatchParams, connect } = useDataInit(props);
  return (
    <>
      <div className={'pointer'} onClick={openImpl}>
        <ShowDataSelect selectedDownStream={dispatchParams} selectedUpStream={connect} />
      </div>
      <ComponentWrap cancel={cancel} confirm={confirm} open={open} />
    </>
  );
};

export const SelectData = (props) => {
  return (
    <FastContextProvider>
      <WrapRoot {...props} />
    </FastContextProvider>
  );
};
