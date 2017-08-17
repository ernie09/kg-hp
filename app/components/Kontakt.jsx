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
        <section id="kontakt">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>
                  <strong>KG &quot;Mir hale Pool &quot;Verscheid 1929 e.V</strong>
                </h2>
                <p className="large">Vertreten durch:<br/>
                  Andreas Faust<br/>
                  Epgerterstr. 10 a<br/>
                  53547 Dasbach</p>
                <ul className="list-unstyled">
                  <li>
                    <p className="large">
                      <i className="fa fa-phone fa-fw"></i>
                      (01 78) 72 69 850</p>
                  </li>
                  <li>
                    <p className="large">
                      <i className="fa fa-envelope-o fa-fw"></i>
                      <a href="mailto:KG-Mir-hale-Pool-eV@t-online.de">KG-Mir-hale-Pool-eV@t-online.de</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

Kontakt.propTypes = {};

export default Kontakt;
