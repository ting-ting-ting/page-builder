import TextAreaField from '@components/Form/TextAreaField';
import classes from './editor.module.scss';

const Paragraph2Editor = () => {
  return (
    <div className={classes.root}>
      <div className={classes.fieldWrapper}>
        <TextAreaField
          label="段落一"
          registerName="p1"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <TextAreaField
          label="段落二"
          registerName="p2"
        />
      </div>
    </div>
  );
}

export default Paragraph2Editor;