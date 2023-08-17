import type { FormInstance } from 'antd/es/form';
import Button from 'antd/es/button';
import Space from 'antd/es/space';
import message from 'antd/es/message';
import { PictureJsx } from './picture';
import { useRef, FC } from 'react';
import { useLowCodeGraph } from 'qj-shared-library';
import { NamePath } from '@brushes/form';
import { isEmpty } from 'lodash-es';

interface Props {
  name: NamePath;
  handleCancel: () => void;
  form: FormInstance;
}

const TabsPic: FC<Props> = ({ handleCancel, name, form, ...props }) => {
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
