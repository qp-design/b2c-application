import { queryTginfo } from 'qj-b2b-api';
import { useEffect } from 'react';
import { get } from 'lodash-es';
import { useStore } from '@brushes/shared-store';

export const useTheme = () => {
  const [, setTheme] = useStore((state) => state['theme']);

  useEffect(() => {
    (async () => {
      const result = await queryTginfo();
      const theme = JSON.parse(get(result, 'list[0]tginfoUrl1', '{}'));
      setTheme({ theme });
    })();
  }, []);
};
