import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Jugendgarde extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Jugendgarde'}/>
      </div>
    );
  }
}

Jugendgarde.propTypes = {

};

export default Jugendgarde;
