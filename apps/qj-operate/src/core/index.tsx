import './index.scss';
import { NodeGraph } from '@brushes/qj-shared-library';
import IndexReact from './react';

const ADD = ({
  defaultValue,
  pageId,
  pageConfig,
  ...restProps
}: {
  defaultValue: NodeGraph;
  pageId: string;
  pageConfig?: any;
}) => {
  return <IndexReact pageId={pageId} pageConfig={pageConfig} defaultValue={defaultValue} {...restProps} />;
};

export default ADD;
