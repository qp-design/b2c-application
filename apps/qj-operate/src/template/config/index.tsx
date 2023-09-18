import { FieldType } from '@brushes/form';
import { SelectPicture } from '../components/selectPictureOrVideo';
import { SelectTheme } from '../components/select-theme';
import { ColorPickerJsx } from '../components/color-picker';

export const formConfig: Array<FieldType> = [
  {
    label: '模板名称',
    name: 'mmodelName',
    type: 'text',
    rules: [{ required: true, message: '请输入模板名称' }]
  },
  {
    label: '模板图片',
    name: 'mmodelFilepath',
    type: 'slot',
    rules: [{ required: true, message: '请选择模板图片' }],
    extraProps: {
      render: SelectPicture
    }
  },
  {
    name: ['mmodelConfig', 'themeColor'],
    type: 'extend',
    extraProps: {
      label: '主题设置',
      render: SelectTheme
    }
  },
  {
    type: 'slot',
    name: ['mmodelConfig', 'mainColor'],
    label: '主题色',
    initialValue: 'rgb(51,51,51)',
    extraProps: {
      render: ColorPickerJsx
    }
  },
  {
    type: 'slot',
    name: ['mmodelConfig', 'subColor'],
    label: '辅助色',
    initialValue: 'rgb(255,151,69)',
    extraProps: {
      render: ColorPickerJsx
    }
  },
  {
    type: 'slot',
    name: ['mmodelConfig', 'success'],
    label: '功能色-成功',
    initialValue: 'rgb(82,196,26)',
    extraProps: {
      render: ColorPickerJsx
    }
  },
  {
    type: 'slot',
    name: ['mmodelConfig', 'fail'],
    label: '功能色-失败',
    initialValue: 'rgb(237,68,68)',
    extraProps: {
      render: ColorPickerJsx
    }
  },
  {
    type: 'slot',
    name: ['mmodelConfig', 'warn'],
    label: '功能色-警告',
    initialValue: 'rgb(255,151,69)',
    extraProps: {
      render: ColorPickerJsx
    }
  },
  {
    type: 'slot',
    name: ['mmodelConfig', 'link'],
    label: '功能色-链接',
    initialValue: 'rgb(57,134,246)',
    extraProps: {
      render: ColorPickerJsx
    }
  }
];
