import * as Yup from 'yup';
import { Image1Type } from './typing';

export const schema: Yup.ObjectSchema<Image1Type> = Yup.object({
  image1_i1: Yup.string().required('必填'),
  image1_i2: Yup.string().required('必填'),
  image1_i3: Yup.string().required('必填'),
});
