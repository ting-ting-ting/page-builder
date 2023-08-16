import classes from './index.module.scss';

const Paragraph1 = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.paragraphWrapper}>
          <p className={classes.text}>ParagraphParagraph</p>
        </div>
        <div className={classes.paragraphWrapper}>
          <p className={classes.text}>ParagraphParagraph</p>
        </div>
        <div className={classes.paragraphWrapper}>
          <p className={classes.text}>ParagraphParagraph</p>
        </div>
      </div>
    </div>
  );
}

export default Paragraph1;