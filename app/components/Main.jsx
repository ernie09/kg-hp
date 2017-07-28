import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import { Carousel, Panel } from 'react-bootstrap';

class Main extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'"Mir hale Pool" Verscheid'} skillsText="3x Hüh'Scheldche Alaaf!" hrClassName="star-light">
          <p className="medium">Die Karnevalsgesellschaft &quot;Mir hale Pool&quot; Verscheid 1929 ist ein gemeinn&uuml;tziger Verein zur Pflege des Brauchtums Karneval auf H&uuml;h und Scheldche, Breitscheid und dem Elsbachtal.</p>
        </Header>
        <Carousel indicators={false} interval={10000}>
          <Carousel.Item>
            <img src="img/prinzenpaare/1.JPG" />
            <Carousel.Caption>
              <Panel>
                Prinz Tobi I. von BMW bekannt,<br/>Prinzessin Marina II. , aus dem Roßbe Land
              </Panel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/prinzenpaare/2.JPG" />
            <Carousel.Caption>
              <Panel>
                Prinz Manuel I. ein flinker Fußballer der Borussia Dortmund liebt<br/>Prinzessin Chiara I. schwingt ihr Bein und schwimmt im DLRG-Verein
              </Panel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/prinzenpaare/3.JPG" alt="Slide3"/>
          </Carousel.Item>
        </Carousel>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
