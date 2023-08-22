import Image from 'next/image';
import { Profiles1Type } from './typing';
import classes from './template.module.scss';

const Profiles1Template = ({
  profiles1_avatar,
  profiles1_desc,
} : Profiles1Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.avatarFieldWrapper}>
          <div className={classes.imageWrapper}>
            {profiles1_avatar ? (
              <Image src={profiles1_avatar} alt="" fill />
            ) : (
              <div className={classes.imagePlaceholder}>
                Image
              </div>
            )}
          </div>
        </div>
        <div className={classes.descFieldWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: profiles1_desc?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profiles1Template;