import { Dispatch } from 'react';
import { noop } from 'lodash-es';
export function useCartTop(dispatchPageStore: Dispatch<any> = noop) {
  const editorImpl = () => {
    dispatchPageStore((prevState: { isEditor: boolean }) => {
      const cartIsEditor = prevState.isEditor;
      return {
        isEditor: !cartIsEditor
      };
    });
  };
  return {
    editorImpl
  };
}
