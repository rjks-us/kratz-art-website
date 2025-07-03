import FloatingActionButton from '@/components/buttons/FloatingActionButton';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';

const IMAGES = [
    '/images/rost/glocke.jpeg',
    '/images/rost/kartenspiel.jpeg',
    '/images/rost/loop.jpeg',
    '/images/rost/milchstrasse.jpeg',
    '/images/rost/narben.jpeg',
    '/images/rost/schnur.jpeg',
    '/images/rost/sonne.jpeg',
    '/images/rost/splash.jpeg',
    '/images/rost/taschentuch.jpeg',
    '/images/rost/tor.jpeg',
    '/images/rost/universum.jpeg',
    '/images/rost/zaun.jpeg',
    '/images/rost/zelt.jpeg',
    '/images/rost/zwei_freunde.jpeg',
    '/images/aquarell/teppich.jpeg',
    '/images/aquarell/sonnenblumen.jpeg',
    '/images/aquarell/quallen.jpeg',
    '/images/aquarell/menschliches_herz.jpeg',
    '/images/aquarell/feuerwerk.jpeg',
    '/images/aquarell/bomben.jpeg',
];

export default function Home() {
    const Title = ({ text, link }: { text: string; link?: string }) => (
        <div className="transform hover:translate-y-1 hover:translate-x-1">
            <Link
                href={link ? link : '/'}
                className="font-serif text-4xl md:text-5xl uppercase font-bold text-center text-black p-2 hover:text-gray-800 transition cursor-pointer">
                {text}
            </Link>
        </div>
    );

    let randomizeImages = () => {
        let images = [...IMAGES];
        let randomizedImages = [];
        while (images.length > 0) {
            let randomIndex = Math.floor(Math.random() * images.length);
            randomizedImages.push(images[randomIndex]);
            images.splice(randomIndex, 1);
        }
        return randomizedImages;
    };

    return (
        <>
            <NextSeo
                title="Ernst Jürgen Kratz - kratz-art.de"
                description="Ernst Jürgen Kratz - Werke, Ausstellungen, Kontakt, Vita"
                openGraph={{
                    title: 'Ernst Jürgen Kratz - kratz-art.de',
                    description:
                        'Ernst Jürgen Kratz, geboren 1935 in Düsseldorf, war Richter und Vizepräsident des Oberlandesgerichts Düsseldorf. Seit 2000 widmet er sich der Kunst, inspiriert von seiner Kindheit und modernen Kunsttheorien.',
                    images: [{ url: '/images/ernst_juergen_kratz_portrait.jpg' }],
                }}
            />
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/2 flex justify-center items-center h-[85vh] md:h-screen bg-[#EEEAE4] min-h-[512px]">
                    <div className="flex flex-col items-center space-y-4">
                        <h2 className="font-serif text-md md:text-xl uppercase font-normal text-center text-black p-2">
                            Ernst Jürgen Kratz
                        </h2>
                        <div className="border border-black w-8"></div>
                        <Title text="Werke" link="/vernissage-2025" />
                        <Title text="Ausstellungen" link="/ausstellungen" />
                        <Title text="Kontakt" link="/kontakt" />
                        <Title text="Vita" link="/vita" />
                        <div className="border border-black w-8"></div>
                        <Link
                            href={'/vernissage-2025'}
                            className="px-6 py-3 text-md rounded-full bg-black cursor-pointer transform hover:translate-y-1 transition">
                            <p className="font-sans text-xs tracking-wide text-white">Vernissage 2025</p>
                        </Link>
                        {/*<Link
                            href={'mailto:robert.kratz@rjks.us'}
                            className="px-4 py-3 text-md rounded-full bg-gray-700 cursor-pointer transform hover:translate-y-1 transition">
                            <p className="font-sans text-xs tracking-wide text-white">Drucke auf Aluminium</p>
                        </Link>*/}
                    </div>
                </div>
                <div className="bg-[#E2DEDB] md:h-screen w-full md:w-1/2 cursor-pointer">
                    <ScrollingImageBand images={randomizeImages()} />
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

const ScrollingImageBand = ({ images }: { images: string[] }) => {
    const [height, setHeight] = useState<number>(0);
    const [scrollSclown, setScrollSclown] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    //auto scroll down and prevent user scrolling in ref. also start from the beginning when reaching the end

    useEffect(() => {
        const el = ref.current;
        if (el) {
            setHeight(el.scrollHeight);

            let scroll = 0;
            const interval = setInterval(() => {
                scroll += scrollSclown ? 1 : 1;
                if (scroll >= el.scrollHeight) {
                    scroll = 0;
                }
                el.scrollTo(0, scroll);
            }, 10);

            el.addEventListener('scroll', () => {
                el.scrollTo(0, scroll);
            });

            return () => {
                clearInterval(interval);
            };
        }
    }, [ref]);

    return (
        <div
            ref={ref}
            onMouseEnter={() => setScrollSclown(true)}
            onMouseLeave={() => setScrollSclown(false)}
            onMouseMove={() => setScrollSclown(true)}
            className="h-screen overflow-y-hidden w-full overflow-hidden space-y-32 p-32">
            {images.map((src, index) => (
                <div key={index} className={`flex items-center ${index % 2 ? 'justify-end' : 'justify-start'}`}>
                    <Image
                        src={src}
                        alt={index.toString()}
                        draggable={false}
                        width={512}
                        height={512}
                        className={`scroll 1s linear ${index * 1.5}s infinite max-w-sm`}
                    />
                </div>
            ))}
        </div>
    );
};