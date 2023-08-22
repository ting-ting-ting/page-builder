import * as Yup from 'yup';
import { Paragraph2Type } from './typing';

export const schema: Yup.ObjectSchema<Paragraph2Type> = Yup.object({
  paragraph2_p1: Yup.string().required('必填'),
  paragraph2_p2: Yup.string().required('必填'),
});
