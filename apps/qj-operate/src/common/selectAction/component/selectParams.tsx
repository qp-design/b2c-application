import { NamePath } from '@brushes/form';
import { Button, FormInstance } from 'antd';
import { useEffect, useState } from 'react';
import { get } from 'lodash-es';
import { queryModalData } from '@/hooks';
import { useActionStore, useShowParams } from '@/common/selectAction/hooks';
import { SelectLink } from '@/common';

export const SelectParams = ({ name, form }: { name: NamePath; form: FormInstance }) => {
  const { callback } = useShowParams(form);
  return (
    <div>
      <SelectLink name={name} form={form} callback={callback} />
    </div>
  );
};
