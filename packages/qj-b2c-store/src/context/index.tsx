import { createContext, ReactNode, useContext, useState } from 'react';
import { noop } from 'lodash-es';
const Context = createContext([{}, noop]);

export function ApplicationContext({ initialValue, children }: { initialValue?: Object; children: ReactNode }) {
  return <Context.Provider value={useState(initialValue || {})}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  const context = useContext(Context);
  if (!context) {
    return [{}, noop];
  }
  return context;
}
