import {useEffect, useState} from "react";
import {INDEX_MEM} from 'qj-b2c-api';
import {get} from 'lodash-es';

export const useBindPhone = () => {
  const [originPhone, setOriginPhone] = useState('');
  useEffect(() => {
    getOriginPhone()
  }, [])

  const getOriginPhone = async () => {
    const result = await INDEX_MEM();
    const phone = get(result, 'userInfo.userPhone');
    setOriginPhone(phone);
  }

  return {
    originPhone
  }
}
