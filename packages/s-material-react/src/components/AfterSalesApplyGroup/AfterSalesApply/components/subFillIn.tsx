import React, { memo, useContext } from 'react';
import { QjMobileIcon } from '@/common/icon';
import { useComponent } from '@brushes/simulate-component';
import { MCAfterSalesApply } from '../context';

const SubFillInJsx: React.FC = () => {
  const { View, TextArea, Textarea } = useComponent();
  const Te = Textarea || TextArea;
  const { handleChooseImg, imgGroup, placeholder, handleDelImg, limit, handleFillInReason } =
    useContext(MCAfterSalesApply);

  return (
    <View className={'afterSalesApplySubFillIn'}>
      <View className={'title'}>{'补充描述和凭证'}</View>
      <View className={'content'}>
        <Te
          placeholder={placeholder}
          rows={5}
          maxLength={200}
          style={{
            marginBottom: 15
          }}
          onInput={handleFillInReason}
        />
        <View className={'imgGroup'}>
          {imgGroup.length < limit ? (
            <View className={'add'} onClick={handleChooseImg}>
              <View className={'addContent'}>
                <QjMobileIcon value={'shangchuanpingzheng'} />
                <View className={'word'}>上传凭证</View>
                <View className={'num'}>
                  {imgGroup.length}/{limit}
                </View>
              </View>
            </View>
          ) : null}
          {imgGroup.map((item: string, index: number) => (
            <View
              key={index}
              className={'imgItem'}
              style={{
                backgroundImage: `url(${item})`
              }}
            >
              <View className={'cancel'} onClick={handleDelImg.bind(null, index)}>
                <QjMobileIcon value={'close-bold'} style={{ fontSize: 12 }} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export const SubFillIn = memo(SubFillInJsx);
