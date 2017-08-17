import React, {Component} from 'react';
import Header from './Header.jsx';

import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

import paganetti from '../img/sponsoren/logopaganetti1.gif';
import elektroSiebenmorgen from '../img/sponsoren/elektroSiebenmorgen.png';
import immoNeumann from '../img/sponsoren/neumann_immobilien_siebenmorgen_logo.jpg';

class Sponsoren extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Sponsoren'}/>
        <br/>
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail href="http://www.paganettis.de/" target="_blank" src={paganetti}>
                <h5>Gasthof Paganetti&apos;s &quot;Zur Erholung&quot;</h5>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="http://h2682811.stratoserver.net/index.php/ct-menu-item-1" target="_blank" src={elektroSiebenmorgen}>
                <h5>Siebenmorgen Elektro GmbH</h5>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="http://www.neumannimmo.de/" target="_blank" src={immoNeumann}>
                <h5>neumann immobilien</h5>
              </Thumbnail>
            </Col>
            {/*<Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h5>Firma 4</h5>
              </Thumbnail>
            </Col>*/}
          </Row>
          {/*<Row>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h5>Firma 5</h5>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h5>Firma 6</h5>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h5>Firma 7</h5>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h5>Firma 8</h5>
              </Thumbnail>
            </Col>
          </Row> */}
        </Grid>
      </div>
    );
  }
}

Sponsoren.propTypes = {};

export default Sponsoren;
