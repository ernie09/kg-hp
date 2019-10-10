import React, { PureComponent } from 'react';
import Header from './Header.jsx';

import vorstandPlaceholder from '../img/vorstand/1.png';
import af from '../img/vorstand/af.JPG';
import ae from '../img/vorstand/ae.JPG';
import omr from '../img/vorstand/omr.JPG';
import ms from '../img/vorstand/ms.JPG';

class Vorstand extends PureComponent {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Vorstand'} />
        <section id="vorstand">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="team-member">
                  <img src={af} className="img-responsive img-circle" alt="" />
                  <h4>Andreas Faust</h4>
                  <p>1. Vorsitzender</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img src={omr} className="img-responsive img-circle" alt="" />
                  <h4>Oliver Meier-Ronfeld</h4>
                  <p>Pr&auml;sident</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img src={ae} className="img-responsive img-circle" alt="" />
                  <h4>Andreas Engel</h4>
                  <p>Kassierer</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team-member">
                  <img src={vorstandPlaceholder} className="img-responsive img-circle" alt="" />
                  <h4>Tobias Jost</h4>
                  <p>2. Vorsitzender</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img src={ms} className="img-responsive img-circle" alt="" />
                  <h4>Michael Stüber</h4>
                  <p>2. Pr&auml;sident</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img src={vorstandPlaceholder} className="img-responsive img-circle" alt="" />
                  <h4>Claudia Wagner</h4>
                  <p>Schriftf&uuml;hrerin</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Vorstand.propTypes = {};

export default Vorstand;
