import { ONE_SECOND } from "@/constants";
import { faker } from "@faker-js/faker";

export type VideoItem = {
  id: string;
  thumbnail_url: string;
  title: string;
  prompt: string;
  url: string;
};

export const getTrendingVideos = async () => {
  return await new Promise<VideoItem[]>((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 5 }, () => {
          return {
            id: faker.string.uuid(),
            thumbnail_url: faker.image.url({
              width: 168,
              height: 268,
            }),
            url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            title: faker.lorem.sentence(),
            prompt: faker.lorem.sentence(),
          };
        })
      );
    }, 1 * ONE_SECOND);
  });
};
