import { paragraph1Index } from './Paragraph1/index';
import { paragraph2Index } from './Paragraph2/index';
import { ParagraphIdEnum } from './enum';

export const paragraphIndex = {
  ...paragraph1Index,
  ...paragraph2Index,
}

export const paragraphIds = [
  ParagraphIdEnum.PARAGRAPH_1,
  ParagraphIdEnum.PARAGRAPH_2,
]