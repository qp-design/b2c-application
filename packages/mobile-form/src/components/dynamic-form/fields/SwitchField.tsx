import {useComponent} from '@brushes/simulate-component';
import {useState} from 'react';

export default function SwitchField({
  ...extraProps
}) {
  const { name, form, onChange } = extraProps;
  const [value, setValue] = useState(form.getFieldValue(name));
  const { Switch } = useComponent();

  const changeImpl = (e: any) => {
    onChange(e.detail.value);
    setValue(e.detail.value);
  }

  return <Switch checked={value} {...extraProps} onChange={changeImpl}/>;
}
