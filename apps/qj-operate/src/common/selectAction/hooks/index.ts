import { useCallback, useEffect, useState } from 'react';
import { get } from 'lodash-es';
import { queryModalData } from '@/hooks';
import type { FormInstance } from 'antd/es/form';
import { NamePath } from '@brushes/form';
import { createFastContext } from '@brushes/utils';
import { useLowCodeGraph } from 'qj-shared-library';

export const useSelectAction = () => {
  const [isOpen, setOpen] = useActionStore((state) => state['isOpen']);
  const onOpen = useCallback(() => setOpen({ isOpen: true }), []);
  const onClose = useCallback(() => setOpen({ isOpen: false }), []);
  return {
    isOpen,
    onOpen,
    onClose
  };
};

async function dataImpl(menuOpcode: string) {
  const data = await queryModalData(menuOpcode);
  const pageQuery = get(data, 'data.pageQuery', []);
  const resultDefault = [],
    extendDefault = [];
  for (let i of pageQuery) {
    if (i.defaultKey) {
      resultDefault.push(i);
    } else {
      extendDefault.push(i);
    }
  }
  function computed(resultDefault: Array<any>): Array<{ value: string; label: string }> {
    return resultDefault.map(({ value, label }: { value: string; label: string }) => ({
      value,
      label
    }));
  }

  const result = computed(resultDefault);
  const extendOp = computed(extendDefault);

  return {
    result,
    extendOp
  };
}

export const useDataInit = (form: FormInstance, name: NamePath) => {
  const [defaultOption, setDefaultOption] = useState<Array<{ label: string; value: string }>>([]);
  const [extendOption, setExtendOption] = useState<Array<{ label: string; value: string }>>([]);
  const [, setExtendQuery] = useActionStore((state) => state['extendQuery']);

  const data = form.getFieldValue(name);
  const menuOpcode = get(data, 'target.value', '');
  const extendQuery = get(data, 'extendQuery', '');

  useEffect(() => {
    (async () => {
      if (!menuOpcode) return;
      const { result, extendOp } = await dataImpl(menuOpcode);
      setDefaultOption(result);
      setExtendOption(extendOp);
      setExtendQuery({ extendQuery });
    })();
  }, [menuOpcode]);

  return {
    defaultOption,
    extendOption,
    menuOpcode,
    data
  };
};

export const useShowParams = (form: FormInstance) => {
  const [, setDefaultOption] = useActionStore((state) => state['defaultOption']);
  const [, setExtendOption] = useActionStore((state) => state['extendOption']);
  const data = form.getFieldsValue();
  const menuOpcode = get(data, 'target.value', '');
  useEffect(() => {
    (async () => {
      if (!menuOpcode) return;
      const { result, extendOp } = await dataImpl(menuOpcode);
      const defautQuery = result.map((item) => item.value);
      form.setFieldValue('defaultQuery', defautQuery);
      setDefaultOption({ defaultOption: result });
      setExtendOption({ extendOption: extendOp });
    })();
  }, [menuOpcode]);

  const callback = () => {
    form.setFieldValue('extendQuery', []);
  };

  return {
    callback
  };
};

export const useSubmit = (form: FormInstance, name: NamePath, onClose: () => void) => {
  const monitorInstance = useLowCodeGraph();
  const [, setExtendQuery] = useActionStore((state) => state['extendQuery']);
  const submit = (values: any, suc: () => void) => {
    form.setFieldValue(name, values);
    const data = form.getFieldsValue();
    monitorInstance.updateNode(data);
    setExtendQuery({ extendQuery: values.extendQuery });
    suc();
    onClose();
  };

  return {
    submit
  };
};
const init = {
  defaultOption: [],
  extendOption: [],
  isOpen: false,
  menoOpcode: '',
  extendQuery: []
};

interface Types {
  defaultOption: Array<{ value: string; label: string }>;
  extendOption: Array<{ value: string; label: string }>;
  isOpen: boolean;
  extendQuery: Array<string>;
}
export const { Provider: ActionContextProvider, useStore: useActionStore } = createFastContext<Types>(init);
