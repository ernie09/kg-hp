import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import { Carousel, Panel } from 'react-bootstrap';

import Header from './Header';
import LandingPageNews from './LandingPageNews';

import pp2020 from '../img/prinzenpaare/Prinzenpaar2020.png';
import kinderprinzessin2020 from '../img/prinzenpaare/Kinderprinzenpaar2020.png';

interface MainProps { }
interface MainState {
  printNews: boolean;
}

/**
 *
 */
class Main extends Component<MainProps, MainState> {

  /**
   *
   */
  constructor(props: MainProps) {
    super(props);

    this.state = {
      printNews: false
    };
  }

  /**
   *
   */
  render() {
    const captionPanel =
      <Panel bsStyle="danger">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Unser Prinzenpaar</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <strong>Prinz Thomas II.</strong>, von den alten Herren bekannt, fliegt er mit Schrauben durchs ganze Land,<br />
          <strong>Prinzessin Bea I.</strong>, Jungfunkenmutter und im M&ouml;hnenverein, war es ihr Traum einmal Prinzessin zu sein
        </Panel.Body>
      </Panel>;

    const captionPanelKp =
      <Panel bsStyle="danger">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Unsere Kinderprinzessin</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <strong>Prinzessin Julia II.</strong>, liebt Pferde und fetzigen Tanz, mag es kunterbunt mit viel Glanz.
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
            <img className="img-responsive carousel-image" src={pp2020} />
            <MediaQuery query="(min-device-width: 1224px)">
              <Carousel.Caption>
                {captionPanel}
              </Carousel.Caption>
            </MediaQuery>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={kinderprinzessin2020} />
            <MediaQuery query="(min-device-width: 1224px)">
              <Carousel.Caption>
                {captionPanelKp}
              </Carousel.Caption>
            </MediaQuery>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="img-responsive carousel-image" src={gemeinsam2019} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={jubiPP2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={kinderPP2} />
          </Carousel.Item> */}
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

export default Main;
