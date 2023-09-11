import { useComponent } from '@brushes/simulate-component';
import { memo, useMemo, useState } from 'react';
import { QjMobileIcon } from '@/common/icon';
import { ScrollWrap } from '@/common/scrollWrap';
import { getEnv, getTaro } from '@brushes/utils';
const uploadingJsx = () => {
  //选择上传方式
  const [visible, setVisible] = useState(false);
  //得到上传图片的本地临时路径
  const [uploadImgPath, setUploadImgPath] = useState([]);
  const { View, Popup, Image } = useComponent();
  const isEnv = useMemo(() => getEnv(), []);
  //点击上传图片
  const clickUpload = () => {
    if (uploadImgPath.length >= 3) {
      if (isEnv) {
        const Taro = getTaro();
        Taro.showToast({
          title: '最多只能上传3张图片!',
          duration: 2000,
          icon: 'none',
          mask: true
        });
      }
      return;
    }
    setVisible(true);
  };
  //点击上传相册图片
  const ToUploadimg = () => {
    if (isEnv) {
      const Taro = getTaro();
      Taro.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
        success: function (res: any) {
          var tempFilePath: any[] = [];
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          tempFilePath.push(res.tempFilePaths[0]);
          setUploadImgPath((pre: any): any => [...pre, ...tempFilePath]);
          setVisible(false);
        }
      });
    }
  };
  //点击删除图片
  const DeleteImg = (index: any) => {
    const imgList = uploadImgPath.slice();
    imgList.splice(index, 1);

    setUploadImgPath((pre: any): any => [...imgList]);
  };
  //点击进行图片预览
  const previewImg = (item: any) => {
    if (isEnv) {
      const Taro = getTaro();
      let urlsList = [];
      urlsList.push(item);
      Taro.previewImage({
        current: item, // 当前显示图片的http链接
        urls: urlsList,
        showmenu: true // 需要预览的图片http链接列表
      });
    }
  };
  return (
    <View className="select_img">
      <View className="icon_img" onClick={clickUpload}>
        <QjMobileIcon value="shangchuanpingzheng" style={{ fontSize: 20, color: '#9e9e9e' }} />
        <View>上传凭证</View>
        <View>(最多3张)</View>
      </View>
      {uploadImgPath.length > 0
        ? uploadImgPath.map((item, index) => {
            return (
              <View className="show_img">
                <View className="delete_btn" onClick={() => DeleteImg(index)}>
                  x
                </View>
                <Image className="img" src={item} key={index} onClick={() => previewImg(item)} />
              </View>
            );
          })
        : ''}

      <Popup popupVisible={visible} popupHandler={setVisible}>
        <View className="upload_content">
          <ScrollWrap>
            <View className="upload_btn">拍照</View>
            <View className="upload_btn" onClick={ToUploadimg}>
              从相册选择
            </View>
            <View className="upload_unbtn" onClick={() => setVisible(false)}>
              取消
            </View>
          </ScrollWrap>
        </View>
      </Popup>
    </View>
  );
};
export const UploadImg = memo(uploadingJsx);
