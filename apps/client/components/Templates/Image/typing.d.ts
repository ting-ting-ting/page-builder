import { Image1Type } from './Image1/typing';
import { ImageIdEnum, IMAGE_CATEGORY } from './share';

export type ImageTypes = Image1Type;

export type ImageBaseDataType = {
  id: ImageIdEnum;
  category: typeof IMAGE_CATEGORY;
  Editor: () => JSX.Element;
  Preview: () => JSX.Element;
}