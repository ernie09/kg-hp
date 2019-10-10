import React, { PureComponent } from 'react';
import Header from './Header.jsx';
import jfFoto from '../img/garden/jf.jpeg';

class Jugendgarde extends PureComponent {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header titleText={'Jungfunken'} />
        <section id="group">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src={jfFoto} className="img-responsive" />
          Die Jungfunken bei einem Gastauftritt in Kurtscheid.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Jugendgarde.propTypes = {

};

export default Jugendgarde;
