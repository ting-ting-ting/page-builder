import Editor from './Editor';
import Template from './Template';
import { ParagraphIdEnum } from '../enum';

export const paragraph1Index = {
  [ParagraphIdEnum.PARAGRAPH_1]: {
    id: ParagraphIdEnum.PARAGRAPH_1,
    Editor: Editor,
    Template: Template,
  },
}