import { Checkbox } from 'antd-mobile';

export default function CheckboxField({
  label,
  ...extraProps
}: {
  label?: string;
}) {
  return <Checkbox {...extraProps}>{label}</Checkbox>;
}
