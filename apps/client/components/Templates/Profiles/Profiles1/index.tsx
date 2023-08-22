import Editor from './Editor';
import Template from './Template';
import Preview from './Preview';
import { ProfilesIdEnum, PROFILES_CATEGORY } from '../share';
import { Profiles1Type } from './typing';
import { ProfilesBaseDataType } from '../typing';

export const profiles1Index: {
  [ProfilesIdEnum.PROFILES_1]: ProfilesBaseDataType & {
    Template: (props: Profiles1Type) =>  JSX.Element;
    defaultValues: Profiles1Type;
  };
} = {
  [ProfilesIdEnum.PROFILES_1]: {
    id: ProfilesIdEnum.PROFILES_1,
    category: PROFILES_CATEGORY,
    Editor: Editor,
    Template: Template,
    Preview: Preview,
    defaultValues: {
      profiles1_i1: '',
      profiles1_i2: '',
      profiles1_i3: '',
    },
  },
}