import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Kg extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Die roten Jacken'}/>
        <section id="group">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="img/kg/rotejacken.jpg" className="img-responsive" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Kg.propTypes = {

};

export default Kg;
