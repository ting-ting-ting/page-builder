export enum Profiles1FieldNames {
  profiles1_avatar = 'profiles1_avatar',
  profiles1_desc = 'profiles1_desc',
  profiles1_icons = 'profiles1_icons',
}

export type Profiles1Type = {
  [Profiles1FieldNames.profiles1_avatar]: string;
  [Profiles1FieldNames.profiles1_desc]: string;
  [Profiles1FieldNames.profiles1_icons]: {
    icon: string;
    url?: string;
  }[];
}