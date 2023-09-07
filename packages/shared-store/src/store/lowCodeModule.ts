import { createFastContext } from '@brushes/utils';
export const { Provider, useStore } = createFastContext({
  module: '',
  domainColor: '',
  decorateColor: '',
  dotColor: ''
});
