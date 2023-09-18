export default {
  type: 'CartGroup',
  name: '购物车',
  group: [
    {
      type: 'CartTop',
      groupType: 'CartGroup',
      name: '购物车编辑',
      icon: 'icon-a-1',
      props: {
        dataSource: {
          pageStore: {
            isEditor: false
          }
        },
        __dataSource__: {
          connect: [
            {
              prevKey: {
                type: 'pageStore',
                value: 'isEditor'
              },
              nextKey: 'cartIsEditor'
            }
          ],
          dispatchParams: ['isEditor']
        },
        btnStyle: false,
        borderColor: '#000000',
        textColor: '#000000',
        btnColor: '#ffffff',
        btnShape: '10px'
      }
    },
    {
      type: 'CartList',
      groupType: 'CartGroup',
      name: '购物车卡片',
      icon: 'icon-a-1',
      props: {
        // __link__: { target: { value: 'allPromotionList' } },
        dataSource: {
          pageStore: {
            select: [],
            updateCount: 0,
            isEditor: false
          }
        },
        __dataSource__: {
          dispatchParams: ['select', 'cartInfo', 'disMoney'],
          connect: [
            {
              prevKey: {
                type: 'pageStore',
                value: 'select'
              },
              nextKey: 'cartSelect'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'isEditor'
              },
              nextKey: 'cartIsEditor'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'updateCount'
              },
              nextKey: 'cartUpdateCount'
            }
          ]
        },
        cartItemRadius: '10px'
      }
    },
    {
      type: 'CartOperate',
      groupType: 'CartGroup',
      name: '购物车操作',
      icon: 'icon-a-1',
      props: {
        dataSource: {
          pageStore: {
            cartInfo: [],
            updateCount: 0,
            select: [],
            disMoney: 0,
            isEditor: false
          }
        },
        __dataSource__: {
          dispatchParams: ['updateCount', 'select'],
          connect: [
            {
              prevKey: {
                type: 'pageStore',
                value: 'disMoney'
              },
              nextKey: 'cartDisMoney'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'cartInfo'
              },
              nextKey: 'cartInfo'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'select'
              },
              nextKey: 'cartSelect'
            },
            {
              prevKey: {
                type: 'pageStore',
                value: 'isEditor'
              },
              nextKey: 'cartIsEditor'
            }
          ]
        },
        countBorderColor: '#000000',
        countTextColor: '#ffffff',
        countBtnColor: '#000000',
        countBtnShape: '20px'
      }
    }
  ]
};
