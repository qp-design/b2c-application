import { useState } from 'react';

export const useSelectAction = () => {
  const [isShow, setIsShow] = useState(false);
  const onOpen = () => setIsShow(true);
  const onClose = () => setIsShow(false);
  return {
    isShow,
    onClose,
    onOpen
  };
};
