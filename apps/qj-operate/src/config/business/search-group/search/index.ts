import { FieldType } from '@brushes/form';
import { SwiperComponent } from '@/common';
import type { Color } from 'antd/es/color-picker';
export const formConfig: Array<FieldType> = [
  {
    label: '搜索',
    name: 'value',
    type: 'text',
    extraProps: {
      showCount: true,
      maxLength: 10
    }
  },
  {
    label: '字号大小',
    name: 'fontsize',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 12,
          label: 'S'
        },
        {
          value: 16,
          label: 'M'
        },
        {
          value: 20,
          label: 'L'
        }
      ]
    }
  },
  {
    label: '搜索倒角',
    name: 'borderRadius',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '圆角'
        },
        {
          value: false,
          label: '直角'
        }
      ]
    }
  },
  {
    label: '永久置顶',
    name: 'sticky',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ]
    }
  },

  {
    label: '字体颜色',
    name: 'fontColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '显示图标',
    name: 'iconShow',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ]
    }
  },
  {
    label: '搜索框背景色',
    name: 'backgroundColor',
    type: 'color',
    extraProps: {
      allowClear: true,
      showText: true
    }
  },
  {
    label: '左边距',
    name: 'paddingLeft',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '右边距',
    name: 'paddingRight',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },

  {
    label: '其他样式',
    name: 'otherStyles',
    type: 'checkboxGroup',
    extraProps: {
      options: [
        {
          value: 'search-weight',
          label: '加粗'
        },
        {
          value: 'search-italic',
          label: '斜体'
        },
        {
          value: 'search-decoration',
          label: '下划线'
        }
      ]
    }
  },
  {
    label: '上下边距',
    name: 'paddings',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  }
];

export const title = '搜索配置';
export const info = '设置搜索1的样式。';

export const transformField = [
  {
    from: 'fontColor', // 老的key
    format: (value: Color) => {
      return {
        key: 'fontColor', // 新增的key
        value: value.toHexString()
      };
    }
  },
  {
    from: 'backgroundColor', // 老的key
    format: (value: Color) => {
      return {
        key: 'backgroundColor', // 新增的key
        value: value.toHexString()
      };
    }
  }
];
