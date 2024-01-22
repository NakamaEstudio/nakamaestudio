import { dsnCN } from '../../hooks/helper';

import { backgroundColor } from '../../hooks/EremiaType';
import BgPAD from './BgPAD';

interface HeaderNormalProps {
  className?: string;
  tag?: string;
  children?: React.ReactNode;
  container?: 'container' | 'dsn-container';
  backgroundColor?: backgroundColor;
}

function HeaderPAD({
  className,
  tag: Tag = 'header',
  container = 'dsn-container',
  backgroundColor,
  children,
  ...restProps
}: HeaderNormalProps) {
  return (
    // @ts-ignore
    <Tag
      className={dsnCN('header-normal', backgroundColor)}
      style={{ padding: '160px 0' }}
      {...restProps}
    >
      <BgPAD />
      <div className={dsnCN(container, 'h-100')}>
        <div
          className={dsnCN(
            'content-hero p-relative d-flex flex-column',
            className
          )}
        >
          {children}
        </div>
      </div>
    </Tag>
  );
}

export default HeaderPAD;
