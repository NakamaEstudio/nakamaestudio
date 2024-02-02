import DsnGrid, { DsnGridProps } from '../../layout/DsnGrid';
import { dsnCN } from '../../hooks/helper';

function FactsLab({ className, ...restProps }: DsnGridProps) {
  return (
    <DsnGrid
      className={dsnCN('facts-section p-relative over-hidden', className)}
      {...restProps}
    >
      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">XX/XX</span>
          <h6 className="sm-title-block v-middle w-100">Data</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">XXh</span>
          <h6 className="sm-title-block v-middle w-100">Horário</h6>
        </div>
      </div>

      
      
    </DsnGrid>
  );
}

export default FactsLab;
