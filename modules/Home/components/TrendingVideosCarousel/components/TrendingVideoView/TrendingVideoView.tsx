import { ImageBackground, TouchableOpacity, View } from "react-native";
import { memo, useRef } from "react";
import { usePrevious, useToggle, useUpdateEffect } from "@react-hookz/web";
import { Video, ResizeMode } from "expo-av";
import type { VideoItem } from "@/api/videos";
import s from "./TrendingVideoView.styles";

const TrendingVideoView: React.FC<VideoItem> = ({ url, thumbnail_url }) => {
  const ref = useRef<Video>(null);
  const [isPlaying, toggleIsPlaying] = useToggle();
  const previousIsPlaying = usePrevious(isPlaying);

  useUpdateEffect(() => {
    if (isPlaying) {
      ref.current?.playAsync();
    } else {
      ref.current?.stopAsync();
    }
    console.log(isPlaying);
  }, [isPlaying]);

  console.log(isPlaying);

  return (
    <View style={s.wrap}>
      {isPlaying ? (
        <Video
          ref={ref}
          style={s.video}
          useNativeControls
          source={{ uri: url }}
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded && previousIsPlaying && !status.isPlaying) {
              ref.current?.stopAsync();
              toggleIsPlaying(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          style={s.posterWrap}
          onPress={() => {
            toggleIsPlaying(true);
          }}
        >
          <ImageBackground
            style={s.posterImage}
            source={{
              uri: thumbnail_url,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(TrendingVideoView);
