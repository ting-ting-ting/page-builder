/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

export type IconsContextValues = {
  getIcon: (iconId: string, className?: string) => JSX.Element | null;
  icons: {
    id: string;
    icon: JSX.Element | null;
  }[];
};

export const IconsContext = createContext<IconsContextValues>({
  getIcon: () => null,
  icons: [],
});

export const IconsContextProvider = IconsContext.Provider;
