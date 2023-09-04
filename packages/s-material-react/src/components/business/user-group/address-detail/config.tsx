import { ProvinceComponent, CityComponent, AreaComponent, checkMobile } from '@brushes/shared-utils';

interface AddressType {
  cityCode: string;
  provinceCode: string;
}
export const transformConfig = [
  {
    from: 'addressDefault',
    to: 'addressDefault',
    format: (preValue: any) => {
      return preValue === true ? 1 : 0;
    }
  }
];

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
      label: '所在省',
      render: ProvinceComponent
    }
  },
  {
    type: 'slot',
    name: 'cityCode',
    extraProps: {
      label: '所在市',
      shouldUpdate(currentState: { provinceCode: string }, prevState: { provinceCode: string }) {
        return currentState.provinceCode !== prevState.provinceCode;
      },
      render: CityComponent
    }
  },
  {
    type: 'slot',
    name: 'areaCode',
    extraProps: {
      label: '所在区',
      shouldUpdate(currentState: AddressType, prevState: AddressType) {
        return currentState.cityCode !== prevState.cityCode;
      },
      render: AreaComponent
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
