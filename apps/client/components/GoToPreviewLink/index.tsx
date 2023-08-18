import Link from 'next/link';
import classes from './index.module.scss';

const GoToPreviewLink = () => {
  return (
    <div className={classes.root}>
      <Link href="/preview" className={classes.link}>
        <span className={classes.text}>GO to preview and DOWNLOAD HTML</span>
      </Link>
    </div>

  );
}

export default GoToPreviewLink;