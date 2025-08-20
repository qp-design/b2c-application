import { saveUsercoupon } from 'qj-b2c-api';
import { useState } from 'react';
export const useAddCoupon = () => {
  const [isPick, setPickStatus] = useState(false);
  const save = async (params: any) => {
    if (isPick) return;
    try {
      await saveUsercoupon(params);
      setPickStatus(true);
    } catch (err) {}
  };

  return {
    save,
    isPick
  };
};
