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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>KG &quot;Mir hale Pool &quot;Verscheid 1929 e.V</p>
              <p>Epgerterstr. 10 a</p>
              <p>53547 Dasbach</p>
              <p>&nbsp;</p>
              <p>Telefon: (01 78) 72 69 850</p>
              <p>E-Mail: KG-Mir-hale-Pool-eV@t-online.de</p>
              <p>&nbsp;</p>
              <p>Vertreten durch:</p>
              <p>Andreas Faust</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Kontakt.propTypes = {};

export default Kontakt;
