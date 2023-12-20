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
          <span className="number">70</span>
          <h6 className="sm-title-block v-middle w-100">Clientes felizes</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">891</span>
          <h6 className="sm-title-block v-middle w-100">Horas de trabalho</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">87</span>
          <h6 className="sm-title-block v-middle w-100">Projetos de sucesso</h6>
        </div>
      </div>

      <div className="facts-item">
        <div className="p-relative text-center">
          <span className="number">29</span>
          <h6 className="sm-title-block v-middle w-100">Marcas prosperarão</h6>
        </div>
      </div>
    </DsnGrid>
  );
}

export default Facts;
