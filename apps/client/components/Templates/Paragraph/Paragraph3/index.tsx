import Editor from './Editor';
import Template from './Template';
import Preview from './Preview';
import { ParagraphIdEnum, PARAGRAPH_CATEGORY } from '../share';
import { Paragraph3Type } from './typing';
import { ParagraphBaseDataType } from '../typing';

export const paragraph3Index: {
  [ParagraphIdEnum.PARAGRAPH_3]: ParagraphBaseDataType & {
    Template: (props: Paragraph3Type) =>  JSX.Element;
    defaultValues: Paragraph3Type;
  };
} = {
  [ParagraphIdEnum.PARAGRAPH_3]: {
    id: ParagraphIdEnum.PARAGRAPH_3,
    category: PARAGRAPH_CATEGORY,
    Editor: Editor,
    Template: Template,
    Preview: Preview,
    defaultValues: {
      paragraph3_image: '',
      paragraph3_p: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
    },
  },
}