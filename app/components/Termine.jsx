import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Termine extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Termine'} hrClassName="calendar-light">
          <p className="text-center">Session 2018<br/>unvollst&auml;ndig - vorl&auml;ufig</p>
        </Header>
        <section id="events2018">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="no-more-tables">
                  <table className="col-sm-12 table-bordered table-striped table-condensed cf">
                    <thead className="cf">
                      <tr>
                        <th>Tag</th>
                        <th>Datum</th>
                        <th>Beginn</th>
                        <th>Veranstaltung</th>
                        <th>Ort</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-title="Tag">Sa.</td>
                        <td data-title="Datum">16.12.2017</td>
                        <td data-title="Beginn">19:11 Uhr</td>
                        <td data-title="Veranstaltung">Kartenvorverkauf</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Sa.</td>
                        <td data-title="Datum">13.01.2018</td>
                        <td data-title="Beginn">19:11 Uhr</td>
                        <td data-title="Veranstaltung">Kappensitzung</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">So.</td>
                        <td data-title="Datum">21.01.2018</td>
                        <td data-title="Beginn">14:11 Uhr</td>
                        <td data-title="Veranstaltung">Kinderkarneval</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Sa.</td>
                        <td data-title="Datum">27.01.2018</td>
                        <td data-title="Beginn">14:11 Uhr</td>
                        <td data-title="Veranstaltung">Haussammlung</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/fNSWp5211eU2"><i className="fa fa-map-o" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">So.</td>
                        <td data-title="Datum">28.01.2018</td>
                        <td data-title="Beginn">14:11 Uhr</td>
                        <td data-title="Veranstaltung">Ü-60 Sitzung</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Sa.</td>
                        <td data-title="Datum">10.02.2018</td>
                        <td data-title="Beginn">20:11 Uhr</td>
                        <td data-title="Veranstaltung">Prinzenball</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">So.</td>
                        <td data-title="Datum">11.02.2018</td>
                        <td data-title="Beginn">11:11 Uhr</td>
                        <td data-title="Veranstaltung">Zug Verscheid &amp; Zugparty</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Mo.</td>
                        <td data-title="Datum">12.02.2018</td>
                        <td data-title="Beginn">14:11 Uhr</td>
                        <td data-title="Veranstaltung">Zug Waldbreitbach</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/iSSS8ybYQuL2"><i className="fa fa-handshake-o" aria-hidden="true"></i></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Termine.propTypes = {

};

export default Termine;
