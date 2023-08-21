import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export default function RangePickerField({ ...extraProps }) {
  return <RangePicker {...extraProps} />;
}
