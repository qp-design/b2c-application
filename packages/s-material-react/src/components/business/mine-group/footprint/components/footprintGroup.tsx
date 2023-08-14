import { groupBy } from 'lodash-es';
import { useMemo } from 'react';
import { Footprint } from './footprint';
import dayjs from 'dayjs';

export const FootprintGroup = ({ footprintList, edit }: any) => {
  const list = useMemo(() => {
    const originArr = footprintList.map((item: any) => {
      item.gmtCreate = item.gmtCreate ? dayjs(item.gmtCreate).format('YYYY-MM-DD') : item.gmtCreate;
      return item;
    });

    const groupObj = groupBy(originArr, 'gmtCreate');

    return Object.keys(groupObj).map((item) => {
      return {
        title: item || '',
        option: groupObj[item]
      };
    });
  }, [footprintList]);

  return (
    <>
      {list.map((item, index) => {
        return <Footprint key={index} item={item} edit={edit} />;
      })}
    </>
  );
};
