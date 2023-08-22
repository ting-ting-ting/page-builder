import * as Yup from 'yup';
import { Profiles1Type } from './typing';

export const schema: Yup.ObjectSchema<Profiles1Type> = Yup.object({
  profiles1_avatar: Yup.string().required('必填'),
  profiles1_desc: Yup.string().required('必填'),
  profiles1_icons: Yup.array().of((
    Yup.object().shape({
      icon: Yup.string().required('必填'),
      url: Yup.string().when('url', ([url], schema) => {
        return url ? schema.matches(
          /(?:(?:http|https):\/\/)?(?:www.)?\//,
          '網址格式錯誤'
        ) : schema;
      }),
    }, [['url','url']])
  )).required(),
});
