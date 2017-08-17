import React, {Component} from 'react';
import Header from './Header.jsx';

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
          <div className="timeline">
            <div className="line text-muted"></div>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-calendar"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Termine Session 2018</h2>
              </div>
              <div className="panel-body">
                <p className="medium">Die Termine unserer Veranstaltungen der kommenden Session 2018 wurden festegelegt. <br/><a href="/termine" className="read-more">Lesen Sie hier</a></p>
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
                  <img className="img-responsive img-rounded" src="img/vorstand/VorstandKGVerscheid.jpg"/><br/>
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
            {/*
            <div className="separator text-muted">
              <time>25. 3. 2015</time>
            </div>

            <article className="panel panel-success">

              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-plus"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">New content added</h2>
              </div>
              <div className="panel-body">
                Anything you can do with
                <code>.panel</code>, can be done in timeline too!
              </div>
              <ul className="list-group">
                <li className="list-group-item">Like</li>
                <li className="list-group-item">list</li>
                <li className="list-group-item">groups</li>
                <li className="list-group-item">and</li>
                <li className="list-group-item">tables</li>
              </ul>
            </article>
            */}
            <article className="panel panel-danger panel-outline">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-body">
                Mehr gibt es nicht zu berichten.
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
