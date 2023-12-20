import { useState } from 'react';
import { dsnCN } from '../../hooks/helper';
import Button from '../button/Button';

function FilterPortfolio({ className, categories, actionFilter }) {
  const [active, setActive] = useState(0);

  const getActive = ($key) => {
    return parseInt($key, 10) === active ? 'active' : '';
  };

  const handleButton = (e, $index, cat) => {
    setActive($index + 1);
    actionFilter(cat);
  };
  const convertHyphensToSpaces = (text) => {
    return text.replace(/-/g, ' ');
  };

  return (
    <div className={dsnCN('filtering-t mb-80', className)}>
      <div className="filtering-wrap">
        <div className="filtering">
          <button
            type="button"
            className={getActive(0)}
            onClick={(e) => handleButton(e, -1, '')}
          >
            All
          </button>
          {categories &&
            categories.map((cat, i) => {
              const readableCat = convertHyphensToSpaces(cat);

              return (
                <button
                  key={i}
                  type="button"
                  className={getActive(i + 1)}
                  onClick={(e) => handleButton(e, i, `.${cat.toLowerCase()}`)}
                >
                  {readableCat}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FilterPortfolio;
