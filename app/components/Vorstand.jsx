import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Vorstand extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Vorstand'}/>
        <section id="vorstand">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img src="img/vorstand/1.png" className="img-responsive img-circle" alt=""/>
                  <h4>Andreas Faust</h4>
                  <p>1. Vorsitzender</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img src="img/vorstand/2.png" className="img-responsive img-circle" alt=""/>
                  <h4>Oliver Meier-Ronfeld</h4>
                  <p>Pr&auml;sident</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img src="img/vorstand/3.png" className="img-responsive img-circle" alt=""/>
                  <h4>Andreas Engel</h4>
                  <p>Kassierer</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="team-member">
                  <img src="img/vorstand/4.png" className="img-responsive img-circle" alt=""/>
                  <h4>Tobias Jost</h4>
                  <p>2. Vorsitzender</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="team-member">
                  <img src="img/vorstand/5.png" className="img-responsive img-circle" alt=""/>
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
