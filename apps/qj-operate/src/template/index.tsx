import { Modal, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ScrollWrap } from '@brushes/shared-utils';
import { useComponent } from '@brushes/simulate-component';
import { useTemplateC } from './hooks';
import { Operate } from './components';
import { formConfig } from './config';
import './index.scss';
import { Monitor } from '@/template/monitor';
import { Suspense } from 'react';

// const { Option } = Select;
// const fakeData = [
//   {
//     id: 0,
//     label: '全部模版',
//     value: 'all'
//   },
//   {
//     id: 1,
//     label: '商务服务',
//     value: 'business'
//   },
//   {
//     id: 2,
//     label: '房产家居',
//     value: 'house'
//   },
//   {
//     id: 3,
//     label: '教育培训',
//     value: 'education'
//   },
//   {
//     id: 4,
//     label: '生活服务',
//     value: 'live'
//   },
//   {
//     id: 5,
//     label: '全部模版',
//     value: 'all'
//   }
// ];

const TemplateC = ({ materials }: { materials: Array<any> }) => {
  const [form] = Form.useForm();
  const { ScrollView } = useComponent();
  const { isAdd, open, onAdd, handleCancel, handleOk, loadTemplates, renderTemplates, saveAs } = useTemplateC(form);
  return (
    <Suspense>
      <div className={'TemplateC'}>
        <Modal
          maskClosable={false}
          footer={null}
          centered
          width={'1200'}
          title="模板编辑"
          open={open}
          onCancel={handleCancel}
        >
          <div className="editor-container">
            <div className="editor-container-preview">
              <Monitor materials={materials} />
            </div>
            <Operate
              isAdd={isAdd}
              form={form}
              formConfig={formConfig}
              onExit={handleCancel}
              onSave={handleOk}
              onSaveAs={saveAs}
            />
          </div>
        </Modal>
        {/* <Select defaultValue={'all'} style={{ width: '100%' }}>
        {fakeData.map((item) => (
          <Option value={item.value} key={item.id}>
            {item.label}
          </Option>
        ))}
      </Select> */}
        <div className={'templateWrap'}>
          <ScrollWrap id={'templateWrap'}>
            <ScrollView onScroll={() => loadTemplates()}>
              {renderTemplates}
              <div onClick={onAdd} className={'templateItem-plus'}>
                <PlusOutlined style={{ fontSize: '30px' }} />
              </div>
            </ScrollView>
          </ScrollWrap>
        </div>
      </div>
    </Suspense>
  );
};

export default TemplateC;
