import { profilesIndex, profilesIds, PROFILES_CATEGORY } from './Profiles/index';
import { paragraphIndex, paragraphIds, PARAGRAPH_CATEGORY } from './Paragraph/index';
import { imageIndex, imageIds, IMAGE_CATEGORY } from './Image/index';

export const templateData = {
  ...profilesIndex,
  ...paragraphIndex,
  ...imageIndex,
}

export type TemplateCategoryIdType = typeof PROFILES_CATEGORY | typeof PARAGRAPH_CATEGORY | typeof IMAGE_CATEGORY;

export const templateCategories: {
  id: TemplateCategoryIdType;
  name: string;
}[] = [
  {
    id: PROFILES_CATEGORY,
    name: 'Profiles',
  },
  {
    id: PARAGRAPH_CATEGORY,
    name: 'Paragraph',
  },
  {
    id: IMAGE_CATEGORY,
    name: 'Images',
  },
];

export const templateIds = {
  [PROFILES_CATEGORY]: profilesIds,
  [PARAGRAPH_CATEGORY]: paragraphIds,
  [IMAGE_CATEGORY]: imageIds,
}