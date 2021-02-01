import React from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';

type TermineProps = {};

/**
 *
 */
const Termine: React.FC<TermineProps> = () => {

  return <div>
    <Header titleText={'Termine'} hrClassName="calendar-light">
      <p className="text-center large">Session 2021</p>
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
                    <td data-title="Datum">13.02.2021</td>
                    <td data-title="Beginn">13:00 Uhr</td>
                    <td data-title="Veranstaltung">Zugsammlung</td>
                    <td data-title="Ort">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default Termine;
