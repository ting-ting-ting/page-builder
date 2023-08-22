import * as Yup from 'yup';
import Editor from './Editor';
import Template from './Template';
import Preview from './Preview';
import { ProfilesIdEnum, PROFILES_CATEGORY } from '../share';
import { Profiles1Type } from './typing';
import { schema } from './schema';
import { ProfilesBaseDataType } from '../typing';

export const profiles1Index: {
  [ProfilesIdEnum.PROFILES_1]: ProfilesBaseDataType & {
    Template: (props: Profiles1Type) =>  JSX.Element;
    defaultValues: Profiles1Type;
    schema: Yup.ObjectSchema<Profiles1Type>;
  };
} = {
  [ProfilesIdEnum.PROFILES_1]: {
    id: ProfilesIdEnum.PROFILES_1,
    category: PROFILES_CATEGORY,
    Editor: Editor,
    Template: Template,
    Preview: Preview,
    schema,
    defaultValues: {
      profiles1_avatar: '',
      profiles1_desc: '<p>我是簡介</p>',
      profiles1_icons: [{
        icon: '',
        url: '',
      }],
    },
  },
}