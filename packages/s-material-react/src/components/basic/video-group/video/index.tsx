import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';

interface VideoType {
  url: string;
  poster: string;
  autoplay: boolean;
  loop: boolean;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
}

const VideoJsx: React.FC<VideoType> = ({
  url,
  poster,
  autoplay,
  loop,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
}) => {
  const { View } = useComponent();
  return (
    <View style={{ paddingTop, paddingBottom }}>
      <video
        className={'components-video'}
        src={url}
        poster={poster}
        autoPlay={autoplay}
        loop={loop}
        controls={true}
        object-fit="contain"
        style={{
          width: '100%',
          height: '240px',
          paddingLeft,
          paddingRight
        }}
      />
    </View>
  );
};

export const Video = memo(VideoJsx);
