import * as Yup from 'yup';
import Editor from './Editor';
import Template from './Template';
import Preview from './Preview';
import { ParagraphIdEnum, PARAGRAPH_CATEGORY } from '../share';
import { schema } from './schema';
import { Paragraph2Type } from './typing';
import { ParagraphBaseDataType } from '../typing';

export const paragraph2Index: {
  [ParagraphIdEnum.PARAGRAPH_2]: ParagraphBaseDataType & {
    Template: (props: Paragraph2Type) =>  JSX.Element;
    defaultValues: Paragraph2Type;
    schema: Yup.ObjectSchema<Paragraph2Type>;
  };
} = {
  [ParagraphIdEnum.PARAGRAPH_2]: {
    id: ParagraphIdEnum.PARAGRAPH_2,
    category: PARAGRAPH_CATEGORY,
    Editor: Editor,
    Template: Template,
    Preview: Preview,
    schema,
    defaultValues: {
      paragraph2_p1: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
      paragraph2_p2: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
    },
  },
}