import React, {Component} from 'react';
import Header from './Header.jsx';

import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

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
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 1</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 2</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 3</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 4</h3>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 5</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 6</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 7</h3>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="300x300" src="http://via.placeholder.com/300x300">
                <h3>Firma 8</h3>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Sponsoren.propTypes = {};

export default Sponsoren;
