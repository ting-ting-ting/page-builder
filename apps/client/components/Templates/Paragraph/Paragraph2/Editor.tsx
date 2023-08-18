import EditorField from '@components/Form/EditorField';
import classes from './editor.module.scss';

const Paragraph2Editor = () => {
  return (
    <div className={classes.root}>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落一"
          registerName="paragraph2_p1"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落二"
          registerName="paragraph2_p2"
        />
      </div>
    </div>
  );
}

export default Paragraph2Editor;