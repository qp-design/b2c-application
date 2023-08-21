import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import locale from 'antd/es/date-picker/locale/zh_CN';

export default function DatePickerField({
  value,
  ...extraProps
}: {
  value?: string;
}) {
  return (
    <DatePicker
      locale={locale}
      value={value ? dayjs(value, 'YYYY-MM-DD') : null}
      {...extraProps}
    />
  );
}
