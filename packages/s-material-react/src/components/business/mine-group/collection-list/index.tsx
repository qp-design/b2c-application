import React, { memo } from 'react';
import { useCollectionList } from 'qj-mobile-store';
import { useComponent } from '@brushes/simulate-component';
import CollectItem from './components/collectItem';
import { ScrollWrap } from '@/common/scrollWrap';

const CollectionListJsx: React.FC = () => {
  const {
    collectionList,
    edit,
    setEdit,
    getData,
    getSelectItem,
    delItem,
    init,
    checked,
    handleSelectAll,
    selectAllChecked
  } = useCollectionList();

  const { View, ScrollView, SmoothCheckbox, Checkbox, Button, Image } = useComponent();

  return (
    <View className="collectList">
      {collectionList.length === 0 ? (
        <View className="noDate">
          <Image
            className="img"
            src="https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/noCollection.png"
          />
        </View>
      ) : (
        <View className="hasDate">
          <View className="topBar">
            <View className="edit" onClick={() => setEdit(!edit)}>
              {edit ? '完成' : '编辑'}
            </View>
          </View>
          <ScrollWrap id={'topBar'}>
            <ScrollView scrollY scrollWithAnimation onScrollToLower={getData} onScrollToUpper={init}>
              <SmoothCheckbox onChange={getSelectItem} style={{ height: '100%' }}>
                {collectionList.map((item) => {
                  return <CollectItem key={item.collectId} item={item} edit={edit} checked={checked} />;
                })}
              </SmoothCheckbox>
              {edit ? (
                <View className="handleBar">
                  <View className="checkAll">
                    <SmoothCheckbox onChange={handleSelectAll}>
                      <Checkbox value="1" checked={selectAllChecked}>
                        全选
                      </Checkbox>
                    </SmoothCheckbox>
                  </View>
                  <Button className="btn" onClick={delItem}>
                    删除
                  </Button>
                </View>
              ) : null}
            </ScrollView>
          </ScrollWrap>
        </View>
      )}
    </View>
  );
};

export const CollectionList = memo(CollectionListJsx);
