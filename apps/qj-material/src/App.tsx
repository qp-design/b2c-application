import React, { useEffect } from 'react';
import './index.scss';
import Tabs from 'antd/es/tabs';
import { QjIcon } from '@brushes/share-resource';
import TemplateC from './components/templateC';
import ModuleC from './components/moduleC';
import * as Materials from 's-material-react';
import { useMaterialGraph, NodeGraph } from 'qj-shared-library';

const App = ({ defaultValue, pageConfig }: { defaultValue: NodeGraph; pageConfig: {[v:string]: any} }) => {
  const expGraph = useMaterialGraph();
  useEffect(() => {
    expGraph.init(Materials);
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
      children: <ModuleC defaultValue={defaultValue} pageConfig={pageConfig}/>
    }, // 务必填写 key
    {
      label: (
        <>
          <QjIcon name={'icon-a-1'} />
          模版
        </>
      ),
      key: 'item-2',
      children: <TemplateC />
    }
  ];

  return (
    <div className={'materials-container'}>
      <Tabs items={items} className={'tabs'} />
    </div>
  );
};

export default App;
