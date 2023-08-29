import UploadImageField from '@components/Form/UploadImageField';
import { Image1FieldNames } from './typing';
import classes from './editor.module.scss';

const Image1Editor = () => {
  return (
    <div className={classes.root}>
      <div className={classes.fieldWrapper}>
        <UploadImageField
          label="圖一"
          registerName={Image1FieldNames.image1_i1}
          hint="建議尺寸: 900px X 600px"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <UploadImageField
          label="圖二"
          registerName={Image1FieldNames.image1_i2}
          hint="建議尺寸: 900px X 600px"
        />
      </div>
      <div className={classes.fieldWrapper}>
        <UploadImageField
          label="圖三"
          registerName={Image1FieldNames.image1_i3}
          hint="建議尺寸: 900px X 600px"
        />
      </div>
    </div>
  );
}

export default Image1Editor;