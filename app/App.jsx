import React from 'react';

import Main from './components/Main.jsx';
import Kontakt from './components/Kontakt.jsx';
import Impressum from './components/Impressum.jsx';
import News from './components/News.jsx';
import Historie from './components/Historie.jsx';
import Termine from './components/Termine.jsx';
import Kappensitzung from './components/Kappensitzung.jsx';
import Kg from './components/Kg.jsx';
import Prinzengarde from './components/Prinzengarde.jsx';
import Jugendgarde from './components/Jugendgarde.jsx';
import KleineFunken from './components/KleineFunken.jsx';
import Prinzenpaare from './components/Prinzenpaare.jsx';
import Vorstand from './components/Vorstand.jsx';
import Sponsoren from './components/Sponsoren.jsx';

import {Route, Switch, Link} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store/store';

import kgImage from './img/kg.png';

class App extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container-fluid">
              <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Navigation</span>
                  Men&uuml;
                  <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="/"><img alt="Brand" src={kgImage}/></Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="hidden">
                    <a href="#page-top"></a>
                  </li>
                  <li>
                    <Link to="news">Neuigkeiten</Link>
                  </li>
                  {/*<li>
                    <Link to="kappensitzung">Kappensitzung</Link>
                  </li>*/}
                  <li>
                    <Link to="termine">Termine</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Der Verein<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="kg">Die roten Jacken</Link>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="prinzengarde">Prinzengarde</Link>
                      </li>
                      <li>
                        <Link to="jugendgarde">Jungfunken</Link>
                      </li>
                      <li>
                        <Link to="kleinefunken">Kleine Funken</Link>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="prinzenpaare">Prinzenpaare</Link>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="vorstand">Vorstand</Link>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <a href="/dl/Beitrittserklaerung-BeitragsEinzugsFormular_SEPA.pdf" target="_blank" rel="noopener noreferrer">Mitgliedsantrag</a>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="history">Historie</Link>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="sponsoren">Sponsoren</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://sharegallery.strato.com/pages/kgverscheid#zug-verscheid-1/photos/fluid" target="_blank" rel="noopener noreferrer">Bilder</a>
                  </li>
                  <li>
                    <Link to="contact">Kontakt</Link>
                  </li>
                  <li>
                    <Link to="impressum">Impressum</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/news" component={News}/>
              <Route exact path="/kappensitzung" component={Kappensitzung}/>
              <Route exact path="/termine" component={Termine}/>
              <Route exact path="/kg" component={Kg}/>
              <Route exact path="/prinzengarde" component={Prinzengarde}/>
              <Route exact path="/jugendgarde" component={Jugendgarde}/>
              <Route exact path="/kleinefunken" component={KleineFunken}/>
              <Route exact path="/prinzenpaare" component={Prinzenpaare}/>
              <Route exact path="/vorstand" component={Vorstand}/>
              <Route exact path="/history" component={Historie}/>
              <Route exact path="/sponsoren" component={Sponsoren}/>
              <Route exact path="/impressum" component={Impressum}/>
              <Route exact path="/contact" component={Kontakt}/>
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
