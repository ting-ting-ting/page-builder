/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { TemplateIdEnum } from '../enum';
import { TemplateProps } from '../typing';

export type TemplateContextValues = {
  push: ({
    id,
    props,
  } : {
    id: TemplateIdEnum;
    props: TemplateProps;
  }) => void;
  templates: {
    id: TemplateIdEnum;
    uid: string;
    props: TemplateProps;
  }[];
};

export const TemplateContext = createContext<TemplateContextValues>({
  push: () => {},
  templates: [],
});

export const TemplateContextProvider = TemplateContext.Provider;
