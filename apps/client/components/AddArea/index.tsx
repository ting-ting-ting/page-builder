import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import classes from './index.module.scss';

const AddModal = dynamic(() => import('@components/AddModal'), {
  ssr: false,
});

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
          <p className={classes.add}>增加</p>
        </div>
      </div>
      <AddModal open={open} onClose={onClose} />
    </>
  );
}

export default AddArea;