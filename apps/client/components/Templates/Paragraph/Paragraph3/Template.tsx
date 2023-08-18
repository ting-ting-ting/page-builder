import { Paragraph3Type } from './typing';
import classes from './template.module.scss';

const Paragraph3Template = ({
  paragraph3_image,
  paragraph3_p,
} : Paragraph3Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.s1Wrapper}>

        </div>
        <div className={classes.s2Wrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: paragraph3_p?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Paragraph3Template;