import { useComponent, antdMobile } from '@brushes/simulate-component';

export const SwitchItem = ({ checked, onChange }: any) => {
  const { View } = useComponent();

  const { Switch } = antdMobile;
  return (
    <View>
      <Switch
        checked={checked}
        onChange={onChange}
        style={{
          '--checked-color': '#000000',
          '--height': '36px',
          '--width': '60px'
        }}
      />
    </View>
  );
};
