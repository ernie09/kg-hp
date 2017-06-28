import React from 'react';

//import PropTypes from 'prop-types';

import Main from './components/Main.jsx';
import Kontakt from './components/Kontakt.jsx';
import Impressum from './components/Impressum.jsx';
import News from './components/News.jsx';
import Historie from './components/Historie.jsx';
import Termine from './components/Termine.jsx';
import Kappensitzung from './components/Kappensitzung.jsx';

import { Route, Switch, Link} from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  // target="_blank"
  render() {
    return (
      <div>
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container-fluid">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Navigation</span>
                Men&uuml;
                <i className="fa fa-bars"></i>
              </button>

              <Link className="navbar-brand" to="/"><img alt="Brand" src="img/kg.png"/></Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li>
                  <Link to="/news">Neuigkeiten</Link>
                </li>
                <li>
                  <Link to="/kappensitzung">Kappensitzung</Link>
                </li>
                <li>
                  <Link to="/termine">Termine</Link>
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
                      <Link to="/historie">Historie</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://sharegallery.strato.com/u/wjn-siq8/Ui-NJsqE">Bilder</a>
                </li>
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
                <li>
                  <Link to="/impressum">Impressum</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contact" component={Kontakt} />
            <Route exact path="/news" component={News} />
            <Route exact path="/history" component={Historie} />
            <Route exact path="/impressum" component={Impressum} />
            <Route exact path="/termine" component={Termine} />
            <Route exact path="/kappensitzung" component={Kappensitzung} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
//  children: PropTypes.object
};

export default App;
