import DsnGrid, { DsnGridProps } from '../../layout/DsnGrid';
import { dsnCN } from '../../hooks/helper';

function FactsNakama({ className, ...restProps }: DsnGridProps) {
  return (
    <DsnGrid
      className={dsnCN('facts-section p-relative over-hidden', className)}
      {...restProps}
    >
      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">32</span>
          <h6 className="sm-title-block v-middle w-100">Anos de experiência</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">200</span>
          <h6 className="sm-title-block v-middle w-100">Clientes Atendidos</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">110</span>
          <h6 className="sm-title-block v-middle w-100">Marcas Criadas</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">360º</span>
          <h6 className="sm-title-block v-middle w-100">De visão para o seu negócio</h6>
        </div>
      </div>
      
    </DsnGrid>
  );
}

export default FactsNakama;
