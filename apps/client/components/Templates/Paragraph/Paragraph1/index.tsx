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
      p1: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      p2: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      p3: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    },
  },
}