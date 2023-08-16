import { Paragraph2Type } from './typing';
import classes from './template.module.scss';

const Paragraph2Template = ({
  p1,
  p2,
} : Paragraph2Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.paragraphWrapper}>
          <p className={classes.text}>{p1}</p>
        </div>
        <div className={classes.paragraphWrapper}>
          <p className={classes.text}>{p2}</p>
        </div>
      </div>
    </div>
  );
}

export default Paragraph2Template;