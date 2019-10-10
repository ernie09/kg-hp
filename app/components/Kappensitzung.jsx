import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Kappensitzung extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Kappensitzung'} />
      </div>
    );
  }
}

Kappensitzung.propTypes = {

};

export default Kappensitzung;
