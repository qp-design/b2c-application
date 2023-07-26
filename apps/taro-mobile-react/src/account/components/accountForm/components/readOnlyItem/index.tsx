import {Form, Input} from 'antd-mobile'
import {useEffect} from "react";

export const ReadOnlyItem = ({originPhone, form}: any) => {

  useEffect(() => {
    form.setFieldValue('mobile', originPhone);
  }, [originPhone])

  return (
    <Form.Item
      name='mobile'
    >
      <Input
        placeholder={originPhone}
        readOnly
      />
    </Form.Item>
  )
}
