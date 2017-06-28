import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
//import PropTypes from 'prop-types';

class Kontakt extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Kontakt'}/>
        <Footer/>
      </div>
    );
  }
}

Kontakt.propTypes = {

};

export default Kontakt;
