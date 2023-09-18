import type { FC, MutableRefObject } from 'react';
import type { CollapseProps } from 'antd';
import { Button, Collapse, Form, FormInstance } from 'antd';
import { useState } from 'react';
import { dynamicFormFields, type FieldType } from '@brushes/form';
interface OperateProps {
  formConfig: Array<FieldType>;
  form: FormInstance;
  isAdd?: boolean;
  onSave?: (form: FormInstance) => void;
  onSaveAs?: (form: FormInstance) => void;
  onExit?: () => void;
}
export const Operate: FC<OperateProps> = ({ formConfig, form, onExit, onSave, onSaveAs, isAdd }) => {
  const [activeKey, setActiveKey] = useState('1');
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <div className={'pageTitle'}>模板设置</div>,
      children: <Form form={form}>{dynamicFormFields(formConfig, form)}</Form>
    }
  ];
  return (
    <div className="editor-container-operate">
      <div className="editor-container-operate-top">
        <Button type="primary" onClick={() => onSave(form)}>
          {isAdd ? '新增' : '保存'}
        </Button>
        {!isAdd && (
          <Button type="primary" onClick={() => onSaveAs(form)}>
            另存
          </Button>
        )}
        <Button type="primary" onClick={onExit}>
          退出
        </Button>
      </div>
      <Collapse
        style={{ background: '#fff' }}
        activeKey={[activeKey]}
        bordered={false}
        expandIconPosition={'end'}
        items={items}
      />
    </div>
  );
};
