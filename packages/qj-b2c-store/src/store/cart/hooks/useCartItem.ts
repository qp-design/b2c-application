import { useDispatchImpl, useStore } from '@/store/cart/store';
import { taroMessage } from '@brushes/utils';

export const useCartItem = () => {
  const dispatch = useDispatchImpl();
  const { select } = useStore();
  const handleStep = async (id: number, amount: number, type: string) => {
    if (amount === 0 && type === 'minus') {
      taroMessage('不能小于0', 'none');
      return;
    }
    const count = type === 'plus' ? ++amount : --amount;

    dispatch({
      type: 'update',
      payload: {
        id,
        count,
        loading: true
      }
    });
  };

  const onChange = (e: { detail: { value: string[] } }) => {
    dispatch({
      type: 'select',
      payload: e.detail.value
    });
  };

  return {
    select,
    onChange,
    handleStep
  };
};
