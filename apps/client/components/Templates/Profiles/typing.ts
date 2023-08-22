import { Profiles1Type } from './Profiles1/typing';
import { ProfilesIdEnum, PROFILES_CATEGORY } from './share';

export type ProfilesTypes = Profiles1Type;

export type ProfilesBaseDataType = {
  id: ProfilesIdEnum;
  category: typeof PROFILES_CATEGORY;
  Editor: () => JSX.Element;
  Preview: () => JSX.Element;
}