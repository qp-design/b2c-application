import { useComponent } from '@brushes/simulate-component';

export default function CheckboxField({
  label,
  ...extraProps
}: {
  label?: string;
}) {
  const { Checkbox } = useComponent();
  return <Checkbox {...extraProps}>{label}</Checkbox>;
}
