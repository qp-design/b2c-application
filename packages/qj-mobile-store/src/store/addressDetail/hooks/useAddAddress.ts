import { queryAddressBymerberCode, saveAddress } from 'qj-b2c-api';
import { getPagesRefreshStore, navigatorBackImpl, updatePagesRefreshStore } from '@brushes/utils';
import { removeRequestCacheByKey } from '@brushes/optimize';
import { extendAddressData } from '@/store';

export function useEditAddress() {
  const onSubmit = async (values: any, suc: any, error: any) => {
    console.log(7, values, extendAddressData);
    try {
      await saveAddress({...values, ...extendAddressData});
      removeRequestCacheByKey(queryAddressBymerberCode);
      let { AddressList = 0 } = getPagesRefreshStore();
      updatePagesRefreshStore({
        AddressList: ++AddressList
      });
      suc()
      navigatorBackImpl(-1);
    } catch (err) {
      error()
    }
  }

  return {
    onSubmit
  }
}
