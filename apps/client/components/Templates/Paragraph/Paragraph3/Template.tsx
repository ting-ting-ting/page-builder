import cx from 'classnames';
import { Paragraph3Type } from './typing';
import classes from './template.module.scss';

const Paragraph3Template = ({
  p1,
  p2,
} : Paragraph3Type) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={cx(classes.paragraphWrapper, classes.s1Wrapper)}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: p1.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
        <div className={cx(classes.paragraphWrapper, classes.s2Wrapper)}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: p2.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Paragraph3Template;