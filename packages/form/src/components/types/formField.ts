import { FormInstance, ButtonProps } from 'antd';
import { ReactNode } from 'react';
type formType =
  | 'formList'
  | 'extend'
  | 'text'
  | 'textarea'
  | 'number'
  | 'checkbox'
  | 'select'
  | 'radioGroup'
  | 'checkboxGroup'
  | 'complex'
  | 'range'
  | 'date'
  | 'cascader'
  | 'innerForm'
  | 'upload'
  | 'mention'
  | 'switch'
  | 'color'
  | 'slot';

type callResolver = (msg?: string) => void;
export type submitType<T = any> = [T, callResolver, callResolver];

export type NamePath = string | number | (string | number)[];

export interface FieldType {
  name: string | number | (string | number)[];
  noStyle?: boolean;
  colon?: boolean;
  type: formType;
  label?: string;
  labelCol?: { span: number };
  wrapperCol?: { span: number };
  shouldUpdate?: boolean;
  calIsVisible?: (form: FormInstance) => boolean;
  rules?: Array<
    { required?: boolean; message?: string; pattern?: RegExp } | any
  >;
  initialValue?: string | number | boolean | Array<string | number>;
  readOnly?: boolean;
  minLength?: number;
  loading?: boolean;
  extraProps?: {
    dependencies?: NamePath;
    options?: { [v: string]: any }[];
    optionsName?: string | 'label'; // select
    optionsKey?: string | 'value'; // select
    uid?: string | 'uid'; //upload
    url?: string | 'url'; //upload
    urlName?: string | 'name'; //upload
    api?: () => Promise<any>;
    shouldUpdate?: (prevValue: any, curValue: any) => boolean;
    [k: string]: unknown;
    placeholder?: string;
    render?: ({
      name,
      form,
      onChange,
      ...rest
    }: {
      name: NamePath;
      onChange: (value: any) => void;
      form: FormInstance;
    }) => ReactNode;
  };
  style?: { [k: string]: unknown };
}

export interface TransformType {
  from: string;
  to: string;
  format: (preValue: any, value: any) => any;
  isDelete?: boolean; // 原字段是否保留: true删除
}

export interface Action extends ButtonProps {
  key: string;
  name: string;
  callback: Function;
  isNeedValidate?: boolean;

  [v: string]: unknown;
}
