import { ReactNode } from 'react';

export const SpacingJsx = ({
  children,
  marginTop = 15,
  ...restProps
}: {
  children: ReactNode;
  marginTop?: number;
  [v: string]: unknown;
}) => {
  return <div style={{ marginTop, background: '#fff', ...restProps }}>{children}</div>;
};
