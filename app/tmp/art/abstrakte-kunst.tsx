import Image from 'next/image';
import Link from 'next/link';

export default function Vita() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row justify-between items-start h-[85vh]">
                <div className="w-full md:w-1/2 flex justify-center items-center h-full bg-[#E2DEDB] py-8">
                    <div className="flex flex-col justify-start items-start space-y-6 font-normal max-w-5xl w-full md:w-auto px-6 py-4">
                        <h2 className="font-serif text-md md:text-xl uppercase font-normal text-center text-black">
                            Ernst Jürgen Kratz
                        </h2>
                        <div className="space-y-2">
                            <div className="flex justify-start items-center space-x-4">
                                <h2 className="font-serif text-4xl md:text-5xl uppercase font-bold text-left text-black">
                                    Abstrakte
                                    <br /> Werke
                                </h2>
                            </div>
                            <p className="font-sans font-light text-sm tracking-wide max-w-xs">
                                Formen und Farben, die sich in ihrer Vielfalt und Kombination zu einem harmonischen
                                Ganzen
                            </p>
                        </div>
                        <div className="px-4 py-3 text-md rounded-full bg-black cursor-pointer">
                            <p className="font-light text-sm text-white">Abstrakte Kunst</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#fcfeff] h-full w-full md:w-1/2 flex justify-center items-center">
                    <Image
                        src={'/images/abstrakt/diptychon_mixed_medium.jpg'}
                        alt="Ernst Jürgen Kratz"
                        width={512}
                        height={512}
                        className="h-full"
                    />
                </div>
            </div>
            <div className="w-screen p-4 bg-[#EEEAE4] h-screen flex justify-evenly items-center">
                <div className="flex flex-col items-end">
                    <Image
                        src={'/images/abstrakt/Suprematische_Form1.jpg'}
                        alt="Ernst Jürgen Kratz"
                        width={512}
                        height={512}
                        className="rounded-fulls max-w-sm"
                    />
                    <div className="flex justify-end items-center">
                        <p className="font-light text-sm text-black px-1 py-2">Suprematische Form (120 x 80cm)</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <Image
                        src={'/images/abstrakt/Suprematische_Form2.jpg'}
                        alt="Ernst Jürgen Kratz"
                        width={512}
                        height={512}
                        className="rounded-fulls max-w-sm"
                    />
                    <div className="flex justify-end items-center">
                        <p className="font-light text-sm text-black px-1 py-2">Suprematische Form (100cm x 80cm)</p>
                    </div>
                </div>
            </div>
            <div className="w-screen p-4 bg-[#EEEAE4] h-screen flex justify-evenly items-center">
                <div className="flex flex-col items-end">
                    <Image
                        src={'/images/abstrakt/Suprematische_Form3.jpg'}
                        alt="Ernst Jürgen Kratz"
                        width={512}
                        height={512}
                        className="rounded-fulls max-w-sm"
                    />
                    <div className="flex justify-end items-center">
                        <p className="font-light text-sm text-black px-1 py-2">Suprematische Form (100cm x 70cm)</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <Image
                        src={'/images/abstrakt/Suprematische_Form4.jpg'}
                        alt="Ernst Jürgen Kratz"
                        width={512}
                        height={512}
                        className="rounded-fulls max-w-sm"
                    />
                    <div className="flex justify-end items-center">
                        <p className="font-light text-sm text-black px-1 py-2">Suprematische Form (80 x 100cm)</p>
                    </div>
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
