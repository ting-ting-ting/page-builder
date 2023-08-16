import dynamic from 'next/dynamic';
import classes from './index.module.scss';

const AddModal = dynamic(() => import('@components/AddModal'), {
  ssr: false,
});

const AddArea = () => {
  return (
    <>
      <div className={classes.root}>
        <div className={classes.area}>
          Area
        </div>
      </div>
      <AddModal />
    </>
  );
}

export default AddArea;