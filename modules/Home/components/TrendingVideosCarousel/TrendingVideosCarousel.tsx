import { memo, useCallback } from "react";
import { useCounter, useToggle } from "@react-hookz/web";
import { View, Dimensions, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { interpolate } from "react-native-reanimated";
import { useGetTrendingVideos } from "@/hooks/api/useVideosApi";
import { ONE_SECOND } from "@/constants";
import { VIDEO_DIMENSIONS } from "./constants";
import Typography from "@/components/Typography";
import TrendingVideoView from "./components/TrendingVideoView";
import CarouselSkeleton from "./components/CarouselSkeleton";
import s from "./TrendingVideosCarousel.styles";

const TrendingVideosCarousel: React.FC = () => {
  const { data: videos, isFetching } = useGetTrendingVideos();

  const windowWidth = Dimensions.get("window").width;

  const [isAutoPlay] = useToggle(false);
  const [, { set: setActiveIndex }] = useCounter(0);

  const centerOffset = windowWidth / 2 - VIDEO_DIMENSIONS.width / 2;

  // NOTE: Function seems to be  inside the component.
  // NOTE: otherwise the app will crash
  // NOTE: ...
  const animationStyle = useCallback(
    (value: number) => {
      "worklet";

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-20, -15, 0, 0, 0, 15, 20]
      );

      const translateX =
        interpolate(
          value,
          [-1, 0, 1],
          [-VIDEO_DIMENSIONS.width, 0, VIDEO_DIMENSIONS.width]
        ) +
        centerOffset -
        itemGap;

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.85, 1, 0.85, 0.8]
      );

      return {
        transform: [
          {
            translateX,
          },
          {
            translateY: 0,
          },
          { scale },
        ],
      };
    },
    [centerOffset]
  );

  return (
    <View>
      <Typography style={s.title}>Trending Videos</Typography>
      {isFetching ? (
        <CarouselSkeleton />
      ) : (
        <View style={s.carouselWrap}>
          {videos?.length ? (
            <View>
              <Carousel
                width={168}
                style={{
                  width: windowWidth,
                }}
                height={268}
                data={videos}
                loop
                mode="parallax"
                pagingEnabled
                snapEnabled
                autoPlay={isAutoPlay}
                autoPlayInterval={3 * ONE_SECOND}
                modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 50,
                }}
                customAnimation={animationStyle}
                onSnapToItem={setActiveIndex}
                renderItem={(video) => {
                  return <TrendingVideoView {...video.item} />;
                }}
              />
            </View>
          ) : (
            // TODO
            <Typography>No trending videos available at the moment</Typography>
          )}
        </View>
      )}
    </View>
  );
};

export default memo(TrendingVideosCarousel);
