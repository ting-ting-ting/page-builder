import { Paragraph1Type } from './typing';
import classes from './template.module.scss';

const Paragraph1Template = ({
  paragraph1_p1,
  paragraph1_p2,
  paragraph1_p3,
} : Paragraph1Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: paragraph1_p1?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: paragraph1_p2?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: paragraph1_p3?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Paragraph1Template;