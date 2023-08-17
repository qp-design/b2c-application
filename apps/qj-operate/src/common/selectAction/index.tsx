import { type FC, useMemo } from 'react';
import Button from 'antd/es/button';
import Descriptions from 'antd/es/descriptions';
import type { FormInstance } from 'antd/es/form';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/es/modal/Modal';
import { ActionContextProvider, useDataInit, useSelectAction, useSubmit } from './hooks';
import { DynamicForm } from '@brushes/form';
import { formConfig } from '@/common/selectAction/config';
import { ShowExtendParams } from '@/common/selectAction/component';
import { get } from 'lodash-es';
interface SelectActionProps {
  name: [string, string];
  form: FormInstance;
}

const WrapForm: FC<{ initialValue: any; onClose: () => void; [v: string]: any }> = ({
  onClose,
  initialValue,
  ...props
}) => {
  const { submit } = useSubmit(props.form, props.name, onClose);
  return <DynamicForm initialValues={initialValue} onSubmit={submit} fields={formConfig} saveText={'保存'} />;
};

const ShowDefaultQuery = ({ defaultOption }: { defaultOption: Array<{ label: string; value: string }> }) => {
  return (
    <div className={'up-data-select-info'}>
      {defaultOption.map((item: { label: string; value: string }) => (
        <Button key={item.value}>
          {item.label}({item.value})
        </Button>
      ))}
    </div>
  );
};
const DataInfo = ({ menuOpcode, ...rest }: { menuOpcode: string; [v: string]: any }) => {
  const { onOpen } = useSelectAction();
  const showName = useMemo(() => {
    return get(rest, 'data.target', {});
  }, [menuOpcode]);
  return (
    <div onClick={onOpen}>
      {!menuOpcode ? (
        <Button type={'dashed'} icon={<PlusOutlined />}>
          添加
        </Button>
      ) : (
        <>
          <Descriptions size={'small'} layout={'vertical'} title="" bordered>
            <Descriptions.Item span={3} label="页面">
              {showName.label}({showName.value})
            </Descriptions.Item>
            <Descriptions.Item span={3} label="默认参数">
              <ShowDefaultQuery defaultOption={rest.defaultOption} />
            </Descriptions.Item>
            <Descriptions.Item span={3} label="扩展参数">
              <ShowExtendParams extendOption={rest.extendOption} />
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </div>
  );
};

const SelectActionForm = ({ data, ...props }: { data: any }) => {
  const { isOpen, onClose } = useSelectAction();
  return (
    <Modal footer={null} centered open={isOpen} title={'行为流'} destroyOnClose={true} onCancel={onClose}>
      <WrapForm initialValue={data} {...props} onClose={onClose} />
    </Modal>
  );
};

export const SelectComponent: FC<SelectActionProps> = (props) => {
  const { menuOpcode, data, ...rest } = useDataInit(props.form, props.name);
  return (
    <>
      <DataInfo menuOpcode={menuOpcode} data={data} {...rest} />
      <SelectActionForm data={data} {...props} />
    </>
  );
};

export const SelectAction: FC<SelectActionProps> = (props) => {
  return (
    <ActionContextProvider>
      <SelectComponent {...props} />
    </ActionContextProvider>
  );
};
