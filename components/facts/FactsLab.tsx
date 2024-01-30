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
          <span className="number">30/01</span>
          <h6 className="sm-title-block v-middle w-100">Terça-Feira</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">18h</span>
          <h6 className="sm-title-block v-middle w-100">Início do evento</h6>
        </div>
      </div>

      
      
    </DsnGrid>
  );
}

export default FactsLab;
