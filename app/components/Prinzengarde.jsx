import React, { PureComponent } from 'react';
import Header from './Header.jsx';
import prinzengardeFoto from '../img/garden/PG_2019.JPG';

class Prinzengarde extends PureComponent {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

Prinzengarde.propTypes = {

};

export default Prinzengarde;
