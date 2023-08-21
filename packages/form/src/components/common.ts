import {
  NumberField,
  TextAreaField,
  InputField,
  CheckboxField,
  CheckboxGroupField,
  SelectField,
  CascaderField,
  UploadField,
  RadioGroupField,
  RangePickerField,
  DatePickerField,
  SearchField,
  SlotField,
  SwitchField,
  MentionsField,
  FormListField,
  ColorPicker
} from './dynamic-form/fields';

export const FieldTypeComponent = {
  upload: UploadField,
  range: RangePickerField,
  date: DatePickerField,
  number: NumberField,
  textarea: TextAreaField,
  text: InputField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  select: SelectField,
  radioGroup: RadioGroupField,
  cascader: CascaderField,
  search: SearchField,
  slot: SlotField,
  mention: MentionsField,
  formList: FormListField,
  switch: SwitchField,
  color: ColorPicker
};

// export const fetchFormComponents = () => FieldTypeComponent;
