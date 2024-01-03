import Image from 'next/image';
import Link from 'next/link';

export default function Vita() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/2 flex justify-center items-start h-[85vh] md:h-screen bg-[#EEEAE4] min-h-[512px]">
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
                                Kontakt
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="bg-[#E2DEDB] md:h-screen w-full md:w-1/2 flex justify-center items-center">
                    <Image
                        src={'/images/rost/splash.jpg'}
                        alt="Ernst Jürgen Kratz"
                        width={512}
                        height={512}
                        className="rounded-fulls"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center p-4 space-x-4 bg-[#1C1918]">
                <Link href="/impressum" className="font-light text-[#E9E6E0]">
                    Impressum
                </Link>
                <Link href="/datenschutz" className="font-light text-[#E9E6E0]">
                    Datenschutz
                </Link>
            </div>
        </>
    );
}
