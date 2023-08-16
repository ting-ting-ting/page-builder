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
  edit: ({
    uuid,
    props,
  } : {
    uuid: string;
    props: TemplateProps;
  }) => void;
  templateUuids: string[];
  templatesData: {
    [uuid: string]: {
      id: TemplateIdEnum;
      uuid: string;
      props: TemplateProps;
    };
  };
};

export const TemplateContext = createContext<TemplateContextValues>({
  push: () => {},
  edit: () => {},
  templateUuids: [],
  templatesData: {},
});

export const TemplateContextProvider = TemplateContext.Provider;
