import React, {Component} from 'react';
import Header from './Header.jsx';
import {Timeline, TimelineEvent} from 'react-event-timeline';

class News extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'News'} hrClassName="news-light">
          <p>Bleiben Sie auf dem Laufenden!</p>
        </Header>
        <section id="about">
          <div className="container-fluid">
            <Timeline>
              <TimelineEvent title="Termine Session 2018" createdAt="01.06.2017" icon={<i className="fa fa-calendar-check-o" aria-hidden="true"></i>} iconColor="#6fba1c">
                <p className="text-muted">Die Veranstaltungen der kommenden Session 2018 wurden terminiert.<br/>
                  <a href="/termine" className="read-more">Lesen Sie hier</a>
                </p>
              </TimelineEvent>
            </Timeline>
            <Timeline>
              <TimelineEvent title="Neues im Vorstand - Freude über Mitgliederzuwachs" createdAt="13.04.2017" icon={<i className="fa fa-info-circle" aria-hidden="true"></i>} iconColor="#6fba1c">
                <p className="text-muted">
                  <img className="img-responsive" src="img/vorstand/VorstandKGVerscheid.jpg"/>
                  <strong>-Verscheid-</strong>
                  Am Gründonnerstag, den 13. April 2017 veranstaltete die Karnevalsgesellschaft „Mir hale Pool“ Verscheid ihre Jahreshauptversammlung im Gasthof Paganettis in Verscheid. Der Vorsitzende Andreas Faust konnte 24 Mitglieder begrüßen. Präsident Oliver Meier-Ronfeld berichtete in seinem Jahresbericht über eine erfolgreiche Session 2017, die auch dem amtierenden Prinzenpaar Tobi I. und Marina II. zu verdanken sei. Der Kassenbericht vom Kassierer Dirk Fischer wurde zustimmend zur Kenntnis genommen und entsprechend den Empfehlungen der Kassenprüfer wurde der Vorstand entlastet.<br/>
                  Dirk Fischer legte im Anschluss an die Entlastung sein Amt als Kassierer nieder. Ihm wurde für die langjährige und zuverlässige Mitarbeit von den Anwesenden gedankt. Als sein Nachfolger ist Andreas Engel einstimmig gewählt worden. Diese Wahl machte die Neuwahl des zweiten Vorsitzenden erforderlich, die Tobias Jost für sich entschied. Unterstützt wird der neu gebildete Vorstand von André Henn, dem neuen Pressewart. Vorsitzender und Präsident wünschten den neuen Vorstandsmitgliedern viel Erfolg und eine gute Zusammenarbeit.<br/>
                  Die KG begrüßt fünf neue MitgliederInnen im Verein, die teilweise als Rote Jacken aktiv an den Veranstaltungen der KG teilnehmen bzw. das Wagenbau-Team verstärken möchten. Schwerpunkte der weiteren Tagesordnungspunkte waren neben der Neugestaltung des KG-Wagens die Vorbereitung des 90-jährigen Vereinsjubiläums 2019, der vorgesehene karnevalistische Wandertag sowie der Umbau der aktuellen Homepage www.mir-hale-pool.de.
                </p>
              </TimelineEvent>
            </Timeline>
            <Timeline>
              <TimelineEvent title="Beginn" createdAt="01.01.2017" icon={<i className="fa fa-hourglass-start" aria-hidden="true"></i>} iconColor="#6fba1c"/>
            </Timeline>
          </div>
        </section>
      </div>
    );
  }
}

News.propTypes = {};

export default News;
