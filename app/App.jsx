import React from 'react';
//import { connect } from 'react-redux';

import NavBar from './components/NavBar.jsx';

import PropTypes from 'prop-types';

class App extends React.Component {

  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <NavBar/>
    );
  }
}

// const mapStateToProps = (state) => {
//   return state;
// };

App.propTypes = {
  // mapView: PropTypes.object,
  // appLanguage: PropTypes.string,
  // feature: PropTypes.object,
  // featureInfoActive: PropTypes.bool,
  // mapLayers: PropTypes.array,
  muiTheme: PropTypes.object
};

//export default App;
export default App;//connect(mapStateToProps,undefined)(App);
