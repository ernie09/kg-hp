import React from 'react';
import NavBar from './NavBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
//import { connect } from 'react-redux';

//import PropTypes from 'prop-types';

class Main extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  // target="_blank"
  render() {
    return <div>
      <NavBar/>
      <Header titleText={'KG \"Mir hale Pool\" Verscheid'}/>
      <Footer/>
    </div>;
  }
}

// const mapStateToProps = (state) => {
//   return state;
// };

Main.propTypes = {
  // mapView: PropTypes.object,
  // appLanguage: PropTypes.string,
  // feature: PropTypes.object,
  // featureInfoActive: PropTypes.bool,
  // mapLayers: PropTypes.array,
  // muiTheme: PropTypes.object
};

//export default App;
export default Main; //connect(mapStateToProps,undefined)(App);
