import { RefObject, useRef, ReactNode } from 'react';
import { Modifier } from '@popperjs/core';
import { Fade, Popper, cx } from '@mezzanine-ui/react';
import classes from './index.module.scss';

type MenuProps = {
  children: ReactNode;
  open: boolean;
  controlRef: RefObject<HTMLDivElement>;
  sameWidth?: boolean;
  wrapperClassName?: string;
  className?: string;
  disablePortal?: boolean;
}

const Menu = ({
  children,
  open,
  controlRef,
  sameWidth = false,
  wrapperClassName,
  className,
  disablePortal,
} : MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const sameWidthModifier: Modifier<'sameWidth', Record<string, unknown>> = {
    name: 'sameWidth',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({ state }) => {
      const reassignState = state;

      reassignState.styles.popper.minWidth = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
      const reassignState = state;

      reassignState.elements.popper.style.minWidth = `${
        state.elements.reference.getBoundingClientRect().width
      }px`;
    },
  };

  return (
    <Fade in={open}>
      <Popper
        open
        disablePortal={disablePortal}
        anchor={controlRef}
        className={cx(classes.menuWrapper, wrapperClassName)}
        options={{
          placement: 'bottom-start',
          modifiers: [
            ...(sameWidth ? [sameWidthModifier] : []),
          ],
        }}
      >
        <div className={cx(classes.menu, className)} ref={menuRef}>
          {children}
        </div>
      </Popper>
    </Fade>
  );
}

export default Menu;