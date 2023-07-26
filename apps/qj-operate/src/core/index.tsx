import './index.scss';
import { NodeGraph } from 'qj-shared-library';
import IndexReact from './react';

const Index = ({ defaultValue, pageId, pageConfig }: { defaultValue: NodeGraph; pageId: string; pageConfig?: any }) => {
  return <IndexReact pageId={pageId} pageConfig={pageConfig} defaultValue={defaultValue} />;
};

export default Index;
