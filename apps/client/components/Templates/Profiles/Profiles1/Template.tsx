import Image from 'next/image';
import { useIcons } from '@components/IconsProvider/useIcons';
import { Profiles1Type } from './typing';
import classes from './template.module.scss';

const Profiles1Template = ({
  profiles1_avatar,
  profiles1_desc,
  profiles1_icons,
} : Profiles1Type) => {
  const { getIcon } = useIcons();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.avatarFieldWrapper}>
          <div className={classes.imageWrapper}>
            {profiles1_avatar ? (
              <Image src={profiles1_avatar} alt="" fill />
            ) : (
              <div className={classes.imagePlaceholder}>
                Image
              </div>
            )}
          </div>
        </div>
        <div className={classes.descFieldWrapper}>
          <p
            className={classes.text}
            dangerouslySetInnerHTML={{
              __html: profiles1_desc?.replace(/(\r\n|\n)/g, "<br />"),
            }}
          />
          <div className={classes.icons}>
            {profiles1_icons.map(icon => {
              if (icon.url) {
                return (
                  getIcon(icon.icon)
                );
              }

              return getIcon(icon.icon);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles1Template;