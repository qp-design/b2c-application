import { FC, HTMLAttributes, ReactNode } from 'react';
import Input from 'antd/es/input';
import Form from 'antd/es/form';
interface EditableCellProps extends HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  children: ReactNode;
}
export const EditableCell: FC<EditableCellProps> = ({ editing, dataIndex, title, children, ...restProps }) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `请输入 ${title}!`
            }
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
