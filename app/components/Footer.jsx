import React from 'react';
//import { connect } from 'react-redux';

//import PropTypes from 'prop-types';

class Footer extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  // target="_blank"
  render() {
    return <footer className="text-center">
      <div className="footer-above">
        <div className="container-fluid">
          <div className="row">
            <div className="footer-col col-md-4">
              <h3>Social Media</h3>
              <ul className="list-inline">
                <li>
                  <a href="https://www.facebook.com/KG-Mir-hale-Pool-Verscheid-eV-196287167052166/" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>Email</h3>
              <ul className="list-inline">
                <li>
                  <a href="mailto:KG-Mir-hale-Pool-eV@t-online.de?Subject=Frage%20an%20die%20KG%20%22Mir%20hale%20Pool%22%20Verscheid" className="btn-social btn-outline"><i className="fa fa-fw fa-envelope"></i></a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>Impressum</h3>
              <ul className="list-inline">
                <li>
                  <a href="./impressum.html" className="btn-social btn-outline" target="_blank"><i className="fa fa-fw fa-balance-scale"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              Copyright &copy; KG "Mir hale Pool" Verscheid ( 2017 )
            </div>
          </div>
        </div>
      </div>
    </footer>;
  }
}

// const mapStateToProps = (state) => {
//   return state;
// };

Footer.propTypes = {
  // mapView: PropTypes.object,
  // appLanguage: PropTypes.string,
  // feature: PropTypes.object,
  // featureInfoActive: PropTypes.bool,
  // mapLayers: PropTypes.array,
  // muiTheme: PropTypes.object
};

//export default App;
export default Footer; //connect(mapStateToProps,undefined)(App);