import React from 'react';
import Header from './Header';
import kg from '../img/kg/rotejacken.jpg';

type KgProps = {};

const Kg: React.FC<KgProps> = () => {
  return <>
    <Header titleText={'Die roten Jacken'}>
      <span className="fkg fkg-narrenkappe" style={{
        fontSize: '3em'
      }}></span>
    </Header>
    <section id="group">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={kg} className="img-responsive" />
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Kg;
