import cx from 'classnames';
import EditorField from '@components/Form/EditorField';
import classes from './editor.module.scss';

const Paragraph3Editor = () => {
  return (
    <div className={classes.root}>
      <div className={cx(classes.fieldWrapper, classes.s1Wrapper)}>

      </div>
      <div className={cx(classes.fieldWrapper, classes.s2Wrapper)}>
        <EditorField
          label="段落二"
          registerName="paragraph3_p"
        />
      </div>
    </div>
  );
}

export default Paragraph3Editor;