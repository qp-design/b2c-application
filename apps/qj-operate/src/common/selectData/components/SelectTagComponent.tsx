//@ts-nocheck
import { QjIcon } from '@brushes/share-resource';
import { Button, Popconfirm, Descriptions } from 'antd';
import { useUpSelect, useDownSelect, useUpSelectCommon, useDownSelectCommon } from '../hooks';
import { Fragment, memo } from 'react';

const DeleteButton = ({ ind, confirm }: { ind: number; confirm: (e: number) => void }) => {
  return (
    <Popconfirm
      data-id={ind}
      title="待确认"
      description="你要删除这个配置?"
      onConfirm={() => confirm(ind)}
      okText="Yes"
      cancelText="No"
    >
      <Button style={{ marginLeft: 5 }} icon={<QjIcon name={'icon-jianqu'} />} />
    </Popconfirm>
  );
};
const UpDeleteButton = ({ ind }: { ind: number }) => {
  const { confirm } = useUpSelect();
  return <DeleteButton confirm={confirm} ind={ind} />;
};

const DownDeleteButton = ({ ind }: { ind: number }) => {
  const { confirm } = useDownSelect();
  return <DeleteButton confirm={confirm} ind={ind} />;
};

const DownTagComponent = ({ selectedData, isOperate }) => {
  const { showSelectValue } = useDownSelectCommon();
  return (
    <>
      {selectedData.map((item, ind) => (
        <div className={'up-data-select-info'} key={ind}>
          <Button>{showSelectValue(item).value}</Button>
          {isOperate && !showSelectValue(item).isDefault ? <DownDeleteButton ind={ind} /> : null}
        </div>
      ))}
    </>
  );
};

const UpTagComponent = memo(({ selectedData, isOperate }) => {
  const { showPrevValue, showSelectValue } = useUpSelectCommon();
  return (
    <Fragment>
      {selectedData.map((item, ind) => (
        <div className={'up-data-select-info'} key={ind}>
          <Button>{showPrevValue(item.prevKey)}</Button>
          <QjIcon
            style={{
              fontSize: 24,
              display: 'block',
              margin: '0 8px 0 8px'
            }}
            name={'icon-arrow-right'}
          />
          <Button>{showSelectValue(item.nextKey)}</Button>
          {isOperate && <UpDeleteButton ind={ind} />}
        </div>
      ))}
    </Fragment>
  );
});

export const SelectTagComponent = memo(
  ({ layout = 'horizontal', type = 'up', isOperate = true, title = '已选择', ...rest }) => {
    return (
      <Descriptions bordered layout={layout} title="" size={'small'}>
        <Descriptions.Item labelStyle={{ width: isOperate ? 80 : 20, fontWeight: 'bold' }} label={title}>
          {type === 'up' ? (
            <UpTagComponent isOperate={isOperate} {...rest} />
          ) : (
            <DownTagComponent isOperate={isOperate} {...rest} />
          )}
        </Descriptions.Item>
      </Descriptions>
    );
  }
);
