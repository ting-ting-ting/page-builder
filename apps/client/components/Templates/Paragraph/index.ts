import { paragraph1Index } from './Paragraph1/index';
import { paragraph2Index } from './Paragraph2/index';
import { paragraph3Index } from './Paragraph3/index';
import { ParagraphIdEnum, PARAGRAPH_CATEGORY } from './share';

export const paragraphIndex = {
  ...paragraph1Index,
  ...paragraph2Index,
  ...paragraph3Index,
}

export const paragraphIds = [
  ParagraphIdEnum.PARAGRAPH_1,
  ParagraphIdEnum.PARAGRAPH_2,
  ParagraphIdEnum.PARAGRAPH_3,
];

export {
  PARAGRAPH_CATEGORY,
}