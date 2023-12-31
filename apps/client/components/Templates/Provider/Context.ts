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
  pushUnderUuid: ({
    id,
    uuid,
    props,
  } : {
    id: TemplateIdEnum;
    uuid: string;
    props: TemplateProps;
  }) => void;
  edit: ({
    id,
    uuid,
    props,
  } : {
    id: TemplateIdEnum;
    uuid: string;
    props: TemplateProps;
  }) => void;
  remove: (uuid: string) => void;
  onUp: (uuid: string) => void;
  onDown: (uuid: string) => void;
  templateUuids: string[];
  templatesDataWithUuid: {
    [uuid: string]: {
      id: TemplateIdEnum;
      uuid: string;
      props: TemplateProps;
    };
  };
};

export const TemplateContext = createContext<TemplateContextValues>({
  push: () => {},
  pushUnderUuid: () => {},
  edit: () => {},
  remove: () => {},
  onUp: () => {},
  onDown: () => {},
  templateUuids: [],
  templatesDataWithUuid: {},
});

export const TemplateContextProvider = TemplateContext.Provider;
