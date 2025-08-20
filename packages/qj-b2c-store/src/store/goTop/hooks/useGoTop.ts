import { useApplicationContext } from '@/context';

export const useGoTop = () => {
  const [, dispatch] = useApplicationContext();

  const goTop = () => {
    // @ts-ignore
    dispatch((prevState: any) => {
      const { scrollTop } = prevState;
      return {
        ...prevState,
        scrollTop: scrollTop === 0 ? 1 : 0
      };
    });
  };

  return {
    goTop
  };
};
