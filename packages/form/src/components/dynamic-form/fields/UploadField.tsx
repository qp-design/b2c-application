import { Upload, Button, FormInstance } from 'antd';
import { NamePath } from '@/components/types/formField';
import { isFunction } from 'lodash-es';
import { QjIcon } from '@brushes/share-resource';

export default function UploadField({
  name,
  form,
  maxCount = 1,
  text,
  disabled,
  prefixicon,
  suffixicon,
  ...extraProps
}: {
  name: NamePath;
  maxCount?: number;
  prefixicon?: any;
  suffixicon?: any;
  form: FormInstance;
  text?: string;
  disabled: boolean;
}) {
  const isDisabled =
    (form.getFieldValue(name) || []).length >= maxCount || disabled;
  // @ts-ignore
  const type = extraProps.listType;
  return (
    <>
      {isFunction(prefixicon) ? prefixicon(form) : prefixicon}
      <Upload {...extraProps} beforeUpload={() => false}>
        {type === 'picture-card' ? (
          !isDisabled && `+ ${text}`
        ) : (
          <Button
            disabled={isDisabled}
            icon={
              <QjIcon
                style={{ fontSize: 16, fontWeight: 500 }}
                name={'icon-zengjia'}
              />
            }
          >
            {text}
          </Button>
        )}
      </Upload>
      {isFunction(suffixicon) ? suffixicon(form) : suffixicon}
    </>
  );
}
