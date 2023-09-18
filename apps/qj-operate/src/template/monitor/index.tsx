import { get } from 'lodash-es';
import { ErrorBoundary } from 'react-error-boundary';
import { useMaterialHooks, useNodes } from '@/template/monitor/useMaterialHooks';

const Item = ({ id, materials, ind }: { id: number; materials: Array<any>; ind: number }) => {
  const nodes = useNodes(id, ind);
  return (
    <div className={'monitor-template'}>
      {nodes.map(({ id, props, type }) => {
        const MaterialsComponent = get(materials, type, () => <div></div>);
        return (
          <div key={id} className={'monitor-node'}>
            <section data-id={id} className={'content'}>
              <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <MaterialsComponent id={id} {...props} />
              </ErrorBoundary>
            </section>
          </div>
        );
      })}
    </div>
  );
};
export const Monitor = ({ materials }: { materials: Array<any> }) => {
  const nodes = useMaterialHooks();
  return (
    <>
      {nodes.map((item, ind) => (
        <Item ind={ind} key={ind} id={item.id} materials={materials} />
      ))}
    </>
  );
};
