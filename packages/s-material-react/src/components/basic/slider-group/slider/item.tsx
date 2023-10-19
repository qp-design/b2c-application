//@ts-nocheck
import { memo } from 'react';
import { itemType } from './index';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { useFullPath } from '@/hooks';

export const Items = memo(({ item, position, direction }: { item: itemType; position: string; direction: string }) => {
  const { Image, View } = useComponent();
  const fullPath = useFullPath(item.imgUrl);
  return (
    <Image
      mode={'scaleToFill'}
      src={fullPath}
      style={{
        width: '100%',
        height: '100%',
        paddingBottom: position === 'top' && direction === 'vertical' ? '30px' : '',
        marginTop: position === 'top' && direction === 'horizontal' ? '30px' : ''
      }}
      onClick={navigatorHandler.bind(null, item.link?.value, item.link?.params)}
    />
    // <>
    //     {/*{type === 1 ? (*/}
    //     {/*    <Image*/}
    //     {/*        mode={'widthFix'}*/}
    //     {/*        src={item.imgUrl}*/}
    //     {/*        style={{*/}
    //     {/*            width: '100%',*/}
    //     {/*            height: '100%'*/}
    //     {/*        }}*/}
    //     {/*        onClick={navigatorHandler.bind(null, item.link?.value)}*/}
    //     {/*    />*/}
    //     {/*) : (*/}
    //     {/*    <View*/}
    //     {/*        className={getEnv() ? 'slider-block' : 'pc'}*/}
    //     {/*        style={{*/}
    //     {/*            backgroundImage: `url(${item.imgUrl})`,*/}
    //     {/*            width: '100%'*/}
    //     {/*        }}*/}
    //     {/*        onClick={navigatorHandler.bind(null, item.link?.value)}*/}
    //     {/*    ></View>*/}
    //     {/*)}*/}
    // </>
  );
});
