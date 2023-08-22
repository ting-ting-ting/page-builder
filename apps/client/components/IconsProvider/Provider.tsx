import { useCallback, useMemo, ReactNode } from 'react';
import cx from 'classnames';
import { IconsContextProvider } from './Context';
import { ReactComponent as FacebookIcon } from './icons/facebook.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import classes from './index.module.scss';

export const FACEBOOK_ICON = 'FACEBOOK_ICON';
export const GITHUB_ICON = 'GITHUB_ICON';

const IconsProvider = ({ children } : { children: ReactNode }) => {
  const getIcon = useCallback((iconId: string, className?: string) => {
    switch (iconId) {
      case FACEBOOK_ICON:
        return <FacebookIcon className={cx(classes.icon, className)} />;

      case GITHUB_ICON:
        return <GithubIcon className={cx(classes.icon, className)} />;

      default:
        return null;
    }
  }, []);

  const icons = useMemo(() => [FACEBOOK_ICON, GITHUB_ICON].map(iconId => ({
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
