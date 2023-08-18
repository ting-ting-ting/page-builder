import example from '@public/images/example.jpg';
import Editor from './Editor';
import Template from './Template';
import { ParagraphIdEnum } from '../enum';
import { Paragraph3Type } from './typing';

export const paragraph3Index: {
  [ParagraphIdEnum.PARAGRAPH_3]: {
    id: ParagraphIdEnum.PARAGRAPH_3;
    Editor: () => JSX.Element;
    Template: (props: Paragraph3Type) =>  JSX.Element;
    defaultValues: Paragraph3Type;
  };
} = {
  [ParagraphIdEnum.PARAGRAPH_3]: {
    id: ParagraphIdEnum.PARAGRAPH_3,
    Editor: Editor,
    Template: Template,
    defaultValues: {
      paragraph3_image: example.blurDataURL ?? '',
      paragraph3_p: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>',
    },
  },
}