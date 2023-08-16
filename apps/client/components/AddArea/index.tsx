import { useState, useCallback } from 'react';
import { Icon } from '@mezzanine-ui/react';
import { PlusIcon } from '@mezzanine-ui/icons';
import TemplateEditModal from '@components/TemplateEditModal';
import classes from './index.module.scss';

const AddArea = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.area} onClick={() => {
          setOpen(s => !s);
        }}>
          <Icon icon={PlusIcon} className={classes.icon} />
        </div>
      </div>
      <TemplateEditModal open={open} onClose={onClose} />
    </>
  );
}

export default AddArea;