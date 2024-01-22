import { dsnCN } from '../../hooks/helper';
import DsnGrid, { DsnGridProps } from '../../layout/DsnGrid';
import Image from 'next/image';

const data = [
  { src: '/img/pad/fabimidia.png' },
  { src: '/img/pad/ZUBI.png' },
  { src: '/img/pad/logotipocolor.png' },
];

function BrandTeam({ className, ...retsProps }: DsnGridProps) {
  return (
    <DsnGrid
      className={dsnCN('brand-client wrapper-client', className)}
      {...retsProps}
    >
      {data &&
        data.map(($item, $index) => (
          <div className="logo-box" key={$index}>
            <div className="logo-box-inner p-relative">
              <Image src={$item?.src} alt={''} width={240} height={120} />
            </div>
          </div>
        ))}
    </DsnGrid>
  );
}

export default BrandTeam;
