import Image from 'next/image';
import Link from 'next/link';

export default function Vita() {
    return (
        <>
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
                            Impressum
                        </h2>
                    </div>
                    <p className="font-sans text-md tracking-wide">
                        <br />
                        <br />
                        Robert Julian Kratz
                        <br /> Krappmühlstr. 30
                        <br /> 68165 Mahheim
                        <br />
                        Germany
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2">
                        Kontakt
                    </h3>
                    <p className="font-sans text-md tracking-wide">
                        Phone: +49 157 535 10 535 (Kein Support)
                        <br />
                        E-Mail: contact@rjks.us
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2">
                        Haftung für Links
                    </h3>
                    <p className="font-sans text-md tracking-wide">
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverstößen
                        werden wir derartige Links umgehend entfernen.
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl uppercase font-bold text-center text-black pt-2">
                        Copyright
                    </h3>
                    <p className="font-sans text-md tracking-wide">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                        nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                        als solche gekennzeichnet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam
                        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Inhalte umgehend entfernen.
                        <br />
                        <br />
                        <b>Stand 22. Dezember 2023</b>
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
