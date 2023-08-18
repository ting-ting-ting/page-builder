import { Paragraph2Type } from './typing';
import classes from './template.module.scss';

const Paragraph2Template = ({
  paragraph2_p1,
  paragraph2_p2,
} : Paragraph2Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: paragraph2_p1?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
        <div className={classes.paragraphWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: paragraph2_p2?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Paragraph2Template;