import React, {Component} from 'react';
import Header from './Header.jsx';
import kleineFunken from '../img/garden/kleinefunken.jpg';

class KleineFunken extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Kleine Funken'}/>
        <section id="group">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src={kleineFunken} className="img-responsive" alt="Die kleinen Funken mit Betreuerinnen"/>
                <h3><b>Trainerin: </b>Tina Faust</h3><br/>
                <h3><b>Betreuerin: </b>Lena Br&uuml;digam</h3><br/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

KleineFunken.propTypes = {};

export default KleineFunken;
