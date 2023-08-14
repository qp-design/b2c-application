export const initImpl = (dir: string) => {
  const cache = [] as any;
  function importAll(r: any) {
    r.keys().forEach((key: any) => {
      cache.push(r(key).default);
    });
  }
  switch (dir) {
    case 'basic':
      // @ts-ignore
      importAll(require.context('./basic', false, /\.ts$/));
      break;
    case 'business':
      // @ts-ignore
      importAll(require.context('./business', false, /\.ts$/));
      break;
    case 'marketing':
      // @ts-ignore
      importAll(require.context('./marketing', false, /\.ts$/));
      break;
    default:
      break;
  }

  return cache;
};
