//@ts-nocheck
import * as config from '../config';
import { useImmutableCallback } from '@brushes/form';
import { useEffect, useMemo } from 'react';
import { useLowCodeGraph, NodeGraph } from '@brushes/qj-shared-library';
import { get, isEmpty, omit, set, merge } from 'lodash-es';
import { FormInstance } from 'antd';

console.log(9, config);
export function useMaterialsOperate(defaultValue: NodeGraph, form: FormInstance, appendConfig: any) {
  const monitorInstance = useLowCodeGraph();
  const initialValues = defaultValue.props;
  const {
    formConfig,
    title,
    info,
    transformField = []
  } = get({ ...config, ...appendConfig }, defaultValue.type, { formConfig: [], title: '', info: '' });

  const callbackImpl = useImmutableCallback((changedValues: any, allValues: any) => {
    let obj = {};

    if (!isEmpty(transformField)) {
      let isNeedTransform = '';
      for (let i of transformField) {
        isNeedTransform = get(changedValues, i.from, '');
        if (isNeedTransform !== '') {
          const { key, value } = i.format(isNeedTransform);
          form.setFieldValue(key, value);
          set(obj, key, value);
          break;
        }
      }
    }
    monitorInstance.updateNode(merge(allValues, obj));
  });

  const computedConfig = useMemo(() => {
    const isNewConfig = formConfig[0]?.hasOwnProperty('title');
    if (isNewConfig) return formConfig;
    return [{ formConfig }];
  }, []);

  useEffect(() => {
    const props = omit(initialValues, 'defaultValue');
    form.setFieldsValue(props);
  }, [initialValues]);

  return {
    computedConfig,
    title,
    info,
    callbackImpl,
    initialValues,
    transformField
  };
}
