import React, {Component} from 'react';
import Header from './Header.jsx';

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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="img/garden/kleinefunken.jpg" className="img-responsive abstand-img" alt="Jungfunken mit Betreuerinnen"/>
                <h3>
                  <b>Trainerin:</b>
                  Tina Faust</h3><br/>
                <h3>
                  <b>Betreuerin:</b>
                  Lena Br&uuml;digam</h3><br/>
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
