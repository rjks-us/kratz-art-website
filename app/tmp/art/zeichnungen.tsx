import Image from 'next/image';
import Link from 'next/link';

export default function Events() {
    return (
        <>
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
                            Zeichnungen
                        </h2>
                    </div>
                    <p className="font-sans text-sm tracking-wide">Werke / Zeichnungen</p>
                </div>
                <div className="w-full p-4 bg-[#E2DEDB]">
                    <p className="font-light text-lg md:text-xl text-black">Ausstellungen</p>
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
