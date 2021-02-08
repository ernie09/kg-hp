import React from 'react';
import PageHeader from './PageHeader';

type TermineProps = {};

/**
 *
 */
const Termine: React.FC<TermineProps> = () => {

  return <>
    <PageHeader
      title="Termine"
      subtitle="Session 2021"
    />
    {/* <Table striped bordered hover>
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
              </Table> */}
  </>;
};

export default Termine;
