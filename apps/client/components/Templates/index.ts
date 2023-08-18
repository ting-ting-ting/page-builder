import { paragraphIndex, paragraphIds } from './Paragraph/index';
import { imageIndex, imageIds } from './Image/index';

export const templateData = {
  ...paragraphIndex,
  ...imageIndex,
}

export const PARAGRAPH_CATEGORY = 'PARAGRAPH_CATEGORY';
export const IMAGE_CATEGORY = 'IMAGE_CATEGORY';

export const templateCategories = [
  {
    id: PARAGRAPH_CATEGORY,
    name: 'Paragraph',
  },
  {
    id: IMAGE_CATEGORY,
    name: 'Images',
  },
];

export const templateIds = [
  ...paragraphIds,
  ...imageIds,
]