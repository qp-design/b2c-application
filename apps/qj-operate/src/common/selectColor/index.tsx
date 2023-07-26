import React, { useRef, useState } from 'react';
import { Popover } from 'antd';
import Panel from './panel';
import './index.scss';
import { useLowCodeGraph } from 'qj-shared-library';

export const SelectColor = ({ form, value, name }: any) => {
  const [color, setColor] = useState(value);
  const originColor = useRef(value);
  const monitorInstance = useLowCodeGraph();

  const onChange = (color: any) => {
    updateColor(color.hex);
  };

  const resetColor = () => {
    updateColor(originColor.current);
  };

  const updateColor = (color: string) => {
    setColor(color);
    form.setFieldValue(name, color);
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
  };

  return (
    <div className={'selectColor'}>
      <div className="lPart">
        <span className={'tip'}>{color}</span>
      </div>
      <div className="rPart">
        <div className="reset" onClick={resetColor}>
          重置
        </div>
        <Popover
          content={() => <Panel color={color} name={name} onChange={onChange} form={form} />}
          placement={'bottomRight'}
          trigger={'click'}
        >
          <div className={'box'}>
            <div className={'boxContent'} style={{ backgroundColor: color }}></div>
          </div>
        </Popover>
      </div>
    </div>
  );
};
