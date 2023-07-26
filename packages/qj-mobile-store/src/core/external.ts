export function createStore<T>(initialState: T) {
  let currentState = initialState;
  const listeners = new Set();
  return {
    getState: () => currentState,
    setState: (newState: T) => {
      currentState = { ...currentState, ...newState };
      listeners.forEach((listener: any) => listener(currentState));
    },
    subscribe: (listener: any) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
