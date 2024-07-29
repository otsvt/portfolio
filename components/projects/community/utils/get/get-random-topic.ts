import { StaticImageData } from "next/image";
import { TOPICS } from "../../data/topics";

export const getRandomTopic = (): { name: string; image: StaticImageData } => {
  const randomIndex = Math.floor(Math.random() * TOPICS.length);

  return TOPICS[randomIndex];
};
