import { useEffect, useState } from 'react';
import { getDoclist } from 'qj-b2c-api';
import { getEnv } from '@brushes/utils';

const useArticleDetailInitial = {
  doclistTitle: '',
  doclistTitle4: '',
  doclistContent: ''
};

export const useArticleDetail = (doclistId: number) => {
  const [info, setInfo] = useState<typeof useArticleDetailInitial>(useArticleDetailInitial);

  useEffect(() => {
    (async () => {
      try {
        const isWeapp = getEnv();
        const result = await getDoclist({ doclistId, isLocalMock: !isWeapp });
        setInfo(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return {
    info
  };
};
