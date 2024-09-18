import { memo } from "react";
import { View } from "react-native";
import SkeletonLoader from "expo-skeleton-loader";
import { COLORS } from "@/constants/colors";
import s from "./CarouselSkeleton.styles";

const CarouselSkeleton: React.FC = () => {
  return (
    <View style={s.wrap}>
      <SkeletonLoader
        boneColor={COLORS.black100}
        highlightColor={COLORS.black300}
        style={s.skeleton}
      >
        <SkeletonLoader.Container style={s.cardsContainer}>
          <SkeletonLoader.Item style={s.cardSide} />
          <SkeletonLoader.Item style={s.cardCenter} />
          <SkeletonLoader.Item style={s.cardSide} />
        </SkeletonLoader.Container>
      </SkeletonLoader>
      <SkeletonLoader
        boneColor={COLORS.black100}
        highlightColor={COLORS.black300}
      >
        <SkeletonLoader.Container style={s.dotContainer}>
          <SkeletonLoader.Item style={s.dorInactive} />
          <SkeletonLoader.Item style={s.dotActive} />
          <SkeletonLoader.Item style={s.dorInactive} />
          <SkeletonLoader.Item style={s.dorInactive} />
        </SkeletonLoader.Container>
      </SkeletonLoader>
    </View>
  );
};

export default memo(CarouselSkeleton);
