import * as Yup from 'yup';
import { Paragraph3Type } from './typing';

export const schema: Yup.ObjectSchema<Paragraph3Type> = Yup.object({
  paragraph3_image: Yup.string().required('必填'),
  paragraph3_p: Yup.string().required('必填'),
});
