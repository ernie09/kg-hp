import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

  constructor() {
    super();

    this.state = {};
  }

  // <span className="skills">3x Hüh&apos;Scheldche Alaaf!</span>
  // <hr className="star-light"/>
  // <p>Die KG &quot;Mir hale Pool&quot; Verscheid 1929 ist ein gemeinn&uuml;tziger Verein zur Pflege des Brauchtums Karneval auf H&uuml;h und Scheldche, Breitscheid und dem Elsbachtal.</p>

  // target="_blank"
  render() {
    return <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-text">
              <span className="name">{this.props.titleText}</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
  }
}

// const mapStateToProps = (state) => {
//   return state;
// };

Header.propTypes = {
  titleText: PropTypes.string
  // appLanguage: PropTypes.string,
  // feature: PropTypes.object,
  // featureInfoActive: PropTypes.bool,
  // mapLayers: PropTypes.array,
  // muiTheme: PropTypes.object
};

//export default App;
export default Header; //connect(mapStateToProps,undefined)(App);
