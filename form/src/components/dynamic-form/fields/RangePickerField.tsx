import DatePicker from 'antd/es/date-picker';
import React from 'react';

const { RangePicker } = DatePicker;

export default function RangePickerField({ ...extraProps }) {
  return <RangePicker {...extraProps} />;
}
