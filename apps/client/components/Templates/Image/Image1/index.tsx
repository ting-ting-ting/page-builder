import Editor from './Editor';
import Template from './Template';
import { ImageIdEnum } from '../enum';
import { Image1Type } from './typing';

export const image1Index: {
  [ImageIdEnum.IMAGE_1]: {
    id: ImageIdEnum.IMAGE_1;
    Editor: () => JSX.Element;
    Template: (props: Image1Type) =>  JSX.Element;
    defaultValues: Image1Type;
  };
} = {
  [ImageIdEnum.IMAGE_1]: {
    id: ImageIdEnum.IMAGE_1,
    Editor: Editor,
    Template: Template,
    defaultValues: {
      image1_i1: '',
      image1_i2: '',
      image1_i3: '',
    },
  },
}