import DsnGrid, { DsnGridProps } from '../../layout/DsnGrid';
import { dsnCN } from '../../hooks/helper';

function Facts({ className, ...restProps }: DsnGridProps) {
  return (
    <DsnGrid
      className={dsnCN('facts-section p-relative over-hidden', className)}
      {...restProps}
    >
      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">66</span>
          <h6 className="sm-title-block v-middle w-100">Anos de experiência</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">700</span>
          <h6 className="sm-title-block v-middle w-100">Clientes Atendidos</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">360º</span>
          <h6 className="sm-title-block v-middle w-100">Visão de negócio</h6>
        </div>
      </div>
      
    </DsnGrid>
  );
}

export default Facts;
