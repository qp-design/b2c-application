import { QjIcon } from '@brushes/share-resource';
import { DragJsx } from 'qj-shared-library';

const MenuItem = ({ lists = [], pageConfig }: { lists: Array<any>; pageConfig: { [v: string]: any } }) => {
  return (
    <DragJsx className={'content'}>
      {lists.map((item, index) => {
        return (
          <div key={index} className={'contentItem'} data-item={JSON.stringify(item)}>
            <QjIcon
              style={{
                fontSize: '40px',
                fontWeight: 500,
                display: 'block',
                color: '#1890ff'
              }}
              name={item.icon}
            ></QjIcon>
            <b>{item.name}</b>
          </div>
        );
      })}
    </DragJsx>
  );
};

export default MenuItem;
