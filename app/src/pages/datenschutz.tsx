import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

export default function Vita() {
    return (
        <>
            <NextSeo title="Datenschutz" description="Datenschutz" nofollow={true} noindex={true} />
            <div className="flex flex-col items-center bg-[#EEEAE4]">
                <div className="flex flex-col justify-start items-start space-y-4 font-normal max-w-5xl w-full px-6 py-8">
                    <h2 className="font-serif text-md md:text-xl uppercase font-normal text-center text-black p-2">
                        Ernst Jürgen Kratz
                    </h2>
                    <div className="flex justify-start items-center space-x-4">
                        <Link href="/">
                            <Image
                                src={'/icons/arrow_down.svg'}
                                alt="arrow down"
                                width={48}
                                height={48}
                                className="rotate-90 p-2 hover:-translate-x-2 transition cursor-pointer"
                            />
                        </Link>
                        <h2 className="font-serif text-4xl md:text-5xl uppercase font-bold text-center text-black p-2">
                            Datenschutz
                        </h2>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2">
                        Inhaltsübersicht
                    </h2>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <a className="index-link" href="#m3">
                                Verantwortlicher
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#mOverview">
                                Übersicht der Verarbeitungen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m2427">
                                Maßgebliche Rechtsgrundlagen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m27">
                                Sicherheitsmaßnahmen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m25">
                                Übermittlung von personenbezogenen Daten
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m24">
                                Internationale Datentransfers
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m10">
                                Rechte der betroffenen Personen
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m134">
                                Einsatz von Cookies
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m225">
                                Bereitstellung des Onlineangebotes und Webhosting
                            </a>
                        </li>
                        <li>
                            <a className="index-link" href="#m182">
                                Kontakt- und Anfragenverwaltung
                            </a>
                        </li>
                    </ul>
                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m3">
                        Verantwortlicher
                    </h2>
                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="mOverview">
                        Übersicht der Verarbeitungen
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
                        Verarbeitung zusammen und verweist auf die betroffenen Personen.
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2">
                        Arten der verarbeiteten Daten
                    </h3>
                    <ul className="font-sans text-md tracking-wide">
                        <li>Kontaktdaten.</li>
                        <li>Inhaltsdaten.</li>
                        <li>Nutzungsdaten.</li>
                        <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                    </ul>
                    <h3 className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2">
                        Kategorien betroffener Personen
                    </h3>
                    <ul className="font-sans text-md tracking-wide">
                        <li>Kommunikationspartner.</li>
                        <li>Nutzer.</li>
                    </ul>
                    <h3 className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2">
                        Zwecke der Verarbeitung
                    </h3>
                    <ul className="font-sans text-md tracking-wide">
                        <li>Kontaktanfragen und Kommunikation.</li>
                        <li>Sicherheitsmaßnahmen.</li>
                        <li>Verwaltung und Beantwortung von Anfragen.</li>
                        <li>Feedback.</li>
                        <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                        <li>Informationstechnische Infrastruktur.</li>
                    </ul>
                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m2427">
                        Maßgebliche Rechtsgrundlagen
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im Folgenden erhalten Sie eine
                        Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten
                        verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
                        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im
                        Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
                        Datenschutzerklärung mit.
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat
                            ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen
                            spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                        </li>
                        <li>
                            <strong>
                                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
                            </strong>{' '}
                            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die
                            betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die
                            auf Anfrage der betroffenen Person erfolgen.
                        </li>
                        <li>
                            <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - Die
                            Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines
                            Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der
                            betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                        </li>
                    </ul>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Nationale Datenschutzregelungen in Deutschland: </strong>Zusätzlich zu den
                        Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland.
                        Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
                        Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere
                        Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
                        Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke
                        und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich
                        Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung
                        gelangen.
                    </p>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>Diese Datenschutzhinweise dienen
                        sowohl der Informationserteilung nach dem schweizerischen Bundesgesetz über den Datenschutz
                        (Schweizer DSG) als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten
                        wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die
                        Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten
                        Begriffe „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und "besonders
                        schützenswerte Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von
                        „personenbezogenen Daten" sowie "berechtigtes Interesse" und "besondere Kategorien von Daten"
                        verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des
                        Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
                    </p>

                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m27">
                        Sicherheitsmaßnahmen
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der
                        Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der
                        Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
                        Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und
                        organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                    </p>
                    <p>
                        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
                        Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten
                        als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der
                        Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine
                        Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der
                        Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei
                        der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des
                        Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
                    </p>

                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m25">
                        Übermittlung von personenbezogenen Daten
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an
                        andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen
                        übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können
                        z. B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in
                        eine Webseite eingebunden werden, gehören. In solchen Fällen beachten wir die gesetzlichen
                        Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz
                        Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
                    </p>

                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m24">
                        Internationale Datentransfers
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        Datenverarbeitung in Drittländern: Sofern wir Daten in einem Drittland (d. h., außerhalb der
                        Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die
                        Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw.
                        Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies
                        nur im Einklang mit den gesetzlichen Vorgaben. Sofern das Datenschutzniveau in dem Drittland
                        mittels eines Angemessenheitsbeschlusses anerkannt wurde (Art. 45 DSGVO), dient dieser als
                        Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das
                        Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art.
                        46 Abs. 2 lit. c) DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich
                        erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO). Im Übrigen teilen wir Ihnen die Grundlagen
                        der Drittlandübermittlung bei den einzelnen Anbietern aus dem Drittland mit, wobei die
                        Angemessenheitsbeschlüsse als Grundlagen vorrangig gelten. Informationen zu Drittlandtransfers
                        und vorliegenden Angemessenheitsbeschlüssen können dem Informationsangebot der EU-Kommission
                        entnommen werden:{' '}
                        <a
                            href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                            target="_blank">
                            https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de.
                        </a>
                    </p>
                    <p className="font-sans text-md tracking-wide">
                        EU-US Trans-Atlantic Data Privacy Framework: Im Rahmen des sogenannten „Data Privacy Framework"
                        (DPF) hat die EU-Kommission das Datenschutzniveau ebenfalls für bestimmte Unternehmen aus den
                        USA im Rahmen der Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste der
                        zertifizierten Unternehmen als auch weitere Informationen zu dem DPF können Sie der Webseite des
                        Handelsministeriums der USA unter{' '}
                        <a href="https://www.dataprivacyframework.gov/" target="_blank">
                            https://www.dataprivacyframework.gov/
                        </a>{' '}
                        (in Englisch) entnehmen. Wir informieren Sie im Rahmen der Datenschutzhinweise, welche von uns
                        eingesetzten Diensteanbieter unter dem Data Privacy Framework zertifiziert sind.
                    </p>

                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m10">
                        Rechte der betroffenen Personen
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO
                        verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>
                                Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                                Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
                                personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                                Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes
                                Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
                                Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
                                Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung
                                einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
                                Verbindung steht.
                            </strong>
                        </li>
                        <li>
                            <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte
                            Einwilligungen jederzeit zu widerrufen.
                        </li>
                        <li>
                            <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen,
                            ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere
                            Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                        </li>
                        <li>
                            <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben
                            das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie
                            betreffenden unrichtigen Daten zu verlangen.
                        </li>
                        <li>
                            <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach
                            Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten
                            unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
                            Einschränkung der Verarbeitung der Daten zu verlangen.
                        </li>
                        <li>
                            <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten,
                            die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem
                            strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an
                            einen anderen Verantwortlichen zu fordern.
                        </li>
                        <li>
                            <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen
                            verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
                            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts,
                            ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind,
                            dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der
                            DSGVO verstößt.
                        </li>
                    </ul>

                    <h2 id="m134">Einsatz von Cookies</h2>
                    <p className="font-sans text-md tracking-wide">
                        Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die Informationen auf
                        Endgeräten speichern und Informationen aus den Endgeräten auslesen. z. B. um den Login-Status in
                        einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder
                        verwendete Funktionen eines Onlineangebotes speichern. Cookies können ferner zu
                        unterschiedlichen Zwecken eingesetzt werden, z. B. zu Zwecken der Funktionsfähigkeit, Sicherheit
                        und Komfort von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme.{' '}
                    </p>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im Einklang mit den gesetzlichen
                        Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer
                        wenn diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig,
                        wenn das Speichern und das Auslesen der Informationen, also auch von Cookies, unbedingt
                        erforderlich sind, um dem den Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst
                        (also unser Onlineangebot) zur Verfügung zu stellen. Zu den unbedingt erforderlichen Cookies
                        gehören in der Regel Cookies mit Funktionen, die der Anzeige und Lauffähigkeit des
                        Onlineangebotes , dem Lastausgleich, der Sicherheit, der Speicherung der Präferenzen und
                        Auswahlmöglichkeiten der Nutzer oder ähnlichen mit der Bereitstellung der Haupt- und
                        Nebenfunktionen des von den Nutzern angeforderten Onlineangebotes zusammenhängenden Zwecken
                        dienen. Die widerrufliche Einwilligung wird gegenüber den Nutzern deutlich kommuniziert und
                        enthält die Informationen zu der jeweiligen Cookie-Nutzung.
                    </p>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Auf welcher
                        datenschutzrechtlichen Rechtsgrundlage wir die personenbezogenen Daten der Nutzer mit Hilfe von
                        Cookies verarbeiten, hängt davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die Nutzer
                        einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung.
                        Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer
                        berechtigten Interessen (z. B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes
                        und Verbesserung seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung unserer
                        vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies erforderlich ist, um unsere
                        vertraglichen Verpflichtungen zu erfüllen. Zu welchen Zwecken die Cookies von uns verarbeitet
                        werden, darüber klären wir im Laufe dieser Datenschutzerklärung oder im Rahmen von unseren
                        Einwilligungs- und Verarbeitungsprozessen auf.
                    </p>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden die folgenden Arten von
                        Cookies unterschieden:
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong> Temporäre Cookies
                            werden spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und sein
                            Endgerät (z. B. Browser oder mobile Applikation) geschlossen hat.
                        </li>
                        <li>
                            <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des
                            Endgerätes gespeichert. So können beispielsweise der Login-Status gespeichert oder
                            bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht.
                            Ebenso können die mit Hilfe von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung
                            verwendet werden. Sofern wir Nutzern keine expliziten Angaben zur Art und Speicherdauer von
                            Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten Nutzer davon
                            ausgehen, dass Cookies permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.
                        </li>
                    </ul>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (sog. "Opt-Out"): </strong>Nutzer
                        können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und der Verarbeitung
                        entsprechend den gesetzlichen Vorgaben widersprechen. Hierzu können Nutzer unter anderem die
                        Verwendung von Cookies in den Einstellungen ihres Browsers einschränken (wobei dadurch auch die
                        Funktionalität unseres Onlineangebotes eingeschränkt sein kann). Ein Widerspruch gegen die
                        Verwendung von Cookies zu Online-Marketing-Zwecken kann auch über die Websites{' '}
                        <a href="https://optout.aboutads.info/" target="_new">
                            https://optout.aboutads.info
                        </a>{' '}
                        und{' '}
                        <a href="https://www.youronlinechoices.com/" target="_new">
                            https://www.youronlinechoices.com/
                        </a>{' '}
                        erklärt werden.
                    </p>
                    <ul className="m-elements">
                        <li className="font-sans text-md tracking-wide">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                            DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>Wir setzen
                            ein Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen
                            der Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des
                            Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter eingeholt
                            sowie von den Nutzern verwaltet und widerrufen werden können. Hierbei wird die
                            Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut wiederholen zu müssen und
                            die Einwilligung entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die
                            Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw.
                            mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw.
                            dessen Gerät zuordnen zu können. Vorbehaltlich individueller Angaben zu den Anbietern von
                            Cookie-Management-Diensten, gelten die folgenden Hinweise: Die Dauer der Speicherung der
                            Einwilligung kann bis zu zwei Jahren betragen. Hierbei wird ein pseudonymer
                            Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite
                            der Einwilligung (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem
                            Browser, System und verwendeten Endgerät gespeichert;{' '}
                            <span className="">
                                <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
                            </span>
                        </li>
                    </ul>
                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m225">
                        Bereitstellung des Onlineangebotes und Webhosting
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu
                        können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die
                        Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu
                        übermitteln.
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. besuchte Webseiten, Interesse
                            an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z. .B.
                            IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Nutzer (z. .B. Webseitenbesucher, Nutzer von
                            Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                            Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von
                            Informationssystemen und technischen Geräten (Computer, Server etc.).).
                            Sicherheitsmaßnahmen.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                            DSGVO).
                        </li>
                    </ul>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff auf unser
                            Onlineangebot wird in Form von so genannten "Server-Logfiles" protokolliert. Zu den
                            Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
                            Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp
                            nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und
                            im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum
                            einen zu Zwecken der Sicherheit eingesetzt werden, z. B., um eine Überlastung der Server zu
                            vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken)
                            und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen;{' '}
                            <span className="">
                                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                                DSGVO).{' '}
                            </span>
                            <strong>Löschung von Daten:</strong> Logfile-Informationen werden für die Dauer von maximal
                            30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere
                            Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des
                            jeweiligen Vorfalls von der Löschung ausgenommen.
                        </li>
                    </ul>
                    <h2
                        className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2"
                        id="m182">
                        Kontakt- und Anfragenverwaltung
                    </h2>
                    <p className="font-sans text-md tracking-wide">
                        Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via
                        soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben
                        der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und
                        etwaiger angefragter Maßnahmen erforderlich ist.
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. E-Mail, Telefonnummern);
                            Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten,
                            Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z..B.
                            IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                        </li>
                        <li>
                            <strong>Betroffene Personen:</strong> Kommunikationspartner.
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und
                            Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular).
                            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
                        </li>
                        <li className="">
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                            DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                        </li>
                    </ul>
                    <p className="font-sans text-md tracking-wide">
                        <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
                    </p>
                    <ul className="font-sans text-md tracking-wide">
                        <li>
                            <strong>Kontaktformular: </strong>Wenn Nutzer über unser Kontaktformular, E-Mail oder andere
                            Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang
                            mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens;{' '}
                            <span className="">
                                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art.
                                6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center p-4 space-x-4 bg-[#1C1918]">
                <div>
                    <p className="font-light text-xs text-[#E9E6E0]">©{new Date().getFullYear()} Ernst Jürgen Kratz</p>
                </div>
                <div className="space-x-4">
                    <Link href="/impressum" className="font-light text-xs text-[#E9E6E0]">
                        Impressum
                    </Link>
                    <Link href="/datenschutz" className="font-light text-xs text-[#E9E6E0]">
                        Datenschutz
                    </Link>
                </div>
            </div>
        </>
    );
}
