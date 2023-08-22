import * as Yup from 'yup';
import { Paragraph1Type } from './typing';

export const schema: Yup.ObjectSchema<Paragraph1Type> = Yup.object({
  paragraph1_p1: Yup.string().required('必填'),
  paragraph1_p2: Yup.string().required('必填'),
  paragraph1_p3: Yup.string().required('必填'),
});
