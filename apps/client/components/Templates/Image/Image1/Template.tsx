import Image from 'next/image';
import { Image1Type } from './typing';
import classes from './template.module.scss';

const Image1Template = ({
  image1_i1,
  image1_i2,
  image1_i3
} : Image1Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.fieldWrapper}>
          <div className={classes.imageWrapper}>
            {image1_i1 ? (
              <Image src={image1_i1} alt="" fill />
            ) : (
              <div className={classes.imagePlaceholder}>
                Image
              </div>
            )}
          </div>
        </div>
        <div className={classes.fieldWrapper}>
          <div className={classes.imageWrapper}>
            {image1_i2 ? (
              <Image src={image1_i2} alt="" fill />
            ) : (
              <div className={classes.imagePlaceholder}>
                Image
              </div>
            )}
          </div>
        </div>
        <div className={classes.fieldWrapper}>
          <div className={classes.imageWrapper}>
            {image1_i3 ? (
              <Image src={image1_i3} alt="" fill />
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

export default Image1Template;