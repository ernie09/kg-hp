import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import { Carousel, Panel } from 'react-bootstrap';

import Header from './Header.jsx';
import LandingPageNews from './LandingPageNews.jsx';

import jubiPP from '../img/prinzenpaare/Senior2019.JPG';
import kinderprinzessin2019 from '../img/prinzenpaare/KPP_2019.JPG';
import gemeinsam2019 from '../img/prinzenpaare/PP_2019_beide.JPG';
import jubiPP2 from '../img/prinzenpaare/senior/2019.jpg';
import kinderPP2 from '../img/prinzenpaare/junior/2019.png';

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
          <Panel.Title componentClass="h3">Unser Jubiläumsprinzenpaar</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <b>Prinz Axel I.</b> von Eis und Schnee,<br />
          <b>Prinzessin Petra II.</b> von Kindergeschrei und Malerei
        </Panel.Body>
      </Panel>;

    const captionPanelKp =
      <Panel bsStyle="danger">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Unsere Jubiläumskinderprinzessin</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <b>Prinzessin Finja I.</b> von Waßerburg und Schloß, dieses Jahr ist sie allein der Boss.
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
            <img className="img-responsive carousel-image" src={jubiPP} />
            <MediaQuery query="(min-device-width: 1224px)">
              <Carousel.Caption>
                {captionPanel}
              </Carousel.Caption>
            </MediaQuery>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={kinderprinzessin2019} />
            <MediaQuery query="(min-device-width: 1224px)">
              <Carousel.Caption>
                {captionPanelKp}
              </Carousel.Caption>
            </MediaQuery>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={gemeinsam2019} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={jubiPP2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={kinderPP2} />
          </Carousel.Item>
        </Carousel>
        <br></br>
        <MediaQuery query="(max-device-width: 1224px)">
          {captionPanel}
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          {captionPanelKp}
        </MediaQuery>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
