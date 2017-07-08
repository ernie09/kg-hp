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
      </div>
    );
  }
}

Kg.propTypes = {

};

export default Kg;
