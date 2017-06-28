import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
//import PropTypes from 'prop-types';

class Main extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'KG "Mir hale Pool" Verscheid'}/>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {

};

export default Main;
