import React from 'react';
import Header from './Header';
import prinzengardeFoto from '../img/garden/PG_2019.JPG';

type PrinzengardeProps = {};

/**
 *
 */
const Prinzengarde: React.FC<PrinzengardeProps> = () => {

  return <div>
    <Header titleText={'Prinzengarde'} />
    <section id="group">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={prinzengardeFoto} className="img-responsive" />
                Die Prinzengarde der KG &quot;Mir hale Pool&quot; Verscheid mit ihrer Trainerin Doro Schmitz
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default Prinzengarde;
