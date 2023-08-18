import EditorField from '@components/Form/EditorField';
import classes from './editor.module.scss';

const Paragraph1Editor = () => {
  return (
    <div className={classes.root}>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落一"
          registerName="p1"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落二"
          registerName="p2"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落三"
          registerName="p3"
        />
      </div>
    </div>
  );
}

export default Paragraph1Editor;