import { getNotice } from 'qj-b2c-api';
import { useEffect, useState } from 'react';

export const useNoticeDetail = (noticeId: string) => {
  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  const getData = async () => {
    try {
      const result = await getNotice({ noticeId });
      setInfo(result);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    info,
    setInfo
  };
};
