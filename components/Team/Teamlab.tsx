import DsnGrid, { DsnGridProps } from '../../layout/DsnGrid';
import { dsnCN } from '../../hooks/helper';
import { getTeamLab } from '../../data/teamlab';
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

function TeamLab({ className, data, ...restProps }: TeamProps) {
  const teamDataLab = data || getTeamLab();

  return (
    // @ts-ignore 
    <DsnGrid className={dsnCN('team', className)} {...restProps}>
      {teamDataLab &&
        teamDataLab.map(($item) => (
          // @ts-ignore
          <TeamItem key={$item.id} data={$item} />
        ))}
    </DsnGrid>
  );
}

export default TeamLab;
