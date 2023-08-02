import {FormInstance, NamePath} from '@brushes/mobile-form';
import { ProvinceComponent, CityComponent, AreaComponent } from '@/components/AddressDetail/components';
const checkMobile = (_: any, value: any) => {
  return new Promise((resolve, reject) => {
    if (!/^1[3456789]\d{9}$/.test(value) && value) {
      reject('请输入正确手机号');
    } else {
      resolve('');
    }
  });
};

export const transformConfig = [
  {
    from: 'addressDefault',
    to: 'addressDefault',
    format: (preValue: any) => {
      return preValue === true ? 1 : 0
    }
  }
]

export const config = [
  {
    type: 'text',
    props: {
      onlyShowClearWhenFocus: true,
      placeholder: '请填写收货人姓名'
    },
    label: '收货人',
    name: 'addressMember',
    rules: [{ required: true, message: '收货人姓名不能为空' }]
  },
  {
    type: 'text',
    props: {
      type: 'number',
      onlyShowClearWhenFocus: true,
      placeholder: '请填写收货人手机号码'
    },
    label: '手机号码',
    name: 'addressPhone',
    rules: [{ required: true, message: '收货人手机号码不能为空' }, { validator: checkMobile }]
  },
  {
    type: 'slot',
    name: 'provinceCode',
    extraProps: {
      render: ({ form, name }: { form: FormInstance; name: NamePath}) =>
        <ProvinceComponent form={form} name={name}/>
    }
  },
  {
    type: 'slot',
    name: 'cityCode',
    extraProps: {
      shouldUpdate(currentState: { provinceCode: any; }, prevState: { provinceCode: any; }) {
        return currentState.provinceCode !== prevState.provinceCode
      },
      render: ({ form, name }: { form: FormInstance; name: NamePath }) =>
        <CityComponent form={form} name={name}/>
    }
  },
  {
    type: 'slot',
    name: 'areaCode',
    extraProps: {
      shouldUpdate(currentState: { cityCode: any; }, prevState: { cityCode: any; }) {
        return currentState.cityCode !== prevState.cityCode
      },
      render: ({ form, name }: { form: FormInstance; name: NamePath }) =>
        <AreaComponent form={form} name={name}/>
    }
  },
  {
    type: 'text',
    props: {
      onlyShowClearWhenFocus: true,
      placeholder: '街道/楼牌号等'
    },
    label: '详细地址',
    name: 'addressDetail',
    rules: [{ required: true, message: '收货人详细地址不能为空' }]
  },
  {
    type: 'switch',
    label: '设置默认地址',
    name: 'addressDefault',
    extraProps: {
      color: '#000'
    }
  }
];
