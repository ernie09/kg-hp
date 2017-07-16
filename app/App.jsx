import React from 'react';

import $ from  'jquery';
import 'bootstrap/dist/js/bootstrap';

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

import { Route, Switch, Link} from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    // Move to top
    $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
      offset: {
        top: 100
      }
    });

    // $('#prinzenCarousel').carousel({
    //   interval: undefined
    // });
    //
    // // Carousel
    // $('#myCarousel').carousel({
    //   interval: 60000
    // });
    //
    // // Floating label headings for the contact form
    // $(function() {
    //     $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    //         $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    //     }).on("focus", ".floating-label-form-group", function() {
    //         $(this).addClass("floating-label-form-group-with-focus");
    //     }).on("blur", ".floating-label-form-group", function() {
    //         $(this).removeClass("floating-label-form-group-with-focus");
    //     });
    // });
  }

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
                      <a href="/kg">Die roten Jacken</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="/prinzengarde">Prinzengarde</a>
                    </li>
                    <li>
                      <a href="/jugendgarde">Jungfunken</a>
                    </li>
                    <li>
                      <a href="/kleinefunken">Kleine Funken</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="/prinzenpaare">Prinzenpaare</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="/vorstand">Vorstand</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <Link to="/history">Historie</Link>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <Link to="/sponsoren">Sponsoren</Link>
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
            <Route exact path="/news" component={News} />
            <Route exact path="/kappensitzung" component={Kappensitzung} />
            <Route exact path="/termine" component={Termine} />
            <Route exact path="/kg" component={Kg} />
            <Route exact path="/prinzengarde" component={Prinzengarde} />
            <Route exact path="/jugendgarde" component={Jugendgarde} />
            <Route exact path="/kleinefunken" component={KleineFunken} />
            <Route exact path="/prinzenpaare" component={Prinzenpaare} />
            <Route exact path="/vorstand" component={Vorstand} />
            <Route exact path="/history" component={Historie} />
            <Route exact path="/sponsoren" component={Sponsoren} />
            <Route exact path="/impressum" component={Impressum} />
            <Route exact path="/contact" component={Kontakt} />
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
