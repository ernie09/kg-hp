import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Prinzengarde extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Prinzengarde'}/>
      </div>
    );
  }
}

Prinzengarde.propTypes = {

};

export default Prinzengarde;
