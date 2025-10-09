import { useImages } from "../contexts/ImageContext";

export const useImagesHook = () => {
  const { images } = useImages();
  return images;
};
