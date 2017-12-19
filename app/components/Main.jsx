import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import { Carousel, Panel } from 'react-bootstrap';

import LandingPageNews from './LandingPageNews.jsx';

import seniorPp from '../img/prinzenpaare/1.JPG';
import juniorPp from '../img/prinzenpaare/2.JPG';
import bothPp from '../img/prinzenpaare/3.JPG';
import weihnachtskarte from '../img/plakate/Weihnachtskarte_2017.png';

class Main extends Component {

  constructor() {
    super();

    this.state = {
      printNews: false
    };
  }

  render() {
    return (
      <div>
        <Header titleText={'"Mir hale Pool" Verscheid'} skillsText="3x Hüh'Scheldche Alaaf!" hrClassName="star-light">
          <p className="medium">Die Karnevalsgesellschaft &quot;Mir hale Pool&quot; Verscheid 1929 ist ein gemeinn&uuml;tziger Verein zur Pflege des Brauchtums Karneval auf H&uuml;h und Scheldche, Breitscheid und dem Elsbachtal.</p>
        </Header>
        {
          this.state.printNews ? <LandingPageNews /> : null
        }
        <Carousel indicators={false} interval={10000}>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={weihnachtskarte} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive carousel-image" src={seniorPp} />
            <Carousel.Caption>
              <Panel header={<h3>Unser Prinzenpaar</h3>}>
                Prinz Tobi I. von BMW bekannt,<br/>Prinzessin Marina II. aus dem Roßbe Land
              </Panel>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
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
        </Carousel>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
