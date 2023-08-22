import * as Yup from 'yup';
import Editor from './Editor';
import Template from './Template';
import Preview from './Preview';
import { ImageIdEnum, IMAGE_CATEGORY } from '../share';
import { schema } from './schema';
import { Image1Type } from './typing';
import { ImageBaseDataType } from '../typing';

export const image1Index: {
  [ImageIdEnum.IMAGE_1]: ImageBaseDataType & {
    Template: (props: Image1Type) =>  JSX.Element;
    defaultValues: Image1Type;
    schema: Yup.ObjectSchema<Image1Type>;
  };
} = {
  [ImageIdEnum.IMAGE_1]: {
    id: ImageIdEnum.IMAGE_1,
    category: IMAGE_CATEGORY,
    Editor: Editor,
    Template: Template,
    Preview: Preview,
    schema,
    defaultValues: {
      image1_i1: '',
      image1_i2: '',
      image1_i3: '',
    },
  },
}