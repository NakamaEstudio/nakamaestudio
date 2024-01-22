import { dsnCN } from '../../hooks/helper';

function BgPAD({
  className,
  rightPosition
}: {
  className?: string;
  rightPosition?: boolean;
}) {
  return (
    <div
      className={dsnCN(
        'bg-pad-project',
        rightPosition && 'bg-circle-dotted-right',
        className
      )}
      style={{ backgroundImage: 'url(/img/pad/elemento.png)' }}
    />
  );
}

export default BgPAD;
