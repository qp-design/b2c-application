import {useFootprint} from 'qj-mobile-store';
import {FootprintGroup} from './components';
import {useComponent} from '@brushes/simulate-component';
import {ScrollWrap} from '@/common/scrollWrap';
import {memo} from 'react';

const FootPrintJsx = () => {
  const {View, ScrollView, SmoothCheckbox, Button, WrapLoading} = useComponent();
  const {footprintList, edit, setEdit, getSelectItem, delItem, getData, loading} = useFootprint();

  return (
    <WrapLoading loading={loading}>
      <View className="footprint">
        <View className="hasDate">
          <View className="topBar">
            <View className="edit" onClick={() => setEdit(!edit)}>
              {edit ? '完成' : '编辑'}
            </View>
          </View>
          <ScrollWrap id={'topBar1'}>
            <ScrollView scrollY scrollWithAnimation refresherEnabled={true} onScrollToLower={getData}>
              <SmoothCheckbox onChange={getSelectItem}>

                <FootprintGroup footprintList={footprintList} edit={edit}/>
              </SmoothCheckbox>
              {edit ? (
                <View className="handleBar">
                  <View className="checkAll">
                    {/*<Checkbox.Group onChange={handleSelectAll}>*/}
                    {/*  <Checkbox value='1' checked={selectAllChecked}>全选</Checkbox>*/}
                    {/*</Checkbox.Group>*/}
                  </View>
                  <Button className="btn" onClick={delItem}>
                    删除
                  </Button>
                </View>
              ) : null}
            </ScrollView>
          </ScrollWrap>
        </View>
      </View>
    </WrapLoading>
  );
};

export const FootPrint = memo(FootPrintJsx);
