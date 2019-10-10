import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <footer className="text-center">
      <hr style={{
        width: '90%',
        border: '1px solid #A9443E',
        borderRadius: 9
      }} />
      <div className="footer-above">
        <div className="container-fluid">
          <div className="row">
            <div className="footer-col col-md-4">
              <h3>Facebook</h3>
              <ul className="list-inline">
                <li>
                  <a href="https://www.facebook.com/MirHalePool/" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>Email</h3>
              <ul className="list-inline">
                <li>
                  <a href="mailto:info@mir-hale-pool.de?Subject=Frage%20an%20die%20KG%20%22Mir%20hale%20Pool%22%20Verscheid" className="btn-social btn-outline"><i className="fa fa-fw fa-envelope"></i></a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>Impressum</h3>
              <ul className="list-inline">
                <li>
                  <Link to="impressum" className="btn-social btn-outline"><i className="fa fa-fw fa-balance-scale"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              Copyright &copy; KG &quot;Mir hale Pool&quot; Verscheid ( 2019 )
            </div>
          </div>
        </div>
      </div>
    </footer>;
  }
}

Footer.propTypes = {
};

export default Footer;
