import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

export default function Events() {
    return (
        <>
            <NextSeo
                title="Ausstellungen"
                description="Ernst Jürgen Kratz, geboren 1935 in Düsseldorf, ist ein vielseitiger Künstler, der sich seit 2000 der Kunst widmet. Besonders bekannt ist er für seine abstrakten Werke und die Verwendung von Rosttechniken auf verschiedenen Medien."
                openGraph={{
                    title: 'Ernst Jürgen Kratz - kratz-art.de',
                    description:
                        'Ernst Jürgen Kratz, geboren 1935 in Düsseldorf, ist ein vielseitiger Künstler, der sich seit 2000 der Kunst widmet. Besonders bekannt ist er für seine abstrakten Werke und die Verwendung von Rosttechniken auf verschiedenen Medien.',
                    images: [{ url: '/images/ernst_juergen_kratz_portrait.jpg' }],
                }}
            />
            <div className="flex flex-col items-center bg-[#EEEAE4] min-h-screen">
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
                        <h2 className="font-serif text-3xl md:text-5xl uppercase font-bold text-center text-black p-2">
                            Ausstellungen
                        </h2>
                    </div>
                </div>
                <div className="w-full p-4 md:p-6 bg-[#E2DEDB] flex justify-center items-center max-w-5xl">
                    <p className="font-sans text-md tracking-wide">
                        Ernst Jürgen Kratz war im Berufsleben Richter und als solcher neben der Rechtsprechung mit
                        vielen Aufgaben in der Justizverwaltung betraut, FERNER mit der Ausbildung und Prüfung von
                        Juristen und mit standespolitischen Ämtern. Seit frühem Jugendalter hat er gemalt. An seinem
                        Wohnsitz beteiligt er sich an den jährlichen Gmeinschaftsausstellungen der &lsquo;Meerbuscher
                        Künstler&rsquo;.
                        <br />
                        <br />
                        Seine erste Einzelausstellung fand im Frühjahr 1999 mit einer Einführung des damaligen
                        Präsidenten des Oberlandesgerichts Köln Dr. Armin Lünterbusch in den Räumen des
                        Gustav-Heinemann-Hauses der Justizakademie des Landes Nordrhein-Westfalen statt. Zu der
                        Ausstellung wurde von dem Leiter der Akademie Georg Steffens wie folgt eingeladen:
                        <br />
                        <br />
                        „Wir zeigen Ihnen einen Ausschnitt aus der vielseitigen künstlerischen Arbeit eines Richters,
                        des Vizepräsidenten des Oberlandesgerichts Düsseldorf. In die Ausstellung wird der Präsident des
                        Oberlandesgerichts Köln einführen.
                        <br />
                        <br />
                        Vizepräsident Ernst Jürgen Kratz kommt aus einer Familie mit musikalischen Begabungen. Er selbst
                        hat seit jungen Jahren fortlaufend mit künstlerischem Schaffen auf dem Gebiet der darstellenden
                        Kunst einen Ausgleich zur beruflichen Arbeit gesucht und dabei auch viel Kontakt zu Künstlern
                        gefunden, die ihn bestärkt und gefördert haben. Nach und nach ist ein umfangreiches Werk
                        entstanden, das im wesentlichen als privater Bereich nur im Freundeskreis bekannt geworden ist.
                        Aus der zeitlichen Begrenzung auf die Freizeit neben dem Beruf hat er in erster Linie gezeichnet
                        und aquarelliert. Es sind jedoch auch Ölbilder entstanden, daneben Objekte aus einer Vielzahl
                        von Werkstoffen. Gegenständliche und abstrakte Arbeiten gehen Hand in Hand. Die Motive der
                        gegenständlichen Arbeiten entstammen dem Umfeld, u.a. dem Beruf, daneben aber auch der
                        Literatur.
                        <br />
                        <br />
                        Die Ausstellung zeigt überwiegend abstrakte Aquarelle und sogenannte Rostbilder aus jüngerer
                        Zeit. Daneben werden Landschaften in Öl und Aquarelle gezeigt, jedoch auch thematische Arbeiten
                        zu biblischen Themen als Spachtelarbeiten in Zement und illustrierende Arbeiten zu Texten von
                        Franz Kafka und Heinrich Heine, schließlich eine Serie justizkritischer Karikaturen zum Thema
                        „Der Fall“.
                        <br />
                        <br />
                        Herr Kratz verlässt mit der Ausstellung zum ersten Mal das schützende Umfeld seines Familien-
                        und Freundeskreises. Mit den weiträumigen hellen Fluren und Galerien der Justizakademie
                        Recklinghausen haben wir ihm ein verlockendes Angebot gemacht, seine Arbeiten der Öffentlichkeit
                        zu zeigen.“
                        <br />
                        <br />
                        Noch vor seiner Pensionierung im Oktober 2000 folgte auf Veranlassung der Kunstmanagerin Jutta
                        Westhoff eine am 6. 9. 2000 eröffnete Ausstellung „Klang der Farben“ im Technologie-Zentrum
                        Paderborn, erneut mit einer Einführung durch den Präsidenten des Oberlandesgerichts Köln Dr.
                        Armin Lünterbusch. Die Einladung beschreibt Kratz wie folgt:
                        <br />
                        <br />
                        „Seine Kindheit und Jugend waren von Krieg und Nachkriegszeit geprägt, daneben aber auch durch
                        viele, zum Teil über Jahre dauernde Auslandsaufenthalte in der Schweiz, in den vereinigten
                        Staaten und in Dänemark, ferner durch ausgedehnte Reisen durch fast alle Länder des westlichen
                        Europas. Neben dem Jurastudium und dem Beruf ist er von der frühen Jugend an seiner Neigung zur
                        Malerei und zur Erkundung immer wieder neuer Techniken und neuen Materials treu geblieben. Es
                        entstand so ein umfangreiches Werk, das im In- und Ausland Verbreitung gefunden hat, aber erst
                        1999 in einer Retrospektive in der Justizakademie in Recklinghausen der Öffentlichkeit
                        vorgestellt worden ist.“
                        <br />
                        <br />
                        Im November 2001 fand auf Einladung des damaligen Vizepräsidenten des Landtags Jan Söffing die
                        Ausstellung „Rostbilder“ mit vor allem großen Formaten im A-Kern des Landtagsgebäudes statt.
                        <br />
                        <br />
                        Dem folgten neben den jährlichen Ausstellungen der Meerbuscher Künstler weitere
                        Gemeinschaftsausstellungen bei Galeristen in Düsseldorf und Meerbusch, ferner
                        Einzelausstellungen im Finanzgericht Düsseldorf, in den Landgerichten Essen und Düsseldorf und
                        in den Oberlandesgerichten Düsseldorf und Köln.
                    </p>
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
