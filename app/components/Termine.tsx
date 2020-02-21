import React, {Component} from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';

interface TermineProps {}

/**
 *
 */
class Termine extends Component<TermineProps> {

  /**
   *
   */
  constructor(props: TermineProps) {
    super(props);
  }

  /**
   *
   */
  render() {
    return (
      <div>
        <Header titleText={'Termine'} hrClassName="calendar-light">
          <p className="text-center large">Session 2020</p>
        </Header>
        <section id="events2019">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="no-more-tables">
                  <Table striped bordered hover>
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
                        <td data-title="Datum">07.12.2019</td>
                        <td data-title="Beginn">14:30 Uhr</td>
                        <td data-title="Veranstaltung">Kartenvorverkauf</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Sa.</td>
                        <td data-title="Datum">11.01.2020</td>
                        <td data-title="Beginn">19:11 Uhr</td>
                        <td data-title="Veranstaltung">Kappensitzung</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">So.</td>
                        <td data-title="Datum">26.01.2020</td>
                        <td data-title="Beginn">14:11 Uhr</td>
                        <td data-title="Veranstaltung">Kinderkarneval</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Sa.</td>
                        <td data-title="Datum">01.02.2020</td>
                        <td data-title="Beginn">12:00 Uhr</td>
                        <td data-title="Veranstaltung">Haussammlung</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/fNSWp5211eU2"><i className="fa fa-map-o" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">So.</td>
                        <td data-title="Datum">09.02.2020</td>
                        <td data-title="Beginn">14:11 Uhr</td>
                        <td data-title="Veranstaltung">Ü-60 Sitzung</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Sa.</td>
                        <td data-title="Datum">22.02.2020</td>
                        <td data-title="Beginn">20:11 Uhr</td>
                        <td data-title="Veranstaltung">Kostüm und Maskenball</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">So.</td>
                        <td data-title="Datum">23.02.2020</td>
                        <td data-title="Beginn">11:11 Uhr</td>
                        <td data-title="Veranstaltung">Zug Verscheid &amp; Zugparty</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/4hD2zVyE94p"><i className="fa fa-home" aria-hidden="true"></i></a></td>
                      </tr>
                      <tr>
                        <td data-title="Tag">Mo.</td>
                        <td data-title="Datum">24.02.2020</td>
                        <td data-title="Beginn">14:11 Uhr</td>
                        <td data-title="Veranstaltung">Zug Waldbreitbach</td>
                        <td data-title="Ort"><a href="https://goo.gl/maps/iSSS8ybYQuL2"><i className="fa fa-handshake-o" aria-hidden="true"></i></a></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Termine;
