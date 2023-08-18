import { Paragraph1Type } from './Paragraph1/typing';
import { Paragraph2Type } from './Paragraph2/typing';
import { Paragraph3Type } from './Paragraph3/typing';
import { PARAGRAPH_CATEGORY } from './share';

export type ParagraphTypes = Paragraph1Type | Paragraph2Type | Paragraph3Type;

export type ParagraphBaseDataType = {
  id: ParagraphIdEnum;
  category: typeof PARAGRAPH_CATEGORY;
  Editor: () => JSX.Element;
  Preview: () => JSX.Element;
}