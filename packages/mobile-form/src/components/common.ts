import {
  TextAreaField,
  InputField,
  CheckboxField,
  CheckboxGroupField,
  CheckboxListField,
  PickerField,
  ComplexField,
  SelectField,
  RadioGroupField,
  SlotField,
  SwitchField,
} from './dynamic-form/fields';

export const FieldTypeComponent = {
  textarea: TextAreaField,
  checkboxList: CheckboxListField,
  pick: PickerField,
  switch: SwitchField,
  complex: ComplexField,
  text: InputField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  select: SelectField,
  radioGroup: RadioGroupField,
  slot: SlotField,
};

// export const fetchFormComponents = () => FieldTypeComponent;
