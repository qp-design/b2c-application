import { Button, FormInstance, Space, message } from 'antd';
import { PictureJsx } from './picture';
import React, { useRef } from 'react';
import { useLowCodeGraph } from '@brushes/qj-shared-library';
import { NamePath } from '@brushes/form';
import { isEmpty } from 'lodash-es';
// const { get, isEmpty} = _;
interface Props {
  name: NamePath;
  handleCancel: () => void;
  form: FormInstance;
}

const TabsPic: React.FC<Props> = ({ handleCancel, name, form, ...props }) => {
  const monitorInstance = useLowCodeGraph();
  const defaultValue = form.getFieldValue(name);
  const ref = useRef<Array<string | number>>([]);

  const onValueChange = (selectedRowKeys: any) => {
    ref.current = selectedRowKeys.target.value;
  };

  const saveImpl = () => {
    form.setFieldValue(name, ref.current);
    const values = form.getFieldsValue();
    const { selectImg = [] } = values;
    const noEmpty = selectImg.some((item: any) => isEmpty(item.imgUrl));
    if (noEmpty) {
      message.error('有的图片未上传');
      return;
    }
    monitorInstance.updateNode(values);
    handleCancel();
  };

  return (
    <>
      <PictureJsx name={name} onValueChange={onValueChange} defaultValue={defaultValue} />
      <div style={{ textAlign: 'right', marginTop: 20, paddingBottom: 10 }}>
        <Space align={'end'}>
          <Button onClick={handleCancel}>取消</Button>
          <Button type="primary" onClick={saveImpl}>
            保存
          </Button>
        </Space>
      </div>
    </>
  );
};

export default TabsPic;
