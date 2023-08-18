import { Paragraph1Type } from './typing';
import classes from './template.module.scss';

const Paragraph1Template = ({
  p1,
  p2,
  p3,
} : Paragraph1Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: p1.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: p2.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: p3.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Paragraph1Template;