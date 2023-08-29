import cx from 'classnames';
import EditorField from '@components/Form/EditorField';
import UploadImageField from '@components/Form/UploadImageField';
import { Paragraph3FieldNames } from './typing';
import classes from './editor.module.scss';

const Paragraph3Editor = () => {
  return (
    <div className={classes.root}>
      <div className={cx(classes.fieldWrapper, classes.s1Wrapper)}>
        <UploadImageField
          label="圖"
          registerName={Paragraph3FieldNames.paragraph3_image}
          hint="建議尺寸: 900px X 600px"
        />
      </div>
      <div className={cx(classes.fieldWrapper, classes.s2Wrapper)}>
        <EditorField
          label="段落"
          registerName={Paragraph3FieldNames.paragraph3_p}
        />
      </div>
    </div>
  );
}

export default Paragraph3Editor;