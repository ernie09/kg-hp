import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class LandingPageNews extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section id="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="title-landingpagenews">
                <strong>
                  <i className="fa fa-bolt" aria-hidden="true"></i> Brandaktuell - Bitte vormerken <i className="fa fa-bolt" aria-hidden="true"></i>
                </strong>
              </h1>
              <div className="bs-callout bs-callout-default">
                <h3>Kartenvorverkauf für Kappensitzung und Ü60-Sitzung</h3>
                <p>Am kommenden Samstag (16.12.2018, 14:30) ist der Vorverkauf für unsere Kappensitzung sowie unsere Ü60-Sitzung.
                  <br /><Link to="/news" className="read-more">Die Plakate finden Sie hier</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPageNews;
