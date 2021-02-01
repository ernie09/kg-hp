import React from 'react';
import Header from './Header';

type DatenschutzerklaerungProps = {};

const Datenschutzerklaerung: React.FC<DatenschutzerklaerungProps> = () => {
  return <>
    <Header titleText={'Datenschutzerklärung'} />
    <section id="datenschutz">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-left">
            <h2 className="datenschutz-title">I.	Name und Anschrift des Verantwortlichen</h2>
            <ul className="list-group text-left">
              <li className="list-group-item">
                <p className="medium">
Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
                </p>
              </li>
            </ul>

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
                <li>
                  <p className="large">
                    <i className="fa fa-home fa-fw"></i>
                    <a href="http://www.mir-hale-pool.de">Homepage</a>
                  </p>
                </li>
              </ul>
            </div>

            <h2 className="datenschutz-title">II.	Allgemeines zur Datenverarbeitung</h2>


            <ul className="list-group text-left">
              <li className="list-group-item">
                <h3>1.	Umfang der Verarbeitung personenbezogener Daten:</h3>
                <p className="medium">
                      Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                  <br />Bei jedem Abruf unseres Internetauftritts werden Zugriffsdaten wie aufgerufene Seiten, Namen der abgerufenen Dateien, Name des Internet Service Providers sowie Beschreibung des Webbrowsers und des Betriebssystems mit Zugriffsdatum und -uhrzeit gespeichert. Diese Informationen dienen einer statistischen Auswertung ohne Personenbezug. Durch die Nutzung unseres Internetangebots erklären Sie sich damit einverstanden. Unter <b>„personenbezogene Daten“</b> sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen, insbesondere Vor- und Nachname, Geburtsdatum, E-Mail-Adresse, Wohn-Adresse, sowie Bank- und Zahlungsdaten, aber auch Gesundheitsdaten, zu verstehen, vgl. Art. 4 Nr. 1 DS-GVO (Einzelangaben über eine bestimmte oder bestimmbare natürliche Person gemäß § 3 Abs. 1 BDSG).
                </p>
              </li>
              <li className="list-group-item">
                <h3>2.	Rechtsgrundlage für die Verarbeitung personenbezogener Daten:</h3>
                <p className="medium">
                      Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage für die Verarbeitung personenbezogener Daten.
                  <br />Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
                  <br />Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
                  <br />Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
                </p>
              </li>
              <li className="list-group-item">
                <h3>3.	Datenlöschung und Speicherdauer:</h3>
                <p className="medium">Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus dann erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
                </p></li>

            </ul>

            <h2 className="datenschutz-title">III.	Bereitstellung der Website und Erstellung von Logfiles</h2>

            <ul className="list-group text-left">
              <li className="list-group-item">
                <h3>1. Beschreibung und Umfang der Datenverarbeitung:</h3>
                <p className="medium">
                      Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners.
      Folgende Daten werden hierbei erhoben:
                </p>
                <ol>
                  <li>Informationen über den Browsertyp und die verwendete Version</li>
                  <li>Das Betriebssystem des Nutzers</li>
                  <li>Die IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                </ol>
                <p className="medium">
                      Die Daten werden ebenfalls in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.
                </p>
              </li>
              <li className="list-group-item">
                <h3> 2.	Rechtsgrundlage für die Datenverarbeitung:</h3>
                <p className="medium">
             Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </li>
              <li className="list-group-item">
                <h3>3.	Zweck der Datenverarbeitung:</h3>
                <p className="medium">
                    Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben.
                  <br />
                  Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt.
                  <br />
                  In diesen Zwecken liegt auch unser berechtigtes Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO.

                </p>
              </li>

              <li className="list-group-item">
                <h3>4.	Dauer der Speicherung:</h3>
                <p className="medium">
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist.
                  <br />
                  Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.

                </p>
              </li>

              <li className="list-group-item">
                <h3>5.	Widerspruchs- und Beseitigungsmöglichkeit:</h3>
                <p className="medium">
                     Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der Daten in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich. Es besteht folglich seitens des Nutzers keine Widerspruchsmöglichkeit.

                </p>
              </li>
            </ul>

            <h2 className="datenschutz-title">IV. Google +, Facebook und Twitter</h2>
            <ul className="list-group text-left">
              <li className="list-group-item">
                <p className="medium">
Schließlich verwenden wir auch Social Media Kanäle wie Google +, Facebook und Twitter. Über diese Plugins bieten wir dem Nutzer die Möglichkeit unsere Website auch mit anderen Nutzern zu teilen.
                  <br /> Wenn der Nutzer auf das entsprechende Icon klickt wird automatisch eine Verbindung zu Facebook bzw. zu einem der anderen Dienste hergestellt und die Inhalte dieser Seite geladen. Eine vollumfängliche Nutzung der Seite ist allerdings nur bei Bestehen eines Accounts bei dem jeweiligen Dienst möglich.
                  <br /> Auf ihren Internetseiten stellen Facebook, Google + und Twitter detaillierte Angaben zu Umfang, Art, Zweck und Weiterverarbeitung der Daten zur Verfügung. Wir haben in diesem Zusammenhang keinen Einfluss auf den Inhalt der Plugins und die Informationsübermittlung.
                </p>
              </li>
            </ul>

            <h2 className="datenschutz-title">V.	Rechte der betroffenen Person</h2>
            <ul className="list-group text-left">
              <li className="list-group-item">
                <p className="medium">
Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>
              </li>
            </ul>

            <ol>
              <li>Auskunftsrecht:</li>
                  Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.
                Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen über folgende Informationen Auskunft verlangen:
              <ol>
                <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
                <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
                <li>die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;</li>
                <li>die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;</li>
                <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
                <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                <li>alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;</li>
                <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
              </ol>
                  Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie betreffenden personenbezogenen Daten in ein Drittland oder an eine internationale Organisation übermittelt werden. In diesem Zusammenhang können Sie verlangen, über die geeigneten Garantien gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden.
              <li>Recht auf Berichtigung<br />
                  Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.

              </li>
              <li>
                    Recht auf Einschränkung der Verarbeitung: <br />
                    Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:

                <ol>
                  <li>wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;</li>
                  <li>die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;</li>
                  <li>der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder</li>
                  <li>wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.</li>
                </ol>
                    Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.
                Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen eingeschränkt, werden Sie von dem Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben wird.

              </li>
              <li>
                    Recht auf Löschung:
                <ul>
                  <li>Löschungspflicht:<br />
                        Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:</li>
                  <ol>
                    <li>Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
                    <li>Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                    <li>Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein. </li>
                    <li>Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet. </li>
                    <li>Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt. </li>
                    <li>Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.</li>
                  </ol>
                  <li>Information an Dritte<br />
                       Hat der Verantwortliche die Sie betreffenden personenbezogenen Daten öffentlich gemacht und ist er gem. Art. 17 Abs. 1 DSGVO zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie als betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt haben.
                  </li>
                  <li>Ausnahmen<br />
                       Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist
                    <ol>
                      <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
                      <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
                      <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;</li>
                      <li>für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder</li>
                      <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>Recht auf Unterrichtung: <br />Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden.
                Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über diese Empfänger unterrichtet zu werden.
              </li>
              <li>Recht auf Datenübertragbarkeit:<br />Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Außerdem haben Sie das Recht diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern
                <ol>
                  <li>die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht und</li>
                  <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
                </ol>
                   In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass die Sie betreffenden personenbezogenen Daten direkt von einem Verantwortlichen einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Freiheiten und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.
                 Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung personenbezogener Daten, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.

              </li>
              <li>Widerspruchsrecht:<br />Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
                Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die Sie betreffenden personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
                Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG – Ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.
              </li>
              <li>Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung:<br />
                  Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
              </li>
              <li>Automatisierte Entscheidung im Einzelfall einschließlich Profiling:<br />
                    Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt.

                Dies gilt nicht, wenn die Entscheidung:
                <ol>
                  <li>für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und dem Verantwortlichen erforderlich ist,</li>
                  <li>aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen enthalten oder</li>
                  <li>mit Ihrer ausdrücklichen Einwilligung erfolgt.</li>
                </ol>Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder g gilt und angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten Interessen getroffen wurden.
                    Hinsichtlich der in (1) und (3) genannten Fälle trifft der Verantwortliche angemessene Maßnahmen, um die Rechte und Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.

              </li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde:<br />
                  Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                  Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Datenschutzerklaerung;