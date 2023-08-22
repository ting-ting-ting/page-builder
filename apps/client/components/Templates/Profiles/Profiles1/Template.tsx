import Image from 'next/image';
import { Profiles1Type } from './typing';
import classes from './template.module.scss';

const Profiles1Template = ({
  profiles1_i1,
  profiles1_i2,
  profiles1_i3
} : Profiles1Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.fieldWrapper}>
          <div className={classes.imageWrapper}>
            {profiles1_i1 ? (
              <Image src={profiles1_i1} alt="" fill />
            ) : (
              <div className={classes.imagePlaceholder}>
                Image
              </div>
            )}
          </div>
        </div>
        <div className={classes.fieldWrapper}>
          <div className={classes.imageWrapper}>
            {profiles1_i2 ? (
              <Image src={profiles1_i2} alt="" fill />
            ) : (
              <div className={classes.imagePlaceholder}>
                Image
              </div>
            )}
          </div>
        </div>
        <div className={classes.fieldWrapper}>
          <div className={classes.imageWrapper}>
            {profiles1_i3 ? (
              <Image src={profiles1_i3} alt="" fill />
            ) : (
              <div className={classes.imagePlaceholder}>
                Image
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles1Template;