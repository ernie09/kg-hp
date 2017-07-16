import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Prinzenpaare extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Prinzenpaare'}/>
      </div>
    );
  }
}

Prinzenpaare.propTypes = {

};

export default Prinzenpaare;
