import Button from 'antd/es/button';
import type { FormInstance } from 'antd/es/form';
import { useEffect, useMemo, useRef, useState, FC } from 'react';
import Modal from 'antd/es/modal/Modal';
import { LinkContent } from './linkContent';
import { goodsDetailLink, articleDetail } from './config/routerPath';
import { useLowCodeGraph } from 'qj-shared-library';
import { NamePath } from '@brushes/form';
import { noop } from 'lodash-es';
import './index.scss';

interface LinkType {
  name: NamePath;
  parentName?: Array<any>;
  type?: string; // 是否独立使用
  form: FormInstance;
  callback?: () => void;
}

export interface resultDataType {
  label: string;
  value: string;
  params?: Object;
}

export const SelectLink: FC<LinkType> = ({ callback = noop, form, type = '', name, parentName = [] }) => {
  const computedName = useMemo(() => parentName.concat(name), [parentName, name]);

  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState<resultDataType | null>(null);
  const [charArr, setCharArr] = useState<Array<any> | undefined>([]); // 商品详情的选中项
  const chosen = useRef<resultDataType | null>(form.getFieldValue(parentName.concat(name)));
  const monitorInstance = useLowCodeGraph();

  useEffect(() => {
    const defaultVal = form.getFieldValue(['selectImg', '0', 'link']);
    setResult(defaultVal);

    if (defaultVal?.value === goodsDetailLink) {
      setCharArr(defaultVal.params.spuCode);
    } else if (defaultVal?.value === articleDetail) {
      setCharArr(defaultVal.params.doclistId);
    }
  }, []);

  const chooseResult = () => {
    chosen.current = result;
    setModalShow(false);
    form.setFieldValue(computedName, chosen.current);
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
    callback();
  };

  const handleChoose = (item: resultDataType, charArrVal?: Array<any>) => {
    setCharArr(charArrVal);
    setResult(item);
  };

  return (
    <>
      {chosen.current ? (
        <div className={`handle ${type === 'alone' ? 'alone' : ''}`}>
          <span>{chosen.current?.label}</span>
          <Button type="link" onClick={() => setModalShow(true)}>
            修改
          </Button>
        </div>
      ) : (
        <Button type="link" onClick={() => setModalShow(true)} className={'init'}>
          请选择对应链接
        </Button>
      )}
      <Modal
        title={'选择链接'}
        open={modalShow}
        onCancel={() => setModalShow(false)}
        width={800}
        onOk={chooseResult}
        okText={'确认'}
        cancelText={'取消'}
      >
        {result?.label}---{result?.value}---{JSON.stringify(result?.params)}
        <LinkContent result={result} handleChoose={handleChoose} charArr={charArr} />
      </Modal>
    </>
  );
};
