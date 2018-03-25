import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import { Carousel, Panel } from 'react-bootstrap';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import LandingPageNews from './LandingPageNews.jsx';

import dreiGS from '../img/prinzenpaare/DreiGS_2018.JPG';

class Main extends Component {

  constructor() {
    super();

    this.state = {
      printNews: false
    };
  }

  render() {
    const captionPanel =
      <Panel bsStyle="danger">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Unser Dreigestirn</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <b>Prinz Karin I.</b> aus dem Scheldchesland, auf der Hüh auch als Prinzessin bekannt,<br/>
          <b>Prinzessin Doris II.</b> deren Hobby Line Dance ist, worüber sie trotzdem nie die Möhnen vergisst,<br/>
          <b>Bauer Iris I.</b> jeck bekannt, hier und im ganzen Scheldchesland.
        </Panel.Body>
      </Panel>;
    return (
      <div>
        <Header titleText={'"Mir hale Pool" Verscheid'} skillsText="3x Hüh'Scheldche Alaaf!" hrClassName="star-light">
          <p className="medium">Die Karnevalsgesellschaft &quot;Mir hale Pool&quot; Verscheid 1929 ist ein gemeinn&uuml;tziger Verein zur Pflege des Brauchtums Karneval auf H&uuml;h und Scheldche, Breitscheid und dem Elsbachtal.</p>
        </Header>
        {
          this.state.printNews ? <LandingPageNews /> : null
        }
        <Carousel indicators={false} interval={10000}>
          {/*<Carousel.Item>
            <img className="img-responsive carousel-image" src={weihnachtskarte} />
          </Carousel.Item>*/}
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={dreiGS} />
            <MediaQuery query="(min-device-width: 1224px)">
              <Carousel.Caption>
                {captionPanel}
              </Carousel.Caption>
            </MediaQuery>
          </Carousel.Item>
          {/*<Carousel.Item>
            <img className="img-responsive carousel-image" src={juniorPp} />
            <Carousel.Caption>
              <Panel header={<h3>Unser Kinderprinzenpaar</h3>}>
                Prinz Manuel I. ein flinker Fußballer der Borussia Dortmund liebt<br/>Prinzessin Chiara I. schwingt ihr Bein und schwimmt im DLRG-Verein
              </Panel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={bothPp} />
          </Carousel.Item>
          */}
        </Carousel>
        <br></br>
        <MediaQuery query="(max-device-width: 1224px)">
          {captionPanel}
        </MediaQuery>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
