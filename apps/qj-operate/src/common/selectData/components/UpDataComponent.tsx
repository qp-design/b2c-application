//@ts-nocheck
import Tabs from 'antd/es/tabs';
import type { TabsProps } from 'antd/es/tabs';
import { DynamicForm, FieldType } from '@brushes/form';
import { useUpData } from '../hooks';
import './index.css';
import { useMemo, memo } from 'react';
import { SelectTagComponent } from './SelectTagComponent';
import { QjIcon } from '@brushes/share-resource';
import { useFastStore } from '../store';

const DyForm = memo(({ options, componentOption, ...props }: { componentOption: Array<any>; options: Array<any> }) => {
  const formConfig: Array<FieldType> = useMemo(() => {
    return [
      {
        name: 'prevKey',
        type: 'select',
        rules: [{ required: true, message: '请选择' }],
        extraProps: {
          style: { width: 120 },
          options
        }
      },
      {
        name: 'arrow',
        type: 'slot',
        extraProps: {
          render() {
            return (
              <QjIcon
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  color: '#666'
                }}
                name={'icon-arrow-right'}
              ></QjIcon>
            );
          }
        }
      },
      {
        name: 'nextKey',
        type: 'select',
        rules: [{ required: true, message: '请选择' }],
        extraProps: {
          style: { width: 120 },
          options: componentOption
        }
      }
    ];
  }, []);
  return <DynamicForm onSubmit={() => {}} {...props} fields={formConfig} layout={'inline'} saveText={'确认'} />;
});

const PageQuery = memo(() => {
  const { onSubmit, queryOption, componentOption } = useUpData('pageQuery');
  return (
    <DyForm
      name={'nothing-query'}
      onSubmit={onSubmit}
      key={'pageQuery'}
      options={queryOption}
      componentOption={componentOption}
    />
  );
});

const PageStore = memo(() => {
  const { onSubmit, storeOption, componentOption } = useUpData('pageStore');
  return (
    <DyForm
      name={'nothing-store'}
      key={'pageStore'}
      onSubmit={onSubmit}
      options={storeOption}
      componentOption={componentOption}
    />
  );
});

// 上游
export const UpDataComponent = () => {
  const [selectedUpStream] = useFastStore((state) => state['selectedUpStream']);
  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: '1',
        label: `页面参数`,
        children: <PageQuery />
      },
      {
        key: '2',
        label: `页面Store`,
        children: <PageStore />
      }
    ],
    []
  );
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
      <SelectTagComponent selectedData={selectedUpStream} />
    </>
  );
};
