import { useContext } from 'react';
import { IconsContext } from "./Context";

export const useIcons = () => {
  const icons = useContext(IconsContext);

  if (!icons) {
    throw new Error("Please provide icons");
  }

  return icons;
};
