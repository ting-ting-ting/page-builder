import Editor from './Editor';
import Template from './Template';
import Preview from './Preview';
import { ParagraphIdEnum } from '../share';
import { Paragraph2Type } from './typing';

export const paragraph2Index: {
  [ParagraphIdEnum.PARAGRAPH_2]: {
    id: ParagraphIdEnum.PARAGRAPH_2;
    Editor: () => JSX.Element;
    Template: (props: Paragraph2Type) =>  JSX.Element;
    Preview: () => JSX.Element;
    defaultValues: Paragraph2Type;
  };
} = {
  [ParagraphIdEnum.PARAGRAPH_2]: {
    id: ParagraphIdEnum.PARAGRAPH_2,
    Editor: Editor,
    Template: Template,
    Preview: Preview,
    defaultValues: {
      paragraph2_p1: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
      paragraph2_p2: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
    },
  },
}