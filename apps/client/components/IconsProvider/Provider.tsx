import { useCallback, useMemo, ReactNode } from 'react';
import cx from 'classnames';
import { IconsContextProvider } from './Context';
import { ReactComponent as FacebookIcon } from './icons/facebook.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import { ReactComponent as InstagramIcon } from './icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as MediumIcon } from './icons/medium.svg';
import { ReactComponent as TiktokIcon } from './icons/tiktok.svg';
import { ReactComponent as WebsiteIcon } from './icons/website.svg';
import { ReactComponent as YoutubeIcon } from './icons/youtube.svg';
import classes from './index.module.scss';

const FACEBOOK_ICON = 'FACEBOOK_ICON';
const GITHUB_ICON = 'GITHUB_ICON';
const INSTAGRAM_ICON = 'INSTAGRAM_ICON';
const LINKEDIN_ICON = 'LINKEDIN_ICON';
const MEDIUM_ICON = 'MEDIUM_ICON';
const TIKTOK_ICON = 'TIKTOK_ICON';
const WEBSITE_ICON = 'WEBSITE_ICON';
const YOUTUBE_ICON = 'YOUTUBE_ICON';

const IconsProvider = ({ children } : { children: ReactNode }) => {
  const getIcon = useCallback((iconId: string, className?: string) => {
    switch (iconId) {
      case FACEBOOK_ICON:
        return <FacebookIcon className={cx(classes.icon, className)} />;

      case GITHUB_ICON:
        return <GithubIcon className={cx(classes.icon, className)} />;

      case INSTAGRAM_ICON:
        return <InstagramIcon className={cx(classes.icon, className)} />;

      case LINKEDIN_ICON:
        return <LinkedinIcon className={cx(classes.icon, className)} />;

      case MEDIUM_ICON:
        return <MediumIcon className={cx(classes.icon, className)} />;

      case TIKTOK_ICON:
        return <TiktokIcon className={cx(classes.icon, className)} />;

      case WEBSITE_ICON:
        return <WebsiteIcon className={cx(classes.icon, className)} />;

      case YOUTUBE_ICON:
        return <YoutubeIcon className={cx(classes.icon, className)} />;

      default:
        return null;
    }
  }, []);

  const icons = useMemo(() => [
    FACEBOOK_ICON,
    GITHUB_ICON,
    INSTAGRAM_ICON,
    LINKEDIN_ICON,
    MEDIUM_ICON,
    TIKTOK_ICON,
    WEBSITE_ICON,
    YOUTUBE_ICON,
  ].map(iconId => ({
    id: iconId,
    icon: getIcon(iconId),
  })), [getIcon]);

  return (
    <IconsContextProvider
      value={{
        getIcon,
        icons,
      }}
    >
      {children}
    </IconsContextProvider>
  );
};

export default IconsProvider;
