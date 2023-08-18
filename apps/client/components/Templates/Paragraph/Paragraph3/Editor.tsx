import cx from 'classnames';
import EditorField from '@components/Form/EditorField';
import classes from './editor.module.scss';

const Paragraph3Editor = () => {
  return (
    <div className={classes.root}>
      <div className={cx(classes.fieldWrapper, classes.s1Wrapper)}>
        <EditorField
          label="段落一"
          registerName="p1"
        />
      </div>
      <div className={cx(classes.fieldWrapper, classes.s2Wrapper)}>
        <EditorField
          label="段落二"
          registerName="p2"
        />
      </div>
    </div>
  );
}

export default Paragraph3Editor;