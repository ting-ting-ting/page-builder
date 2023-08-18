import Editor from './Editor';
import Template from './Template';
import { ParagraphIdEnum } from '../enum';
import { Paragraph1Type } from './typing';

export const paragraph1Index: {
  [ParagraphIdEnum.PARAGRAPH_1]: {
    id: ParagraphIdEnum.PARAGRAPH_1;
    Editor: () => JSX.Element;
    Template: (props: Paragraph1Type) =>  JSX.Element;
    defaultValues: Paragraph1Type;
  };
} = {
  [ParagraphIdEnum.PARAGRAPH_1]: {
    id: ParagraphIdEnum.PARAGRAPH_1,
    Editor: Editor,
    Template: Template,
    defaultValues: {
      paragraph1_p1: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
      paragraph1_p2: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
      paragraph1_p3: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
    },
  },
}