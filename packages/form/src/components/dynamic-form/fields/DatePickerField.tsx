import { DatePicker } from 'antd';
import dayjs from 'dayjs';

export default function DatePickerField({
  value,
  ...extraProps
}: {
  value?: string;
}) {
  return (
    <DatePicker
      format={'YYYY/MM/DD'}
      value={value ? dayjs(value, 'YYYY-MM-DD') : null}
      {...extraProps}
    />
  );
}
