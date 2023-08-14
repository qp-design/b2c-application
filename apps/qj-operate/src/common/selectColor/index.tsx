import React, { useRef, useState } from 'react';
import { Popover } from 'antd';
import Panel from './panel';
import './index.scss';

export const SelectColor = (props: any) => {
  const { form, value, name, onChange: changeImpl } = props;
  const [color, setColor] = useState(value);
  const originColor = useRef(value);

  const onChange = (color: any) => {
    updateColor(color.hex);
  };

  const resetColor = () => {
    updateColor(originColor.current);
  };

  const updateColor = (color: string) => {
    setColor(color);
    changeImpl(color);
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
