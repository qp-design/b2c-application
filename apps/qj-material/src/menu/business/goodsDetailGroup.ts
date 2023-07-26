export default {
  type: 'GoodsDetailGroup',
  name: '商品详情页组',
  group: [
    {
      type: 'GoodsDetailBanner',
      groupType: 'GoodsDetailGroup',
      name: '轮播图',
      icon: 'icon-a-1',
      props: {
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageQuery',
                value: 'skuCode'
              },
              nextKey: 'skuNo'
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
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
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
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
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
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
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
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
            }
          ]
        }
      }
    },
    {
      type: 'GoodsDetailCoupon',
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
            }
          ]
        }
      }
    },
    {
      type: 'GoodsDetailAndEvaluate',
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
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
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
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
      groupType: 'GoodsDetailGroup',
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
              nextKey: 'skuNo'
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
    }
  ]
};
