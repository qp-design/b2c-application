// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import { queryCollectPage, deleteCollectByCodeStr, queryFootprintPagePlat, deleteFootprintByCodeStr } from 'qj-b2c-api';

export const useFootprint = () => {
  const [footprintList, setFootprintList] = useState<Array<any>>([]);
  const page = useRef(1);
  const [edit, setEdit] = useState(false);
  const [footprintCodeStr, setFootprintCodeStr] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectAll, setSelectAll] = useState('');
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const lock = useRef(false);
  const rows = 10;

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    page.current = 1;
    lock.current = false;
    setFootprintList([]);
    await getData();
  };

  const getData = async () => {
    if (lock.current) return;
    setLoading(true);
    try {
      const result = await queryFootprintPagePlat({ rows, page: page.current });
      if (result.list?.length === 0) return;
      setFootprintList((val) => {
        if (page.current === 1) {
          return result.list;
        }
        return val.concat(result.list || []);
      });
      if (result.list.length < 10) {
        lock.current = true;
        return;
      }
      page.current += 1;
    } catch (err) {
      setFootprintList([]);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getSelectItem = (e: { detail: { value: string[] } }) => {
    const arr = e.detail.value;
    setFootprintCodeStr(arr.toString());
    // if (arr.length === footprintList.length) {
    //   setSelectAllChecked(true);
    // } else {
    //   setSelectAllChecked(false);
    //   setCollectCodeStr('');
    // }
  };

  const delItem = async () => {
    try {
      await deleteFootprintByCodeStr({ footprintCodeStr });
      await init();
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectAll = (e: { detail: { value: string[] } }) => {
    const arr = e.detail.value;
    if (arr.length) {
      setChecked(true);
      setCollectCodeStr(getCollectCode());
    } else {
      setChecked(false);
    }
  };

  const getCollectCode = () => {
    let arr = [];
    for (let i = 0; i < collectionList.length; i++) {
      arr.push(collectionList[i].collectCode);
    }
    return arr.toString();
  };

  return {
    footprintList,
    edit,
    setEdit,
    getData,
    getSelectItem,
    delItem,
    init,
    checked,
    setChecked,
    handleSelectAll,
    selectAll,
    setSelectAll,
    selectAllChecked,
    loading
  };
};
