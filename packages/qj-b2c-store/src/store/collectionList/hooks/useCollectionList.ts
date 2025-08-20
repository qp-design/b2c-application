import { useState, useEffect, useRef } from 'react';
import { queryCollectPage, deleteCollectByCodeStr } from 'qj-b2c-api';
import { get } from 'lodash-es';

export const useCollectionList = () => {
  const [collectionList, setCollectionList] = useState<Array<any>>([
    {
      collectOpcont: '',
      collectOpnum: ''
    }
  ]);
  // const [page, setPage] = useState(1);
  const page = useRef(1);
  const [edit, setEdit] = useState(false);
  const [collectCodeStr, setCollectCodeStr] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectAll, setSelectAll] = useState('');
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const row = 10;
  const collectType = 0;

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    page.current = 1;
    setCollectionList([]);
    getData();
  };

  const getData = async () => {
    try {
      const result = await queryCollectPage({ row, page: page.current, collectType });
      setCollectionList((prevState) => prevState.concat(get(result, 'list', [])));
      page.current += 1;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getSelectItem = (e: { detail: { value: string[] } }) => {
    const arr = e.detail.value;
    setCollectCodeStr(arr.toString());
    if (arr.length === collectionList.length) {
      setSelectAllChecked(true);
    } else {
      setSelectAllChecked(false);
      setCollectCodeStr('');
    }
  };

  const delItem = async () => {
    try {
      await deleteCollectByCodeStr({ collectCodeStr });
      page.current = 1;
      init();
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
    collectionList,
    edit,
    setEdit,
    getData,
    collectCodeStr,
    getSelectItem,
    delItem,
    init,
    checked,
    setChecked,
    handleSelectAll,
    selectAll,
    setSelectAll,
    selectAllChecked
  };
};
