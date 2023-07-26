import { useComponent, antdMobile } from '@brushes/simulate-component';

export const CheckboxItem = ({ txt, onChange, checked }: any) => {
  const { View } = useComponent();

  const { Checkbox } = antdMobile;
  return (
    <View>
      <Checkbox
        onChange={onChange}
        checked={checked}
        style={{
          '--icon-size': '18px',
          '--font-size': '14px',
          '--gap': '6px'
        }}
      >
        {txt}
      </Checkbox>
    </View>
  );
};
