import EditorField from '@components/Form/EditorField';
import { Paragraph1FieldNames } from './typing';
import classes from './editor.module.scss';

const Paragraph1Editor = () => {
  return (
    <div className={classes.root}>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落一"
          registerName={Paragraph1FieldNames.paragraph1_p1}
        />
      </div>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落二"
          registerName={Paragraph1FieldNames.paragraph1_p2}
        />
      </div>
      <div className={classes.fieldWrapper}>
        <EditorField
          label="段落三"
          registerName={Paragraph1FieldNames.paragraph1_p3}
        />
      </div>
    </div>
  );
}

export default Paragraph1Editor;