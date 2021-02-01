import React from 'react';
import Header from './Header';

import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

import paganetti from '../img/sponsoren/logopaganetti1.gif';
import elektroSiebenmorgen from '../img/sponsoren/elektroSiebenmorgen.png';
import immoNeumann from '../img/sponsoren/neumann_immobilien_siebenmorgen_logo.jpg';
import logoRheinChemo from '../img/sponsoren/Logo_RC_GmbH.png';

/**
 *
 */
const Sponsoren: React.FC = () => {
  return <>
    <Header titleText={'Sponsoren'} />
    <br />
    <Grid>
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail href="http://www.paganettis.de/" target="_blank" src={paganetti}>
            <h5>Gasthof Paganetti&apos;s &quot;Zur Erholung&quot;</h5>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail
            href="http://h2682811.stratoserver.net/index.php/ct-menu-item-1" target="_blank" src={elektroSiebenmorgen}>
            <h5>Siebenmorgen Elektro GmbH</h5>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="http://www.neumannimmo.de/" target="_blank" src={immoNeumann}>
            <h5>Neumann Immobilien</h5>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="http://www.rhein-chemotechnik.com/" target="_blank" src={logoRheinChemo}>
            <h5>Rhein-Chemotechnik GmbH</h5>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>
  </>;
};

export default Sponsoren;
