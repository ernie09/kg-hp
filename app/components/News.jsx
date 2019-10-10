import React, { Component } from 'react';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';

import vorstand from '../img/vorstand/VorstandKGVerscheid.jpg';
import wt1 from '../img/wandertag/Gruppenphoto.png';
import wt2 from '../img/wandertag/Bild_2.jpg';
import wt3 from '../img/wandertag/Bild_1.jpg';

import wt20181 from '../img/wandertag/2018/Wanderung.jpg';
import wt20182 from '../img/wandertag/2018/Gruppenbild.jpg';
import wt20183 from '../img/wandertag/2018/Kneipe.jpg';

import jubilied from '../img/Jubilied.png';
import jubiPlakat from '../img/2019_Plakat_A4.png';
import pp2019 from '../img/prinzenpaare/senior/2019.jpg';
import kpp2019 from '../img/prinzenpaare/junior/2019.png';

import kika2019_1 from '../img/kk2019/IMG_2085.jpg';
import kika2019_2 from '../img/kk2019/IMG_2092.jpg';
import kika2019_3 from '../img/kk2019/IMG_1958.jpg';
import prinzenpost2019 from '../img/prinzenpost2019.png';

import termine2018 from '../img/plakate/2018-Prinzenpost-A4-kg-Verscheid.png';
import kv from '../img/plakate/2018-kv1.png';
import ue60 from '../img/plakate/2018-kv2.png';

import ue601 from '../img/ue60/1.JPG';
import ue602 from '../img/ue60/2.JPG';

class News extends Component {

