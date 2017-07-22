import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Main extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'"Mir hale Pool" Verscheid'} skillsText="3x Hüh'Scheldche Alaaf!" hrClassName="star-light">
          <p>Die Karnevalsgesellschaft &quot;Mir hale Pool&quot; Verscheid 1929 ist ein gemeinn&uuml;tziger Verein zur Pflege des Brauchtums Karneval auf H&uuml;h und Scheldche, Breitscheid und dem Elsbachtal.</p>
        </Header>
        <div id="startCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="item active">
              <img src="img/prinzenpaare/1.JPG" alt="Slide1"/>
              <div className="container">
                <div className="carousel-caption">
                  <h2>
                    <span>Unser Prinzenpaar</span>
                  </h2>
                  <p className="caption">
                    <span>Prinz Tobi I. von BMW bekannt,<br/>Prinzessin Marina II. , aus dem Roßbe Land</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="img/prinzenpaare/2.JPG" alt="Slide2"/>
              <div className="container-fluid">
                <div className="carousel-caption">
                  <h2>
                    <span>Unser Kinderprinzenpaar</span>
                  </h2>
                  <p className="caption">Prinz Manuel I. ein flinker Fußballer der Borussia Dortmund liebt<br/>Prinzessin Chiara I. schwingt ihr Bein und schwimmt im DLRG-Verein</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="img/prinzenpaare/3.JPG" alt="Slide3"/>
            </div>
          </div>
          <a className="left carousel-control" href="#startCarousel" data-slide="prev">
            <span className="fa fa-chevron-left fa-2x"></span>
          </a>
          <a className="right carousel-control" href="#startCarousel" data-slide="next">
            <span className="fa fa-chevron-right fa-2x"></span>
          </a>
        </div>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
