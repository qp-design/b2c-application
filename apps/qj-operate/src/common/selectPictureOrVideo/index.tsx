import { useState, useMemo } from 'react';
import type { FormInstance } from 'antd/es/form';
import Image from 'antd/es/image';
import Modal from 'antd/es/modal/Modal';
import { Wrapper } from '@brushes/webmaterial';
import { QjIcon } from '@brushes/share-resource';
import { NamePath } from '@brushes/form';
import TabsPic from './component';
import { ContextProvider, useFileContext } from '@/common/selectPictureOrVideo/store';

const FilePreview = ({ value }: { value: string }) => {
  const fileType = useFileContext();
  return (
    <>
      {fileType === 'picture' ? (
        <Image
          preview={{
            mask: '重选',
            visible: false
          }}
          width={86}
          height={86}
          src={value}
        />
      ) : (
        <div className={'video'}>
          <video
            style={{
              width: 86,
              height: 86,
              objectFit: 'cover'
            }}
            src={value}
            autoPlay={false}
            controls={false}
          />
        </div>
      )}
    </>
  );
};

export function SelectPicture({
  form,
  name,
  parentName = [],
  fileType = 'picture'
}: {
  fileType?: string;
  name: NamePath;
  parentName?: Array<any>;
  form: FormInstance;
}) {
  const value = form.getFieldValue(parentName.concat(name));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const computedName = useMemo(() => parentName.concat(name), [parentName, name]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ContextProvider initialValue={fileType}>
      <div className={'choose-container'} onClick={showModal}>
        {value ? (
          <FilePreview value={value} />
        ) : (
          <div className={'choose'}>
            <QjIcon
              style={{ fontSize: '24px', color: '#888', display: 'block' }}
              name={'icon-shurukuang-shangchuantupian'}
            ></QjIcon>
            <p>上传</p>
          </div>
        )}
      </div>
      <Modal
        destroyOnClose={true}
        width={860}
        title={fileType === 'picture' ? '选择图片' : '选择视频'}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Wrapper>
          <TabsPic name={computedName} handleCancel={handleCancel} form={form} />
        </Wrapper>
      </Modal>
    </ContextProvider>
  );
}
