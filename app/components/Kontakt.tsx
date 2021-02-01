import React from 'react';
import Header from './Header';

type KontaktProps = {};

const Kontakt: React.FC<KontaktProps> = () => {
  return <>
    <Header titleText={'Kontakt'} />
    <section id="kontakt">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>
              <strong>KG &quot;Mir hale Pool &quot;Verscheid 1929 e.V</strong>
            </h3>
            <p className="large">Vertreten durch:<br />
                  Andreas Faust<br />
                  Epgerterstr. 10 a<br />
                  53547 Dasbach</p>
            <ul className="list-unstyled">
              <li>
                <p className="large">
                  <i className="fa fa-phone fa-fw"></i>
                      (0162) 6851480</p>
              </li>
              <li>
                <p className="large">
                  <i className="fa fa-envelope-o fa-fw"></i>
                  <a href="mailto:info@mir-hale-pool.de">info@mir-hale-pool.de</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Kontakt;
