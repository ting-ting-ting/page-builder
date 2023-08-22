import { ReactNode } from 'react';

type BlankLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: VoidFunction;
}

function BlankLink({
  children,
  href,
  className,
  onClick,
}: BlankLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default BlankLink;