import { paragraphIndex, paragraphIds } from './Paragraph/index';
import { imageIndex, imageIds } from './Image/index';

export const templateData = {
  ...paragraphIndex,
  ...imageIndex,
}

export const PARAGRAPH_CATEGORY = 'PARAGRAPH_CATEGORY';
export const IMAGE_CATEGORY = 'IMAGE_CATEGORY';

export type TemplateCategoryIdType = typeof PARAGRAPH_CATEGORY | typeof IMAGE_CATEGORY;

export const templateCategories: {
  id: TemplateCategoryIdType;
  name: string;
}[] = [
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
  [PARAGRAPH_CATEGORY]: paragraphIds,
  [IMAGE_CATEGORY]: imageIds,
}