import { useEffect, useState } from 'react';
import Collapse from 'antd/es/collapse';
import { NodeGraph } from 'qj-shared-library';
import { Pages } from '@/config';
import IndexReact from './index-react';
import { isEmpty } from 'lodash-es';
import { useImmutableCallback } from '@brushes/form';
import IndexPage from './index-page';
import type { CollapseProps } from 'antd/es/collapse';

const { Panel } = Collapse;

const PageIndex = ({
  defaultValue,
  pageConfig,
  pageId = 'index'
}: {
  pageId: string;
  defaultValue: NodeGraph;
  pageConfig: any;
}) => {
  const [activedKey, setActivedKey] = useState('2');
  useEffect(() => {
    const key = !isEmpty(defaultValue) ? '2' : '1';
    setActivedKey(key);
  }, [defaultValue]);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <div className={'pageTitle'}>{Pages.title}</div>,
      children: <IndexPage key={pageId} pageConfig={pageConfig} />
    }
  ];
  const onChange = useImmutableCallback(() => {
    setActivedKey((prevState) => (prevState === '2' ? '1' : '2'));
  });

  return (
    <>
      <Collapse
        onChange={onChange}
        style={{ background: '#fff' }}
        activeKey={[activedKey]}
        bordered={false}
        expandIconPosition={'end'}
        items={items}
      />
      {!isEmpty(defaultValue) ? <IndexReact key={defaultValue.id} defaultValue={defaultValue} /> : null}
    </>
  );
};

export default PageIndex;
