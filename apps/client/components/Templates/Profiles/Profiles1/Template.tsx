import { Fragment } from 'react';
import Image from 'next/image';
import BlankLink from '@components/BlankLink';
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
                Avatar
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
            {profiles1_icons.map((icon, index) => {
              if (icon.url) {
                return (
                  <BlankLink key={index} href={icon.url} className={classes.iconLink}>
                    {getIcon(icon.icon, classes.icon)}
                  </BlankLink>
                );
              }

              return <Fragment key={index}>{getIcon(icon.icon)}</Fragment>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles1Template;