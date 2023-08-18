import { paragraphIndex, paragraphIds } from './Paragraph/index';
import { imageIndex, imageIds } from './Image/index';

export const templateData = {
  ...paragraphIndex,
  ...imageIndex,
}

export const templateIds = [
  ...paragraphIds,
  ...imageIds,
]