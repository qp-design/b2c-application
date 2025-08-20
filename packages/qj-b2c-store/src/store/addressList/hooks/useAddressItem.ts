import { updatePagesRefreshStore, navigatorBackImpl } from '@brushes/utils';

export function useAddressItem(itemData: any) {
  const handlerImpl = () => {
    updatePagesRefreshStore({
      PlaceOrderAddress: itemData.addressId
    });
    navigatorBackImpl(-1);
  };

  return {
    handlerImpl
  };
}
