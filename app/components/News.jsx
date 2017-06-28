import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class News extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'News'}/>
        <section id="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li className="timeline">
                    <div className="timeline-image">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="subheading">Termine Session 2018</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Die Veranstaltungen der kommenden Session 2018 wurden terminiert.<br/>
                          <a href="termine.html" className="read-more">Lesen Sie hier</a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="img-responsive img-circle" src="img/vorstand/VorstandKGVerscheid.jpg" alt=""/>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>13. April 2017</h4>
                        <h4 className="subheading">Neues im Vorstand &dash;<br/>
                          Freude über Mitgliederzuwachs</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          <strong>-Verscheid-
                          </strong>Am Gründonnerstag, den 13. April 2017 veranstaltete die Karnevalsgesellschaft „Mir hale Pool“ Verscheid ihre Jahreshauptversammlung im Gasthof Paganettis in Verscheid. Der Vorsitzende Andreas Faust konnte 24 Mitglieder begrüßen. Präsident Oliver Meier-Ronfeld berichtete in seinem Jahresbericht über eine erfolgreiche Session 2017, die auch dem amtierenden Prinzenpaar Tobi I. und Marina II. zu verdanken sei. Der Kassenbericht vom Kassierer Dirk Fischer wurde zustimmend zur Kenntnis genommen und entsprechend den Empfehlungen der Kassenprüfer wurde der Vorstand entlastet.<br/>
                          Dirk Fischer legte im Anschluss an die Entlastung sein Amt als Kassierer nieder. Ihm wurde für die langjährige und zuverlässige Mitarbeit von den Anwesenden gedankt. Als sein Nachfolger ist Andreas Engel einstimmig gewählt worden. Diese Wahl machte die Neuwahl des zweiten Vorsitzenden erforderlich, die Tobias Jost für sich entschied. Unterstützt wird der neu gebildete Vorstand von André Henn, dem neuen Pressewart. Vorsitzender und Präsident wünschten den neuen Vorstandsmitgliedern viel Erfolg und eine gute Zusammenarbeit.<br/>
                          Die KG begrüßt fünf neue MitgliederInnen im Verein, die teilweise als Rote Jacken aktiv an den Veranstaltungen der KG teilnehmen bzw. das Wagenbau-Team verstärken möchten. Schwerpunkte der weiteren Tagesordnungspunkte waren neben der Neugestaltung des KG-Wagens die Vorbereitung des 90-jährigen Vereinsjubiläums 2019, der vorgesehene karnevalistische Wandertag sowie der Umbau der aktuellen Homepage www.mir-hale-pool.de.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Bleiben Sie<br/>
                        auf dem Laufenden !</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

News.propTypes = {};

export default News;
