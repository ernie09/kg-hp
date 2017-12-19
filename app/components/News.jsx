import React, { Component } from 'react';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';

import vorstand from '../img/vorstand/VorstandKGVerscheid.jpg';
import wt1 from '../img/wandertag/Gruppenphoto.png';
import wt2 from '../img/wandertag/Bild_2.jpg';
import wt3 from '../img/wandertag/Bild_1.jpg';
import termine2018 from '../img/plakate/2018-termine.png';
import kv from '../img/plakate/2018-kv1.png';
import ue60 from '../img/plakate/2018-kv2.png';

class News extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'News'} hrClassName="news-light">
          <p className="medium">Bleiben Sie auf dem Laufenden!</p>
        </Header>

        <section id="about">
          <div className="timeline">
            <div className="line text-muted"></div>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Plakat - Termine Session 2018</h2>
              </div>
              <div className="panel-body">

                <figure>
                  <img className="img-responsive img-rounded" src={termine2018}/><br/>
                </figure>

              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 10.12.2017</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Plakat - &Uuml;60 - Sitzung</h2>
              </div>
              <div className="panel-body">

                <figure>
                  <img className="img-responsive img-rounded" src={ue60}/><br/>
                </figure>

              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 10.12.2017</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Plakat - Kartenvorverkauf</h2>
              </div>
              <div className="panel-body">

                <figure>
                  <img className="img-responsive img-rounded" src={kv}/><br/>
                </figure>

              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 10.12.2017</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-calendar"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Termin Kartenvorverkauf - Karten für Kappensitzung und Ü60-Sitzung 2018</h2>
              </div>
              <div className="panel-body">
                <p className="medium">Karten für die Kappensitzung bzw. den Ü60-Karneval der Session 2018 können am <b>16.12.2017</b> ab <b>14:30</b> im <i>Gasthof Paganettis zur Erholung in Verscheid</i> erworben werden.<br/>
                  <Link to="/termine" className="read-more">Sie auch hier</Link></p>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 21.11.2017</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Wandertag der KG</h2>
              </div>
              <div className="panel-body">
                <p className="medium">
                Am vergangenen Samstag trafen wir uns zu unserem diesjährigen Wandertag. Trotz des wechselhaften Wetters trafen sich zahlreiche Mitglieder beim Startpunkt „Paganetti´s Zur Erholung“ in Verscheid.<br />
                Getreu dem diesjährigen Motto „Berg und Tal“ ging es zunächst über Hochscheid hinunter ins Elsbachtal. Nach einigen erholsamen Metern im Tal machte die Gruppe sich an den Anstieg in Richtung „Breitscheider Straße“. Diese Teilstrecke erforderte einen Zwischenstopp, sodass sich für den weiteren Weg gestärkt werden konnte.
                Weiter ging‘s. Nach einem Abstecher über den ehemaligen „Trimm-Dich-Pfad“ führte die Wanderung hinunter nach Roßbach, wo im „Cafe Kröll“ eine weitere Rast eingelegt wurde.<br/>
                Über Lache machten wir uns auf den Rückweg in Richtung Verscheid. Ein gemeinsames Abendessen im Vereinslokal war die Belohnung für die „Mühen des Tages“. Mitwanderer und „Nachzügler“ verbrachten noch weitere schöne Stunden im gastlichen „Paganetti´s“.<br/>
                Allen Mitwanderern und besonders dem „Organisations-Team“ Claudia Wagner und Andreas Engel gilt ein „Dankeschön“ für den gelungenen Wandertag.<br/>
                </p>
                <figure>
                  <img className="img-responsive img-rounded" src={wt1}/><br/>
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={wt2}/><br/>
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={wt3}/><br/>
                </figure>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 02.09.2017</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-calendar"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Termine Session 2018</h2>
              </div>
              <div className="panel-body">
                <p className="medium">Die Termine unserer Veranstaltungen der kommenden Session 2018 wurden festgelegt. <br/>
                  <Link to="/termine" className="read-more">Lesen Sie hier</Link></p>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 15.08.2017</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Bericht der Jahreshauptversammlung 2017</h2>
              </div>
              <div className="panel-body">
                <h5>Neues im Vorstand - Freude über Mitgliederzuwachs</h5>
                <figure>
                  <img className="img-responsive img-rounded" src={vorstand}/><br/>
                  <figcaption>Der neue Vorstand der KG (v.l.n.r): Andreas Faust, Oliver Meier-Ronfeld, Claudia Wagner, Tobias Jost, Andreas Engel, Andre Henn, Michael St&uuml;ber</figcaption>
                </figure>
                <br/>
                <p className="medium">
                  Am Gründonnerstag, den 13. April 2017 veranstaltete die Karnevalsgesellschaft „Mir hale Pool“ Verscheid ihre Jahreshauptversammlung im Gasthof Paganettis in Verscheid. Der Vorsitzende Andreas Faust konnte 24 Mitglieder begrüßen. Präsident Oliver Meier-Ronfeld berichtete in seinem Jahresbericht über eine erfolgreiche Session 2017, die auch dem amtierenden Prinzenpaar Tobi I. und Marina II. zu verdanken sei. Der Kassenbericht vom Kassierer Dirk Fischer wurde zustimmend zur Kenntnis genommen und entsprechend den Empfehlungen der Kassenprüfer wurde der Vorstand entlastet.<br/>
                  Dirk Fischer legte im Anschluss an die Entlastung sein Amt als Kassierer nieder. Ihm wurde für die langjährige und zuverlässige Mitarbeit von den Anwesenden gedankt. Als sein Nachfolger ist Andreas Engel einstimmig gewählt worden. Diese Wahl machte die Neuwahl des zweiten Vorsitzenden erforderlich, die Tobias Jost für sich entschied. Unterstützt wird der neu gebildete Vorstand von André Henn, dem neuen Pressewart. Vorsitzender und Präsident wünschten den neuen Vorstandsmitgliedern viel Erfolg und eine gute Zusammenarbeit.<br/>
                  Die KG begrüßt fünf neue MitgliederInnen im Verein, die teilweise als Rote Jacken aktiv an den Veranstaltungen der KG teilnehmen bzw. das Wagenbau-Team verstärken möchten. Schwerpunkte der weiteren Tagesordnungspunkte waren neben der Neugestaltung des KG-Wagens die Vorbereitung des 90-jährigen Vereinsjubiläums 2019, der vorgesehene karnevalistische Wandertag sowie der Umbau der aktuellen Homepage www.mir-hale-pool.de.
                </p>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 13.04.2017</strong></small>
              </div>
            </article>
            <article className="panel panel-danger panel-outline">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-body">
                Start.
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

News.propTypes = {};

export default News;
