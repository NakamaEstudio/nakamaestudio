import DsnGrid, { DsnGridProps } from '../../layout/DsnGrid';
import { dsnCN } from '../../hooks/helper';
import { getTeamPad } from '../../data/teampad';
import TeamItem from './TeamItem';

interface TeamProps extends DsnGridProps {
  dataPAD?: [
    {
      id: number;
      name: string;
      position: string;
      src: string;
      social: [{ title: string; url: string }];
    }
  ];
}

function Teampad({ className, data, ...restProps }: TeamProps) {
  const teamDataPad = data || getTeamPad();

  return (
    // @ts-ignore 
    <DsnGrid className={dsnCN('team', className)} {...restProps}>
      {teamDataPad &&
        teamDataPad.map(($item) => (
          // @ts-ignore
          <TeamItem key={$item.id} data={$item} />
        ))}
    </DsnGrid>
  );
}

export default Teampad;