  constructor(props) {
    super(props);

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
                <h2 className="panel-title">Session 2020</h2>
              </div>
              <div className="panel-body">
                Die kommende Session ist nicht mehr fern. <Link to="termine">Hier</Link> finden Sie die Termine der Session 2020.
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, Oktober 2019</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Jubiläum 2019</h2>
              </div>
              <div className="panel-body">
                <figure>
                  <img className="img-responsive img-rounded" src={jubiPlakat} /><br />
                </figure>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, Mai 2019</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Kleine und große Narren feierten ausgelassen den Kinderkarneval auf Hüh und Scheldche</h2>
              </div>
              <div className="panel-body">
                <p className="medium">
                Auch die jüngsten Narren von Hüh und Scheldche kommen im Jubiläumsjahr 2019 natürlich nicht zu kurz. So feierten sie am Sonntag, den 03.02.2019, endlich auch &quot;ihre&quot; Sitzung - den Kinderkarneval. <br />
    Pünktlich um 14.11 Uhr marschierte der Kinder-Elferrat (Solveig Schreiber, Lasse Schreiber, Joel Pietsch, Elias Menk, Amelie Schmidt, Alessa Rauth, Carla Lyne und Julia Arndt) zusammen mit der Kinderpräsidentin Hannah Menk in den kunterbunten und gut besuchten Saal in Verscheid ein.<br />
    Hannah führte souverän durch das vielfältige Programm und hieß zunächst Kinderprinzessin Finja I. &quot;von Waßerburg und Schloss, dieses Jahr ist sie allein der Boss&quot; zusammen mit ihrer Hofdame Sophie (Koehein) und den beiden Tills Liam (Waßerburger) und Ben (Koehein) willkommen. Begleitet wurden die vier von den Kleinen Funken der KG &quot;Mir hale Pool&quot; Verscheid, die später am Nachmittag noch ihr tänzerisches Können unter Beweis stellen durften. Kinderprinzessin Finja I. begrüßte ihr närrisches Volk mit einer gekonnten Rede und einem dreifach kräftigen &quot;Hüh Scheldche Alaaf&quot;.<br />
  Aber auch den &quot;großen&quot; Narren wurde der Empfang an diesem Tag nicht verwehrt. Das Prinzenpaar der KG &quot;Mir hale Pool&quot; Verscheid, Prinz Axel I. &quot;von Eis und Schnee&quot; und Prinzessin Petra II. &quot;von Kindergeschrei und Malerei&quot;, begleitet von den &quot;rude Juppe&quot; der KG, den Jungfunken und der Prinzengarde, betraten den Saal. Nach der Begrüßung und dem Ordentausch machten sie schnell wieder die Bühne frei für die Hauptakteure des Tages: die Kinder von Hüh und Scheldche. <br />
  Den Anfang machte die Rasselbande des Kindergartens &quot;Haus Kunterbunt&quot; mit ihrem possierlichen Piraten-Tanz. Die Kleinen Funken (Kinderprinzessin Finja, Alessa Rauth, Carla Lyne, Raquel Hohn, Lea Charwat, Julia Arndt, Stella Dreßler und Karolin Rößler) ließen nicht lange damit auf sich warten, auch ihren großartigen Tanz zu präsentieren. Im Anschluss folgte ein Vortrag, der auch auf der &quot;großen&quot; Kappensitzung ein Highlight gewesen wäre: Matti Sorg als &quot;kleiner Markus Krebs&quot; stand seinem Vorbild in nichts nach und unterhielt nicht nur das junge Publikum.
Die Prinzengarde der KG (Annalena Dorn, Dunja Nannen, Jessica Mrusek, Jessica Mathey, Laura Lorenz, Leonie Pütz, Michelle Radon, Nina Stüber) gab ihren Gardetanz zum Besten und auch die Jungfunken (Chiara Faust, Hannah Marie Bräunsbach, Celina Medinger, Annalie Lenz, Angela Schilling, Annabell Eiyrich, Lisa Brunnert) zeigten auf der Bühne, dass für den Nachwuchs in den Reihen der Tanzgruppen bestens gesorgt ist. Solomariechen Dana Fischer ließ Groß und Klein mit ihrer akrobatischen Meisterleistung staunen. Sogar der Kinder-Elferrat selbst hatte einen Tanz einstudiert, den er mit Bravur darbot.<br />
Auch die Gastvereine aus Roßbach, Niederbreitbach und Waldbreitbach statteten der Hüh mit ihren &quot;kleinen&quot; Tollitäten und Tanzgarden einen Besuch ab. <br />
Damit sich aber nicht nur die Profis auf der Bühne austoben durften, wurde auch das junge Publikum mehrmals mit Kinderdisco, Mitmachspielen und -liedern aktiv miteinbezogen.
Bevor Kinderpräsidentin Hannah schließlich die erfolgreiche Sitzung am frühen Sonntagabend zum Ende führte, betrat Ortsbürgermeisterin Roswitha Schulte die Bühne und erklärte ihre Begeisterung über den gelungenen Nachmittag. Sie lobte die hervorragende Leistung der Kinderpräsidentin, Kinderprinzessin und aller Akteure und bedankte sich bei den beiden Organisatorinnen des Kinderkarnevals Nancy Ronfeld und Marina Jost mit mehrfachem &quot;Hüh Scheldche Alaaf&quot;.
                </p>
                <figure>
                  <img className="img-responsive img-rounded" src={kika2019_1} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={kika2019_2} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={kika2019_3} /><br />
                </figure>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 6.02.2019</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Prinzenpost 2019</h2>
              </div>
              <div className="panel-body">
                <figure>
                  <img className="img-responsive img-rounded" src={prinzenpost2019} /><br />
                </figure>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 30.01.2019</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Ideales Jubiläumsprinzenpaar gefunden!</h2>
              </div>
              <div className="panel-body">
                <p className="medium">
                  In diesem Jahr feiert die KG &quot;Mir hale Pool&quot; Verscheid ihr 90 jähriges Bestehen. Unter dem Motto &quot;90 Johr Mir hale Pool...die Jubi Session&quot; startete die Session 2019 am Samstag den 12.01.2019 mit einer stimmungsvollen Kappensitzung. Bei Auflösung des best gehüteten Geheimnisses (Wer ist das Prinzenpaar?) erfolgte eine großartige Überraschung mit der sogar die &quot;alten Hasen&quot; der KG Verscheid nicht gerechnet hatten. Zuvor jedoch eine Zusammenfassung des Abends.<br />
                  Nach der närrischen Begrüßung durch den Präsidenten Oliver Meier-Ronfeld wurde das bis dato amtierende Dreigestirn Prinz Karin I. &quot;aus dem Scheldchesland, auf der Hüh auch als Prinzessin bekannt&quot;, Prinzessin Doris II. &quot;deren Hobby Line Dance ist, worüber sie trotzdem nie die Möhnen vergisst&quot;, und Bauer Iris I., &quot;jeck bekannt hier und im ganzen Scheldchesland&quot; von der karnevalistischen Menge empfangen. Das Dreigestirn sollte nicht lange alleine auf der Bühne bleiben. Es folgte die Inthronisation der Kinderprinzessin 2019: Prinzessin Finja I. (&quot;von Waßerburg und Schloss, dieses Jahr ist sie allein der Boss.&quot;). Zu Ehren der Tollitäten präsentierte die Prinzengarde der KG &quot;Mir hale Pool&quot; Verscheid (Annalena Dorn, Dunja Nannen, Jessica Mrusek, Jessica Mathey, Laura Lorenz, Leonie Pütz, Michelle Radon, Nina Stüber; Trainerin: Doro Schmitz) ihren diesjährigen Gardetanz. Die Jungfunken (Chiara Faust, Hannah Marie Bräunsbach, Celina Medinger, Annalie Lenz, Angela Schilling, Annabell Eiyrich, Lisa Brunnert; Trainerin: Doro Schmitz; Betreuerin Bea Mathey) standen der Prinzengarde in Nichts nach und zauberten ebenfalls einen hervorragenden Gardetanz auf die Bühne.
                  <br />Mit dem ersten Redebeitrag folgte direkt ein Knaller. &quot;De Schorsch&quot; (Jürgen Petzold) verstand es wieder -auch nach einjähriger Pause- mit seinem exzellenten Vortrag und gekonnten Witzen das Publikum bestens zu unterhalten. Es folge ein fetziger Besuch aus der Kreisstadt Neuwied: Die Tanzgarde der KG Ringnarren aus Heddesdorf &quot;Love Revolution&quot; präsentierten ihren peppigen Showtanz rund ums Thema Hollywood. Auch dieses Jahr durfte Alex Schreiber mit ihrem Redebeitrag nicht fehlen. Mit ihrem Vortrag &quot;Alles Gute zum Geburtstag&quot; gratulierte sie dem Verein zu seinem 90-jährigem Jubiläum. Durch abgewandelte Evergreens, die auf allseits bekannte Gesichter von Hüh un Scheldche umgedichtet wurden, machte sie Vorschläge zur Suche eines geeigneten Jubiläumsprinzenpaares. Schlag auf Schlag ging es weiter. Die Tanzgarde der Perlen vom Rhein aus Rheinbrohl haben auch in diesem Jahr wieder einen fantastischen Tanz dargeboten und gehören schon längst zum festen Bestandteil einer jeden Kappensitzung auf Hüh un Scheldche. Mit seinem witzigen Redevortrag &quot;Nenne drei Hochkulturen...&quot; verstand es Erich Engel das Publikum zu begeistern. Als erste Tanzgarde eines Gastvereins hat die Tanzgarde der &quot;KG Brave Jonge&quot; Waldbreitbach Ihren Gardetanz auf die Bühne gezaubert. Die Tänzerinnen des KC Rot-Blau Niederbreitbach begeisterten das Publikum am Anschluss wieder einmal mit einer meisterlichen Tanzdarbietung.
                  Zur Entmachtung des Dreigetirns betraten die Tollitäten sowie Präsidenten der drei Gastvereine KG Blau-Weiß Roßbach, KC Rot-Blau Niederbreitbach und KG Brave-Jonge Waldbreitbach die Bühne. Karin Walloschek, Doris Len und Iris Brockmann dankten in einer Rede für die tolle Session 2018 und gaben die &quot;Insignien der Macht&quot; an den Vorsitzende Andreas Faust ab, der diese nur vorläufig an sich nahm. Zu Ehren des entmachteten Dreigestirns war es an der Zeit für das Sessionslied 2018, gesungen von Michael Stüber, der den Saal Paganetti hiermit kurz vor der Pause nochmal zum Kochen brachte.
                  <br />
                  Nach einer kurzen Verschnaufpause begann der zweite Teil der Kappensitzung mit einem hervorragenden Gardetanz der Tanzgarde der KG &quot;Blau-Weiß&quot; Roßbach. Nach seiner Bühnenpremiere im letzten Jahr konnte Andreas Engel mit seinem kurzweiligen Vortrag &quot;Der Hausmeister&quot; nachlegen. Hierin berichtete er dem Publikum in exzellenter Art über die Tücken und Kuriosiäten des Hausmeisterberufs und der Hausbewohner.
                  <br />
                  Die heiße Phase der Kappensitzung wurde von den Zuckerpuppen (Annette Nolde, Jeanette Fischer, Steffi Lorenz, Nancy Ronfeld, Tanja Helmes) mit ihrem rockigen Tanz eingeläutet. Die Crazy Street Girls (Marika Poddey, Ulrike Gruschka, Nadine Weis, Christiane Müller, Iris Brockmann, Doris Len, Jessica Roß, Karin Walloschek, Anja Koehein, Anke Bieler) folgten mit &quot;Es war einmal… Schneewitchen mal anders&quot;, einer witzigen, musikalisch unterlegten Interpretation des bekannten Märchens. Ein Knaller durfte natürlich nicht fehlen: Der Solotanz des Funkemariechens der KG &quot;Mir hale Pool&quot;: Dana Fischer legte unter den Augen ihrer Trainerin Anne Hardt eine Paradevorstellung hin, welche die Zuschauer begeisterte. Der im Anschluss folgende Showtanz der Prinzengarde der KG &quot;Mir hale Pool&quot; stand unter dem Motto &quot;Grease / Rock &amp; Roll&quot;. Es folgte eine Premiere: Erstmals standen die Showtanzgruppe und das Männerbalett (Andreas Engel, Carsten Buhr, Heinrich Malcher, Maximilian Klinkert, Oliver Meier-Ronfeld, André Henn) gemeinsam auf der Bühne und verzückten das Publikum mit ihrem Tanz zu den Klängen von &quot;Greased Lightning&quot; und &quot;We go together...&quot;.
                  <br />
                  Doch nun stand der Höhepunkt der Kappensitzung an, die Proklamation des Jubiläumsprinzenpaares. Es handelte sich um eine Überraschung mit der niemand im Saal gerechnet hatte. Voller Stolz und unter langanhaltend-tosendem Beifall des Publikums betraten das Prinzenpaar Axel und Petra Buhr die Bühne. Sie regieren das närrische Volk auf Hüh und Scheldche in der Jubliäumssession als: Prinz Axel I., von Schnee und Eis und Prinzessin Petra II., von Kindergeschrei und Malerei. Der Vorsitzende Andreas Faust übergab den beiden die Insignien der närrischen Macht, das Zepter und die Prinzenkette. Mit ihren Glückwünschen überreichte Ortsbürgermeisterin Roswitha Schulte ebenfalls den obligatorischen Schlüssel der Gemeindekasse. Zu guter letzt präsentierte Michael Stüber der jubelnden Menge das Lied der Jubiläumssession 2019 und, auf Wunsch des neuen Prinzenpaares, seinen Klassiker &quot;He ob d‘r Hüh sein mir jebore...&quot;.
                  <br />
                  Das närrische Volk feierte mit dem frisch gebackenen Prinzenpaar noch bis in die frühen Morgenstunden.
                </p>
                <figure>
                  <img className="img-responsive img-rounded" src={pp2019} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={kpp2019} /><br />
                </figure>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 15.01.2019</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Sessionlied 2019</h2>
              </div>
              <div className="panel-body">
                <p className="medium">
                  Für alle, die das Sessionlied der Jubiläumssession mitsingen möchten, hier der Liedtext
                </p>
                <figure>
                  <img className="img-responsive img-rounded" src={jubilied} /><br />
                </figure>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 15.01.2019</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Wandertag 2018 der KG</h2>
              </div>
              <div className="panel-body">
                <p className="medium">
                 Am Samstag, den 15.09.2018, unternahm die KG &quot;Mir hale Pool&quot; Verscheid ihren diesjährigen Wandertag. Bei angenehmem Spätsommerwetter trafen sich zahlreiche Mitglieder am Dorfplatz in Hollig, dem diesjährigen Startpunkt.<br />
                 Von dort ging es zunächst hinunter ins Fockenbachtal. Der Weg führte die Gruppe danach zur Hümmericher Mühle, wo bei einem ersten Zwischenstopp die Akkus für den anschließenden Anstieg nach Hümmerich gefüllt wurden.
                 Weiter ging‘s den Berg hinauf nach Hümmerich, wo ein Besuch im Gasthof Dreydoppel auf dem Plan stand.<br />
                 Das letzte Teilstück der Wanderung führte nach Krunkel. In diesem Jahr endete die Tour im Gasthof Eberz - &quot;beim Gertrud&quot;. Nach einem deftigen, liebevoll hergerichteten Abendessen verweilten Mitwanderer und &quot;Nachzügler&quot; begleitet von Evergreens aus der Jukebox noch einige schöne Stunden in der beliebten Dorfkneipe. <br />
                 Allen Mitwanderern und besonders dem &quot;Organisations-Team&quot; Erich Engel und Wolfgang Rüth gilt ein Dankeschön für den gelungenen Wandertag.
                </p>
                <figure>
                  <img className="img-responsive img-rounded" src={wt20181} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={wt20182} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={wt20183} /><br />
                </figure>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 23.09.2018</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Senioren von Hüh und Scheldche lassen die Puppen tanzen</h2>
              </div>
              <div className="panel-body">
                <p className="medium">
                  <strong>- Verscheid -</strong> Am Sonntag, den 28.01.2018, feierten die Senioren von Hüh und Scheldche ihre diesjährige Ü60-Karnevalssitzung in der Karnevalshofburg &quot;Paganettis Zur Erholung&quot; in Verscheid. Rund 50 Senioren der Gemeinde erlebten bei Kaffee und Kuchen einen närrischen Nachmittag.<br />
                  Die Bardemeister Richie Lerbs und Willi Hautkappe brachten anschließend musikalischen Schwung den Saal und sorgten für Musik zum Mitsingen und Mitschunkeln.
                    Zu Beginn der Sitzung marschierte die KG &quot;Mir hale Pool&quot; Verscheid mit den kleinen Funken und den Jungfunken auf die Bühne. Präsident Oliver Meier-Ronfeld hatte natürlich nicht nur die &quot;Roten Jacken&quot; dabei. Auch das amtierende Dreigestirn 2018 Prinz Karin I., Prinzessin Doris II. und Bauer Iris I. mit der Prinzengarde wurden begeistert empfangen. Nach ein paar Worten der Begrüßung an das närrische Publikum präsentierten die kleine Funken und die Jungfunken der KG ihre schwungvollen Gardetänze, bei denen sie beeindruckende Hebefiguren auf die Bühne zauberten.<br />
  Unter den kritischen Augen der Ehrenpräsidenten Albert Giritsch und Willibald Brücken bestand Andreas Engel (&quot;Der Bestatter&quot;) erfolgreich seine Premiere in der &quot;Ü60-Bütt&quot;. Einen flotten Showtanz „Love Revolution“ legte die Tanzgarde der KG Ringnarren aus Heddesdorf hin. Die Hüh Scheldche Schau (Karin Walloschek und Doris Len) informierte über die neusten Nachrichten von der Hüh, von der Wied und aus aller Welt. Die Prinzengarde der KG &quot;Mir hale Pool&quot; bewies gleich zweimal vor dem begeisterten Publikum ihr Können: Zunächst mit ihrem Gardetanz, bei dem Pailletten in der Nachmittagssonne funkelten, und später mit ihrem Showtanz unter dem Motto 90er-Jahre und Eurodance. Ein offizieller Programmpunkt durfte auch nicht fehlen: Das Dreigestirn überreichte den anwesenden Müttern von Prinz Karin I. und Bauer Iris I.,  Herta Pindur und Ria Birnbach, den Dreigestirnsorden. Für Herta Pindur kam es sogar doppelt: Sie war die älteste anwesende Person (90 Jahre alt) im Saal und wurde dafür zusätzlich noch mit dem Sessionsorden ausgezeichnet.<br />
Nun ging es schwungvoll weiter: Das Solomariechen Dana Fischer zeigte ihr Können mit ihrem anspruchsvollen Tanz gespickt mit akrobatischen Einlagen. Für eine amüsante Verwechslung am Telefon sorgten Corinna und Erich Engel mit ihrem witzigen Vortrag. Ein Programmpunkt durfte selbstverständlich nicht fehlen: Mit dem Sessionslied sowie einigen seiner &quot;Klassikern&quot; brachte Michael Stüber den Saal wieder einmal zum Kochen und das Publikum hielt es nicht mehr auf den Stühlen. Zu guter Letzt rundete das Männerballett &quot;Ice Time&quot; das Programm der Ü60-Sitzung ab. Ortsbürgermeisterin -Queen Mom- Roswitha Schulte bedankte sich anschließend bei der KG für die Organisation des gelungen Nachmittags und bei den Trainerinnen der Tanzgarden für ihre Jugendarbeit. In diesem Zuge wurde Kapellmeister Jens Hauschild für seine musikalische Untermalung des Nachmittags ebenfalls mit dem Sessionsorden ausgezeichnet.
                </p>
                <figure>
                  <img className="img-responsive img-rounded" src={ue601} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={ue602} /><br />
                </figure>

              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 07.02.2018</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Flotter Dreier ob de Hüh - Erstmals führt ein Dreigestirn das närrische Volk auf Hüh und Scheldche</h2>
              </div>
              <div className="panel-body">
                <p className="medium">
                  <strong>- Verscheid -</strong> „Jeck wie nie“ ist das diesjährige Sessionsmotto der KG Verscheid Mir hale Pool. Diesem Motto fühlten sich die Vereinsmitglieder besonders verpflichtet und lüfteten im Anschluss an die stimmungsvolle Kappensitzung am Samstag den 13.01.2018 dem enthusiastischen Publikum als Lösung des best gehüteten Geheimnisses (Wer ist das Prinzenpaar?) erstmals in der Vereinsgeschichte ein Dreigestirn, das ausschließlich aus Frauen besteht. Zuvor jedoch eine Zusammenfassung des Abends.<br />
              Nach einer närrischen Begrüßung durch den Präsidenten Oliver Meier-Ronfeld wurde das bis dato amtierende Prinzenpaar Prinz Tobi I. (von BMW bekannt) mit seiner holden Lieblichkeit Prinzessin Marina II. (aus dem Roßbe Land) von der jubelnden Menge empfangen. Das Programm eröffnete direkt mit einem Knaller: Die Prinzengarde der KG Mir hale Pool Verscheid (Nina Stüber, Eva Schütz, Jessica Mathey, Leonie Pütz, Elvira Schwarzkopf, Laura Lorenz, Dunja Nannen, Michelle Radon; Trainerinnen: Katrin Rüth, Tamara Buhr) präsentierte ihren diesjährigen Gardetanz. Es folge die Verabschiedung des Kinderprinzenpaares 2017 - Prinz Manuel I. und Prinzessin Chiara I. Zu Ehren des entmachteten Kinderprinzenpaares tanzten die Jungfunken (Lina Schmitt, Rachel Gärtner, Monique Schwarz, Michelle Schwarz, Anna Prangenberg, Dana Lorenz, Tamina Rauth, Kassandra Schonschek; Trainerinnen: Dana Fischer und Jenny Rekow-Gärtner) mit einem hervorragenden Tanz. Den ersten Redebeitrag lieferte Alex Schreiber mit ihrer Suche nach der Queen Mom von Hüh und Scheldche. Hierin wurden zahlreiche Kandidatinnen (auch mögliche Prinzeneltern) ins Rennen geschickt, wobei Bürgermeisterin Roswitha Schulte am Ende des Vortrags zur Queen Mom gekrönt wurde. Auch in diesem Jahr verstand es Alex Schreiber mit einem exzellenten Vortrag das Publikum bestens zu unterhalten. Nun wurde die Bühne voll: Die Chicas Locas, eine Tanzgruppe aus Ehlscheid mit über 15 Mädels, stürmten die kleine Bühne in der Hofburg Paganetti in Verscheid mit ihrem peppigen Tanz. Doris Len und Karin Walloschek informierten in der Hüh Scheldche Schau über die neusten Nachrichten von der Hüh, von der Wied und aus aller Welt.
  Schlag auf Schlag ging es weiter. Die Tanzgarde der Perlen vom Rhein aus Rheinbrohl haben auch in diesem Jahr wieder einen fantastischen Tanz dargeboten und gehören schon längst zum festen Bestandteil einer jeden Kappensitzung auf Hüh un Scheldche. Als ersten Gastverein konnte Oliver Meier-Ronfeld den KC Rot-Blau Niederbreitbach mit ihrem Prinzenpaar der Session 2017, ihrem Präsidenten Lutz Rams sowie einer Abordnung der KG begrüßen. Nach ein paar Worten konnte die Solotänzerin des KC Rot-Blau, Denise Humberg, das Publikum wieder einmal mit einer meisterlichen Tanzdarbietung begeistern. Michael Stüber gab der jubelnden Menge anschließend das Sessionlied des vergangenen Jahres Die Hüh ist wild & frei zum Besten. Es folgte die Entmachtung des Prinzenpaares der Session 2017, wobei der Vorsitzende Andreas Faust die Insignien der Macht vorläufig an sich nahm.<br />
Nach einer kurzen Verschnaufpause begann der zweite Teil der Kappensitzung mit einem witzigen Vortrag von Corinna und Erich Engel, der sich um eine Verwechslung am Telefon zwischen einem Krankenhaus und einer Autowerkstatt drehte. Natürlich durfte der Solotanz des Funkemariechens der KG Mir hale Pool nicht fehlen. Dana Fischer legte eine Paradevorstellung hin, welche die Zuschauer begeisterte. Eine Bühnenpremiere in der Bütt gab es an diesem Abend auch: Andreas Engel meisterte diese in seinem Vortrag Der Bestatter bravourös und zwar derart, dass er vom Publikum mit der ersten Rakete des Abends belohnt wurde. Mit Airbagagge rund um die Welt (Bea Mathey, Karin Walloschek, Doris Len, Marina Jost, Iris Brockmann, Viola Ring, Jessica Roß, Ulrike Gruschka, Christiane Müller) und den Zuckerpuppen (Annette Nolde, Jeanette Fischer, Steffi Schwarz, Steffi Lorenz, Nancy Ronfeld, Tanja Helmes) startete die Kappensitzung in ihre heiße Phase. Der im Anschluss folgende Showtanz der Prinzengarde der KG Mir hale Pool stand unter dem Motto 90er und Eurodance. Hierbei schaffte es die Prinzengarde mit ihrem erstklassigen Showtanz den Saal zum Kochen zu bringen. Die KG Roßbach stattete als weiterer Gastverein der Sitzung einen Besuch ab und brachte neben einer Abordnung des Elferrats und der Möhnen auch ihre Tanzgarde mit, die ihren Gardetanz präsentierte. Das Männerbalett Ice Time (Andreas Engel, Carsten Buhr, Heinrich Malcher, Maximilian Klinkert, Oliver Meier-Ronfeld, André Henn)  absolvierte sportliche Höchstleistung zur Musik von Vanilla Ice und MC Hammer.<br />
Doch nun Stand der Höhepunkt der Kappensitzung an, die Proklamation des Dreigestirns.
Angeführt von Prinz Karin I. aus dem Scheldchesland, auf der Hüh auch als Prinzessin bekannt, stürmten Prinzessin Doris II. deren Hobby Line Dance ist, worüber sie trotzdem nie die Möhnen vergisst, und Bauer Iris I., jeck bekannt hier und im ganzen Scheldchesland, unter den staunenden Blicken des närrischen Volkes die Bühne. Mit dieser karnevalistischen Regierung hatte niemand gerechnet. Auch die Roßbacher Gäste waren erstaunt und wussten sich nicht anders zu helfen, als den für die Prinzessin vorgesehenen Blumenstrauß zu dritteln.<br />
Die Hüh ist immer für eine Überraschung gut.
In der anschließenden Feier stellte der „flotte Dreier“ tatkräftig unter Beweis, dass er den karnevalistischen Anforderungen der Session gewachsen ist.
                </p>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 21.01.2018</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Termine Session 2018</h2>
              </div>
              <div className="panel-body">

                <figure>
                  <img className="img-responsive img-rounded" src={termine2018} /><br />
                </figure>

              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 21.01.2018</strong></small>
              </div>
            </article>

            <article className="panel panel-danger">
              <div className="panel-heading icon">
                <i className="glyphicon glyphicon-info-sign"></i>
              </div>
              <div className="panel-heading">
                <h2 className="panel-title">Karten Kappensitzung und Ü60-Sitzung</h2>
              </div>
              <div className="panel-body">
                <p className="medium">Es gibt noch ein paar Restkarten für die Kappensitzung und die Ü60-Sitzung.<br /> Erhältlich bei Nah und Gut Geschull in Nassen.</p>
              </div>
              <div className="panel-footer">
                <small><strong>Verscheid, 22.12.2017</strong></small>
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
                  <img className="img-responsive img-rounded" src={ue60} /><br />
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
                  <img className="img-responsive img-rounded" src={kv} /><br />
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
                <p className="medium">Karten für die Kappensitzung bzw. den Ü60-Karneval der Session 2018 können am <b>16.12.2017</b> ab <b>14:30</b> im <i>Gasthof Paganettis zur Erholung in Verscheid</i> erworben werden.<br />
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
                Weiter ging‘s. Nach einem Abstecher über den ehemaligen „Trimm-Dich-Pfad“ führte die Wanderung hinunter nach Roßbach, wo im „Cafe Kröll“ eine weitere Rast eingelegt wurde.<br />
                Über Lache machten wir uns auf den Rückweg in Richtung Verscheid. Ein gemeinsames Abendessen im Vereinslokal war die Belohnung für die „Mühen des Tages“. Mitwanderer und „Nachzügler“ verbrachten noch weitere schöne Stunden im gastlichen „Paganetti´s“.<br />
                Allen Mitwanderern und besonders dem „Organisations-Team“ Claudia Wagner und Andreas Engel gilt ein „Dankeschön“ für den gelungenen Wandertag.<br />
                </p>
                <figure>
                  <img className="img-responsive img-rounded" src={wt1} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={wt2} /><br />
                </figure>
                <figure>
                  <img className="img-responsive img-rounded" src={wt3} /><br />
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
                <p className="medium">Die Termine unserer Veranstaltungen der kommenden Session 2018 wurden festgelegt. <br />
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
                  <img className="img-responsive img-rounded" src={vorstand} /><br />
                  <figcaption>Der neue Vorstand der KG (v.l.n.r): Andreas Faust, Oliver Meier-Ronfeld, Claudia Wagner, Tobias Jost, Andreas Engel, Andre Henn, Michael St&uuml;ber</figcaption>
                </figure>
                <br />
                <p className="medium">
                  Am Gründonnerstag, den 13. April 2017 veranstaltete die Karnevalsgesellschaft &quot;Mir hale Pool&quot; Verscheid ihre Jahreshauptversammlung im Gasthof Paganettis in Verscheid. Der Vorsitzende Andreas Faust konnte 24 Mitglieder begrüßen. Präsident Oliver Meier-Ronfeld berichtete in seinem Jahresbericht über eine erfolgreiche Session 2017, die auch dem amtierenden Prinzenpaar Tobi I. und Marina II. zu verdanken sei. Der Kassenbericht vom Kassierer Dirk Fischer wurde zustimmend zur Kenntnis genommen und entsprechend den Empfehlungen der Kassenprüfer wurde der Vorstand entlastet.<br />
                  Dirk Fischer legte im Anschluss an die Entlastung sein Amt als Kassierer nieder. Ihm wurde für die langjährige und zuverlässige Mitarbeit von den Anwesenden gedankt. Als sein Nachfolger ist Andreas Engel einstimmig gewählt worden. Diese Wahl machte die Neuwahl des zweiten Vorsitzenden erforderlich, die Tobias Jost für sich entschied. Unterstützt wird der neu gebildete Vorstand von André Henn, dem neuen Pressewart. Vorsitzender und Präsident wünschten den neuen Vorstandsmitgliedern viel Erfolg und eine gute Zusammenarbeit.<br />
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
