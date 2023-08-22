import * as Yup from 'yup';
import Editor from './Editor';
import Template from './Template';
import Preview from './Preview';
import { ParagraphIdEnum, PARAGRAPH_CATEGORY } from '../share';
import { schema } from './schema';
import { Paragraph1Type } from './typing';
import { ParagraphBaseDataType } from '../typing';

export const paragraph1Index: {
  [ParagraphIdEnum.PARAGRAPH_1]: ParagraphBaseDataType & {
    Template: (props: Paragraph1Type) =>  JSX.Element;
    defaultValues: Paragraph1Type;
    schema: Yup.ObjectSchema<Paragraph1Type>;
  };
} = {
  [ParagraphIdEnum.PARAGRAPH_1]: {
    id: ParagraphIdEnum.PARAGRAPH_1,
    category: PARAGRAPH_CATEGORY,
    Editor: Editor,
    Template: Template,
    Preview: Preview,
    schema,
    defaultValues: {
      paragraph1_p1: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
      paragraph1_p2: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
      paragraph1_p3: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
    },
  },
}