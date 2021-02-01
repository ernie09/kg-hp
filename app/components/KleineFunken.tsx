import React from 'react';
import Header from './Header';

type KleineFunkenProps = {};

/**
 *
 */
const KleineFunken: React.FC<KleineFunkenProps> = () => {
  return <div>
    <Header titleText={'Kleine Funken'} />
    <section id="group">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            {/* <img src={kleineFunken} className="img-responsive" alt="Die kleinen Funken mit Betreuerinnen"/>
                <h3><b>Trainerin: </b>Tina Faust</h3><br/>
                <h3><b>Betreuerin: </b>Lena Br&uuml;digam</h3><br/> */}
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default KleineFunken;
