import { dsnCN } from '../../hooks/helper';
import DsnGrid, { DsnGridProps } from '../../layout/DsnGrid';
import Image from 'next/image';

const data = [
  { src: '/img/pad/logotipocolor.png' },
  { src: '/img/lab/SEL.png' },
  { src: '/img/lab/strattax.png' },
  { src: '/img/lab/mais1cafe.png' },
];

function LabTeam({ className, ...retsProps }: DsnGridProps) {
  return (
    <DsnGrid
      className={dsnCN('brand-client wrapper-client', className)}
      {...retsProps}
    >
      {data &&
        data.map(($item, $index) => (
          <div className="logo-box" key={$index}>
            <div className="logo-box-inner p-relative">
              <Image src={$item?.src} alt={''} width={240} height={240} />
            </div>
          </div>
        ))}
    </DsnGrid>
  );
}

export default LabTeam;
