import { useQuery } from "@tanstack/react-query";
import { getTrendingVideos } from "@/api/videos";
import { ONE_MINUTE } from "@/constants";

export const useGetTrendingVideos = () => {
  const query = useQuery({
    queryKey: ["videos/trending"],
    queryFn: getTrendingVideos,
    staleTime: 5 * ONE_MINUTE,
  });

  return query;
};
