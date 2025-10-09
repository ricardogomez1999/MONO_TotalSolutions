import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { images as defaultImages } from "../config/images";

interface ImageContextType {
  images: typeof defaultImages;
  updateImage: (
    category: keyof typeof defaultImages,
    key: string,
    newUrl: string
  ) => void;
  resetImages: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  // Load images from localStorage or use defaults
  const [images, setImages] = useState(() => {
    const savedImages = localStorage.getItem("mono-images");
    if (savedImages) {
      try {
        return { ...defaultImages, ...JSON.parse(savedImages) };
      } catch {
        return defaultImages;
      }
    }
    return defaultImages;
  });

  // Save to localStorage whenever images change
  useEffect(() => {
    localStorage.setItem("mono-images", JSON.stringify(images));
  }, [images]);

  const updateImage = (
    category: keyof typeof defaultImages,
    key: string,
    newUrl: string
  ) => {
    setImages((prev: typeof defaultImages) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: newUrl,
      },
    }));
  };

  const resetImages = () => {
    setImages(defaultImages);
    localStorage.removeItem("mono-images");
  };

  const value = {
    images,
    updateImage,
    resetImages,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error("useImages must be used within an ImageProvider");
  }
  return context;
};
