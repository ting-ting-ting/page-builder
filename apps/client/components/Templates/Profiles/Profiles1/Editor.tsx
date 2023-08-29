import cx from 'classnames';
import UploadImageField from '@components/Form/UploadImageField';
import EditorField from '@components/Form/EditorField';
import IconLinksFieldArray from '@components/Form/IconLinksFieldArray';
import { Profiles1FieldNames } from './typing';
import classes from './editor.module.scss';

const Profiles1Editor = () => {
  return (
    <div className={classes.root}>
      <div className={classes.avatarFieldWrapper}>
        <UploadImageField
          label="大頭貼"
          registerName={Profiles1FieldNames.profiles1_avatar}
          hint="建議尺寸: 900px X 900px"
        />
      </div>
      <div className={classes.descFieldWrapper}>
        <div className={cx(classes.fieldWrapper, classes.editorField)}>
          <EditorField
            label="簡介"
            registerName={Profiles1FieldNames.profiles1_desc}
          />
        </div>
        <div className={classes.fieldWrapper}>
          <IconLinksFieldArray
            registerName={Profiles1FieldNames.profiles1_icons}
          />
        </div>
      </div>
    </div>
  );
}

export default Profiles1Editor;