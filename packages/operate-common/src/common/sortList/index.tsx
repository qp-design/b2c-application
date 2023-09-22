import React, { useRef, useState } from 'react';
import { QjIcon } from '@brushes/share-resource';
import { SelectLink } from '../selectLink';
import { SelectPicture } from '../selectPictureOrVideo';
import { useLowCodeGraph } from '@brushes/qj-shared-library';
import { Button } from 'antd';

export const SortList = ({
  form,
  name,
  parentName,
  showConfig,
  delConfig,
  addConfig
}: any) => {
  const monitorInstance = useLowCodeGraph();
  const [list, setList] = useState<Array<any>>(
    form.getFieldValue('columnList')
  );
  const initItem = useRef({
    imgUrl: '',
    link: {
      label: '',
      value: '',
      params: null
    }
  });

  const handleDisplay = (index: number, state: boolean) => {
    setList((prevState) => {
      prevState[index].show = !state;
      const result = [...prevState];
      form.setFieldValue(name, result);
      const values = form.getFieldsValue();
      monitorInstance.updateNode(values);
      return result;
    });
  };

  const handleSort = (index: number, direction: string) => {
    if (
      (index === 0 && direction === 'up') ||
      (index === list.length - 1 && direction === 'down')
    )
      return;
    setList((prevState) => {
      const result = [...prevState];
      direction === 'up'
        ? (result[index] = result.splice(index - 1, 1, result[index])[0])
        : (result[index] = result.splice(index + 1, 1, result[index])[0]);
      form.setFieldValue(name, result);
      const values = form.getFieldsValue();
      monitorInstance.updateNode(values);
      return result;
    });
  };

  const add = () => {
    const valueParams = form.getFieldValue(name);
    const result = [...valueParams, initItem.current];
    form.setFieldValue(name, result);
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
    setList(result);
  };

  const del = (index: number) => {
    const result = [...list];
    result.splice(index, 1);
    form.setFieldValue(name, result);
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
    setList(result);
  };

  return (
    <div className={'sortList'}>
      <ul>
        {list.map((item: any, index: number) => {
          return (
            <li key={index} className={'sortItem'}>
              <div className={'lPart'}>
                <div className={'sortItemTitle'}>{item.label}</div>
                {item.link ? (
                  <SelectLink
                    name={[index, 'link']}
                    form={form}
                    parentName={parentName}
                  />
                ) : null}
                <div className={'handleArea'}>
                  <div className={'sortGroup'}>
                    <QjIcon
                      name={'icon-shangyi'}
                      className={'icon'}
                      title={'上移'}
                      onClick={handleSort.bind(null, index, 'up')}
                    />
                    <QjIcon
                      name={'icon-xiayi'}
                      className={'icon'}
                      title={'下移'}
                      onClick={handleSort.bind(null, index, 'down')}
                    />
                  </div>
                  {showConfig ? (
                    <div
                      className={'hidePart'}
                      onClick={handleDisplay.bind(null, index, item.show)}
                    >
                      {item.show ? '隐藏' : '显示'}
                    </div>
                  ) : null}
                  {delConfig ? (
                    <Button type="link" onClick={del.bind(null, index)}>
                      删除
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className={'rPart'}>
                <SelectPicture
                  form={form}
                  name={[index, 'imgUrl']}
                  parentName={parentName}
                />
              </div>
            </li>
          );
        })}
      </ul>
      {addConfig ? (
        <Button className={'add'} type="primary" onClick={add}>
          新增
        </Button>
      ) : null}
    </div>
  );
};
