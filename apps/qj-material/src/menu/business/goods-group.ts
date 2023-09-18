import { DEFAULT_IMG } from '@/common/img/constent';

export default {
  type: 'GoodsGroup',
  code: 'index',
  name: '商品',
  group: [
    {
      type: 'Goods',
      groupType: 'GoodsGroup',
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
      groupType: 'GoodsGroup',
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
        __link__: { target: { value: 'goodDetail' }, defaultQuery: ['skuCode'] },
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
      groupType: 'GoodsGroup',
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
      groupType: 'GoodsGroup',
      name: '滑动小图',
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
      groupType: 'GoodsGroup',
      name: '滑动大图',
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
    },
    {
      type: 'GoodsDetailBanner',
      groupType: 'GoodsGroup',
      name: '商品轮播图',
      icon: 'icon-a-1',
      props: {
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            }
          ]
        },
        // 轮播图是否纵向滚动
        vertical: false,
        // 轮播图是否自动播放
        autoplay: false
      }
    },
    {
      type: 'GoodsDetailInfo',
      groupType: 'GoodsGroup',
      name: '商品信息',
      icon: 'icon-a-1',
      props: {
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            }
          ]
        },
        // 商品价格显示
        priceShow: true,
        // 划线价显示
        mPriceShow: true,
        // 商品销量显示
        salesVolumeShow: true,
        // 收藏显示
        collectionShow: true
      }
    },
    {
      type: 'GoodsDetailInfoOne',
      groupType: 'GoodsGroup',
      name: '商品信息1',
      icon: 'icon-a-1',
      props: {
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            }
          ]
        },
        // 商品价格显示
        priceShow: true,
        // 划线价显示
        mPriceShow: true,
        // 商品销量显示
        salesVolumeShow: true,
        // 收藏显示
        collectionShow: true,
        // 分享显示
        shareShow: true
      }
    },
    {
      type: 'GoodsDetailSku',
      groupType: 'GoodsGroup',
      name: '商品规格',
      icon: 'icon-a-1',
      props: {
        dataSource: {
          pageStore: {
            visible: false
          }
        },
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'visible'
              },
              nextKey: 'popupVisible'
            }
          ],
          dispatchParams: ['visible']
        }
      }
    },
    {
      type: 'GoodsDetailPromotion',
      groupType: 'GoodsGroup',
      name: '商品促销',
      icon: 'icon-a-1',
      props: {
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            }
          ]
        }
      }
    },
    {
      type: 'GoodsDetailCoupon',
      groupType: 'GoodsGroup',
      name: '商品优惠券',
      icon: 'icon-a-1',
      props: {
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            }
          ]
        }
      }
    },
    {
      type: 'GoodsDetailAndEvaluate',
      groupType: 'GoodsGroup',
      name: '商品简介',
      icon: 'icon-a-1',
      props: {
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            }
          ]
        },
        // 商品评价显示
        evaluateShow: true,
        // 商品评价显示图片
        evaluateImgShow: true,
        // 商品评价图片大小 1:大 2:中 3:小
        evaluateImgSize: 2
      }
    },
    {
      type: 'GoodsDetailHandleBar',
      groupType: 'GoodsGroup',
      name: '商品操作栏1',
      icon: 'icon-a-1',
      props: {
        dataSource: {
          pageStore: {
            visible: false
          }
        },
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'visible'
              },
              nextKey: 'popupVisible'
            }
          ],
          dispatchParams: ['visible']
        },
        // 操作栏客服显示
        serverShow: true,
        // 操作栏购物车显示
        cartShow: true,
        // 操作栏左侧按钮字体颜色
        lPartColor: '#FFFFFF',
        // 操作栏左侧按钮背景颜色
        lPartBgColor: '#959595',
        // 操作栏左侧按钮样式
        lPartStyle: '20px',
        // 操作栏右侧按钮字体颜色
        rPartColor: '#FFFFFF',
        // 操作栏右侧按钮背景颜色
        rPartBgColor: '#000000',
        // 操作栏右侧按钮样式
        rPartStyle: '20px'
      }
    },
    {
      type: 'GoodsDetailHandleBarOne',
      groupType: 'GoodsGroup',
      name: '商品操作栏2',
      icon: 'icon-a-1',
      props: {
        dataSource: {
          pageStore: {
            visible: false
          }
        },
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuCode'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'visible'
              },
              nextKey: 'popupVisible'
            }
          ],
          dispatchParams: ['visible']
        },
        // 操作栏客服显示
        serverShow: true,
        // 操作栏购物车显示
        cartShow: true,
        // 操作栏左侧按钮边框颜色
        lBtnBorderColor: '#000000',
        // 操作栏左侧按钮字体颜色
        lBtnFontColor: '#000000',
        // 操作栏左侧按钮颜色
        lBtnColor: '#FFFFFF',
        // 操作栏左侧按样式 1:圆角 2:直角
        lBtnStyle: 1,
        // 操作栏右侧按钮边框颜色
        rBtnBorderColor: '#000000',
        // 操作栏右侧按钮字体颜色
        rBtnFontColor: '#FFFFFF',
        // 操作栏右侧按钮颜色
        rBtnColor: '#000000',
        // 操作栏右侧按样式 1:圆角 2:直角
        rBtnStyle: 1
      }
    },
    {
      type: 'GoodsList',
      groupType: 'GoodsGroup',
      name: '商品列表',
      icon: 'icon-a-1',
      props: {
        __link__: { target: { value: 'goodDetail' }, defaultQuery: ['skuCode'] },
        activeColor: '#e54e29',
        goodsName: true,
        goodsPrice: true,
        lineationGoods: true,
        salesQuantity: true,
        goodsCar: true,
        borderRadius: true,
        goodsColor: true,
        goodsGap: 10,
        paddingLR: 0
      }
    }
  ]
};
