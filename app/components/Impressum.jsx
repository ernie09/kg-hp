import React, {Component} from 'react';
import Header from './Header.jsx';
//import PropTypes from 'prop-types';

class Impressum extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Impressum'}/>
        <section id="impressum">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>KG &quot;Mir hale Pool &quot;Verscheid 1929 e.V</p>
                <p>Epgerterstr. 10 a</p>
                <p>53547 Dasbach</p>
                <p>&nbsp;</p>
                <p>Telefon: (01 78) 72 69 850</p>
                <p>E-Mail: KG-Mir-hale-Pool-eV@t-online.de</p>
                <p>&nbsp;</p>
                <p>Vertreten durch:</p>
                <p>Andreas Faust</p>
                <p>&nbsp;</p>
                <p>Eingetragen im Vereinsregister:</p>
                <p>Vereinsregister-Nr&nbsp; VR 11172</p>
                <p>Gericht: Amtsgericht Montabaur</p>
                <p>&nbsp;</p>
                <p>1. Haftungsbeschränkung</p>
                <p>Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt
                  auf eigeneGefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis
                  zwischen dem Nutzer und dem Anbieter zustande.</p>
                <p>&nbsp;</p>
                <p>2. Externe Links</p>
                <p>Diese Website enthält Verknüpfungen zu Websites Dritter (&quot;externe Links&quot;). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin
                  überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von
                  externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar.
                  Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.</p>
                <p>&nbsp;</p>
                <p>3. Urheber- und Leistungsschutzrechte</p>
                <p>Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des
                  Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte
                  und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den
                  persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.</p>
                <p>Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p>
                <p>&nbsp;</p>
                <p>4. Datenschutz</p>
                <p>Durch den Besuch der Website des Anbieters können Informationen über den Zugriff (Datum, Uhrzeit, betrachtete Seite) gespeichert werden. Diese Daten gehören nicht zu den personenbezogenen Daten, sondern sind anonymisiert. Sie werden ausschließlich
                  zu statistischen Zwecken ausgewertet. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.</p>
                <p>Der Anbieter weist ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann.</p>
                <p>Die Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter
                  und alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten.</p>
                <p>&nbsp;</p>
                <p>5. Besondere Nutzungsbedingungen</p>
                <p>Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen
                  Nutzungsbedingungen.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Impressum.propTypes = {

};

export default Impressum;
