import React from 'react';
//import { connect } from 'react-redux';

//import PropTypes from 'prop-types';

class NavBar extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  // target="_blank"
  render() {
    return (

      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container-fluid">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Navigation</span>
              Men&uuml;
              <i className="fa fa-bars"></i>
            </button>

            <a className="navbar-brand" href="index.html">
              <img alt="Brand" src="img/kg.png"/></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li>
                <a href="news.html">Neuigkeiten</a>
              </li>
              <li>
                <a href="kappensitzung.html">Kappensitzung</a>
              </li>
              <li>
                <a href="termine.html">Termine</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Der Verein<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="kg.html">Die roten Jacken</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="prinzengarde.html">Prinzengarde</a>
                  </li>
                  <li>
                    <a href="jugendgarde.html">Jungfunken</a>
                  </li>
                  <li>
                    <a href="kleinefunken.html">Kleine Funken</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="prinzenpaare.html">Prinzenpaare</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="vorstand.html">Vorstand</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="historie.html">Historie</a>
                  </li>
                </ul>
              </li>
              <li>

                <a href="https://sharegallery.strato.com/u/wjn-siq8/Ui-NJsqE" >Bilder</a>
              </li>
              <li>
                <a href="kontact.html">Kontakt</a>
              </li>
              <li>
                <a href="impressum.html">Impressum</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = (state) => {
//   return state;
// };

NavBar.propTypes = {
  // mapView: PropTypes.object,
  // appLanguage: PropTypes.string,
  // feature: PropTypes.object,
  // featureInfoActive: PropTypes.bool,
  // mapLayers: PropTypes.array,
  // muiTheme: PropTypes.object
};

//export default App;
export default NavBar; //connect(mapStateToProps,undefined)(App);
