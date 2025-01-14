import { useEffect, useMemo } from 'react';
import './index.scss';
import { Tabs } from 'antd';
import { QjIcon } from '@brushes/share-resource';
import Template from '@/common/template';
import ModuleC from './components/moduleC';
import * as Materials from 's-material-react';
import { useMaterialGraph, NodeGraph } from '@brushes/qj-shared-library';

const App = ({
  defaultValue,
  pageConfig,
  menuConfig = undefined,
  appendMaterial = {}
}: {
  defaultValue: NodeGraph;
  pageConfig: { [v: string]: any };
  menuConfig?: Array<any>;
  appendMaterial?: any;
}) => {
  const expGraph = useMaterialGraph();
  const tep = useMemo(() => {
    const flag = location.href.includes('platform=B2C') && process.env.NODE_ENV === 'development';
    const path = window.location.host.includes('lcdev') ? 'dev' : '';
    return {
      url: flag
        ? 'http://localhost:4002/remoteEntry.js'
        : `https://operate${path}.saas.qjclouds.com/remoteEntry.js?id=${new Date().valueOf()}`,
      scope: `qj_operate`,
      module: './template'
    };
  }, []);
  useEffect(() => {
    expGraph.init({ ...Materials, ...appendMaterial });
  }, []);
  const items = [
    {
      label: (
        <>
          <QjIcon name={'icon-combination'} />
          组件
        </>
      ),
      key: 'item-1',
      children: <ModuleC menuConfig={menuConfig} defaultValue={defaultValue} pageConfig={pageConfig} />
    }, // 务必填写 key
    {
      label: (
        <>
          <QjIcon name={'icon-a-1'} />
          模版
        </>
      ),
      key: 'item-2',
      children: <Template port={tep} materials={{ ...Materials, ...appendMaterial }} />
    }
  ];

  return (
    <div className={'materials-container'}>
      <Tabs items={items} className={'tabs'} />
    </div>
  );
};

export default App;
