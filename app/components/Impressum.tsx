import React, { Component } from 'react';
import Header from './Header';

interface ImpressumProps {}

/**
 *
 */
class Impressum extends Component<ImpressumProps> {

  /**
   *
   */
  constructor(props: ImpressumProps) {
    super(props);
  }

  /**
   *
   */
  render() {
    return (
      <div>
        <Header titleText={'Impressum'} />
        <section id="impressum">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3>
                  <strong>KG &quot;Mir hale Pool&quot; Verscheid 1929 e.V</strong>
                </h3>
                <p className="large">Vertreten durch:<br />
                  Andreas Faust<br />
                  Epgerterstr. 10 a<br />
                  53547 Dasbach</p>
                <ul className="list-unstyled">
                  <li>
                    <p className="large">
                      <i className="fa fa-phone fa-fw"></i>
                      (0162) 6851480</p>
                  </li>
                  <li>
                    <p className="large">
                      <i className="fa fa-envelope-o fa-fw"></i>
                      <a href="mailto:info@mir-hale-pool.de">info@mir-hale-pool.de</a>
                    </p>
                  </li>
                </ul>
                <h3>
                  <strong>Eingetragen im Vereinsregister:</strong>
                </h3>
                <p className="large">Vereinsregister-Nr&nbsp; VR 11172<br />
                  Gericht: Amtsgericht Montabaur</p>
                <ul className="list-group text-left">
                  <li className="list-group-item">
                    <h3>1. Haftungsbeschränkung</h3>
                    <p className="medium">
                      Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.</p>
                  </li>
                  <li className="list-group-item">
                    <h3>2. Externe Links</h3>
                    <p className="medium">
                      Diese Website enthält Verknüpfungen zu Websites Dritter (&quot;externe Links&quot;). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                    </p>
                  </li>
                  <li className="list-group-item">
                    <h3>3. Urheber- und Leistungsschutzrechte</h3>
                    <p className="medium">Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.<br />
                      Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p>
                  </li>
                  <li className="list-group-item">
                    <h3>4. Besondere Nutzungsbedingungen</h3>
                    <p className="medium">Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.</p>
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

export default Impressum;
