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
      </div>
    );
  }
}

Vorstand.propTypes = {

};

export default Vorstand;
