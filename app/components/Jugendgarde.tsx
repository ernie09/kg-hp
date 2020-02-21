import React, { PureComponent } from 'react';
import Header from './Header';
import jfFoto from '../img/garden/jf.jpeg';

interface JugendgardeProps {}

class Jugendgarde extends PureComponent<JugendgardeProps> {

  constructor(props: JugendgardeProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header titleText={'Jungfunken'} />
        <section id="group">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src={jfFoto} className="img-responsive" />
          Die Jungfunken bei einem Gastauftritt in Kurtscheid.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Jugendgarde;
