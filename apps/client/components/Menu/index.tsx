import { RefObject, Dispatch, SetStateAction, useRef, ReactNode } from 'react';
import { Modifier } from '@popperjs/core';
import { Fade, Popper, cx, useClickAway } from '@mezzanine-ui/react';
import classes from './index.module.scss';

type MenuProps = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  controlRef: RefObject<HTMLDivElement>;
  sameWidth?: boolean;
  wrapperClassName?: string;
  className?: string;
}

const Menu = ({
  children,
  open,
  setOpen,
  controlRef,
  sameWidth = false,
  wrapperClassName,
  className,
} : MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // useClickAway(
  //   () => {
  //     if (!open) return;

  //     return () => {
  //       setOpen(false);
  //     };
  //   },
  //   menuRef,
  //   [
  //     menuRef,
  //     open,
  //   ],
  // );

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