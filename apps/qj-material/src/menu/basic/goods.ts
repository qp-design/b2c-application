import { DEFAULT_IMG } from '@/common/img/constent';

export default {
  type: 'Goods',
  code: 'index',
  name: '商品',
  group: [
    {
      type: 'Goods',
      groupType: 'Goods',
      name: '一行一个',
      icon: 'icon-picture',
      props: {
        defaultValue: [
          {
            goodsCode: 1,
            goodsName: '默认标题',
            brandName: '千匠网络',
            pricesetNprice: 1000,
            showSales: false,
            pricesetMakeprice: 1,
            dataPic: DEFAULT_IMG
          }
        ],
        goods: [],
        cell: 1,
        circular: true,
        margin: 8,
        markedPrice: 1,
        classCode: 'one',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
        goodsName: true,
        goodsPrice: true,
        goodsCar: true,
        goodsColor: true,
        goodsBorder: true,
        goodsTag: true,
        goodsShadow: true,
        marginGap: 10,
        marginLR: 0,
        marginTB: 0,
        showSales: true
      }
    },
    {
      type: 'Goods',
      groupType: 'Goods',
      name: '一行两个',
      icon: 'icon-a-bianzu2',
      props: {
        defaultValue: [
          {
            goodsCode: 1,
            goodsName: '默认标题',
            brandName: '千匠网络',
            pricesetNprice: 1000,
            showSales: false,
            pricesetMakeprice: 1,
            dataPic: DEFAULT_IMG
          },
          {
            goodsCode: 1,
            goodsName: '默认标题',
            brandName: '千匠网络',
            pricesetNprice: 1000,
            showSales: false,
            pricesetMakeprice: 1,
            dataPic: DEFAULT_IMG
          }
        ],
        goods: [],
        cell: 2,
        circular: true,
        margin: 8,
        markedPrice: 1,
        classCode: 'two',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
        goodsName: true,
        goodsPrice: true,
        goodsCar: true,
        goodsColor: true,
        goodsBorder: true,
        goodsTag: true,
        goodsShadow: true,
        marginGap: 10,
        marginLR: 0,
        marginTB: 0,
        showSales: true
      }
    },
    {
      type: 'Goods',
      groupType: 'Goods',
      name: '左右结构',
      icon: 'icon-a-bianzu3beifen',
      props: {
        defaultValue: [
          {
            goodsCode: 1,
            goodsName: '默认标题',
            brandName: '千匠网络',
            pricesetNprice: 1000,
            showSales: false,
            pricesetMakeprice: 1,
            dataPic: DEFAULT_IMG
          }
        ],
        goods: [],
        cell: 1,
        circular: true,
        margin: 8,
        markedPrice: 1,
        classCode: 'three',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
        goodsName: true,
        goodsPrice: true,
        goodsCar: true,
        goodsColor: true,
        goodsBorder: true,
        goodsTag: true,
        goodsShadow: true,
        marginGap: 10,
        marginLR: 0,
        marginTB: 0,
        showSales: true
      }
    },
    {
      type: 'GoodsSlider',
      groupType: 'Goods',
      name: '滑动结构',
      icon: 'icon-a-bianzu2',
      props: {
        defaultValue: [
          {
            goodsCode: 1,
            goodsName: '默认标题',
            brandName: '千匠网络',
            pricesetNprice: 1000,
            showSales: false,
            pricesetMakeprice: 1,
            dataPic: DEFAULT_IMG
          }
        ],
        // 选中的商品
        goods: [],
        // 商品价格显示
        price: true,
        // 划线价显示
        marketPrice: true,
        // 购物车显示
        cart: true,
        // 组件倒角
        wrapRadius: '0px',
        // 组件边框颜色
        wrapBorderColor: '#FFFFFF',
        // 组件背景色
        wrapBgColor: '#FFFFFF',
        // 组件投影
        wrapShadow: false,
        // 商品倒角
        goodsRadius: '0px',
        // 商品底色
        goodsBgColor: '#FFFFFF',
        // 商品边距
        goodsGap: 10,
        // 组件左边距
        marginLeft: 10,
        // 组件右边距
        marginRight: 10,
        // 组件上边距
        marginTop: 10,
        // 组件下边距
        marginBottom: 10
      }
    },
    {
      type: 'GoodsSlideshow',
      groupType: 'Goods',
      name: '滑动结构',
      icon: 'icon-a-bianzu2',
      props: {
        defaultValue: [
          {
            goodsCode: 1,
            goodsName: '默认标题',
            brandName: '千匠网络',
            pricesetNprice: 1000,
            showSales: false,
            pricesetMakeprice: 1,
            dataPic: DEFAULT_IMG
          }
        ],
        // 选中的商品
        goods: [],
        // 组件背景图
        GoodsSlideshowBg: '',
        // 划线价显示
        marketPrice: true,
        // 商品名称显示
        goodsName: true,
        // 销量显示
        salesNum: true,
        // 商品价格显示
        price: true,
        // 商品倒角
        goodsRadius: '0px',
        // 商品边框
        goodsBorder: true,
        // 商品投影
        goodsShadow: false,
        // 按钮文字
        btnText: '购买',
        // 按钮颜色
        btnBg: '#000000',
        // 按钮文字颜色
        btnColor: '#FFFFFF',
        // 按钮倒角
        btnRadius: '0px'
      }
    }
  ]
};
