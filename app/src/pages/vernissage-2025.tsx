import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';

export interface Artwork {
    id: number;
    name: string;
    type: 'original' | 'copy';
    size: string;
    price: {
        original: number | null;
        copy: number | null;
    };
    description: string;
    year: string | null;
    thumbnail: string;
    images: string[];
}

export const ARTWORKS: Artwork[] = [
    {
        id: 30,
        name: 'Rost Bild 30',
        type: 'original',
        size: '90x180 cm (Rahmen)',
        price: { original: 3000, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/30.webp',
        images: []
    },
    {
        id: 29,
        name: 'Aquarell Bild 29',
        type: 'original',
        size: '100x70 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2012',
        thumbnail: '/images/vernissage-2025/29.webp',
        images: []
    },
    {
        id: 28,
        name: 'Aquarell Bild 28',
        type: 'original',
        size: '100x70 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2014',
        thumbnail: '/images/vernissage-2025/28.webp',
        images: []
    },
    {
        id: 8,
        name: 'Rost Bild 8',
        type: 'original',
        size: '100x70 cm (Rahmen)',
        price: { original: 2900, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/08.webp',
        images: []
    },
    {
        id: 7,
        name: 'Rost Bild 7',
        type: 'original',
        size: '100x70 cm (Rahmen)',
        price: { original: 3000, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/007.webp',
        images: []
    },

    {
        id: 42,
        name: 'Aquarell Bild 42',
        type: 'original',
        size: '65x55 cm (Rahmen)',
        price: { original: 700, copy: null },
        description: '',
        year: '2020',
        thumbnail: '/images/vernissage-2025/042.webp',
        images: []
    },
    {
        id: 41,
        name: 'Aquarell Bild 41',
        type: 'original',
        size: '65x55 cm (Rahmen)',
        price: { original: 700, copy: null },
        description: '',
        year: '2020',
        thumbnail: '/images/vernissage-2025/041.webp',
        images: []
    },
    {
        id: 40,
        name: 'Aquarell Bild 40',
        type: 'original',
        size: '65x55 cm (Rahmen)',
        price: { original: 700, copy: null },
        description: '',
        year: '2020',
        thumbnail: '/images/vernissage-2025/040.webp',
        images: []
    },
    {
        id: 20,
        name: 'Rost Bild 20',
        type: 'original',
        size: '95x75 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2017',
        thumbnail: '/images/vernissage-2025/20.webp',
        images: []
    },
    {
        id: 19,
        name: 'Rost Bild 19',
        type: 'original',
        size: '95x75 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2008',
        thumbnail: '/images/vernissage-2025/19.webp',
        images: []
    },
    {
        id: 15,
        name: 'Rost Bild 15',
        type: 'original',
        size: '80x120 cm (Rahmen)',
        price: { original: 2900, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/15.webp',
        images: []
    },
    {
        id: 5,
        name: 'Rost Bild 5',
        type: 'original',
        size: '80x120 cm (Rahmen)',
        price: { original: 3000, copy: null },
        description: '',
        year: '2003',
        thumbnail: '/images/vernissage-2025/05.webp',
        images: []
    },
    {
        id: 51,
        name: 'Aquarell Bild 51',
        type: 'original',
        size: '45x50 cm',
        price: { original: 1200, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/51.webp',
        images: []
    },
    {
        id: 50,
        name: 'Aquarell Bild 48',
        type: 'original',
        size: '50x65 cm (Rahmen)',
        price: { original: 1200, copy: null },
        description: '',
        year: '1984',
        thumbnail: '/images/vernissage-2025/50.webp',
        images: []
    },
    {
        id: 49,
        name: 'Aquarell Bild 49',
        type: 'original',
        size: '65x50 cm (Rahmen)',
        price: { original: 1200, copy: null },
        description: '',
        year: '1984',
        thumbnail: '/images/vernissage-2025/049.webp',
        images: []
    },
    {
        id: 48,
        name: 'Aquarell Bild 48',
        type: 'original',
        size: '50x65 cm (Rahmen)',
        price: { original: 1200, copy: null },
        description: '',
        year: '1984',
        thumbnail: '/images/vernissage-2025/048.webp',
        images: []
    },
    {
        id: 47,
        name: 'Aquarell Bild 47',
        type: 'original',
        size: '50x65 cm (Rahmen)',
        price: { original: 1200, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/047.webp',
        images: []
    },
    {
        id: 46,
        name: 'Aquarell Bild 46',
        type: 'original',
        size: '50x65 cm (Rahmen)',
        price: { original: 1200, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/046.webp',
        images: []
    },
    {
        id: 45,
        name: 'Aquarell Bild 45',
        type: 'original',
        size: '80x110 cm (Rahmen)',
        price: { original: 2900, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/045.webp',
        images: []
    },
    {
        id: 44,
        name: 'Aquarell Bild 43',
        type: 'original',
        size: '100x100 cm (Rahmen)',
        price: { original: 3400, copy: null },
        description: '',
        year: '2025',
        thumbnail: '/images/vernissage-2025/044.webp',
        images: []
    },
    {
        id: 43,
        name: 'Aquarell Bild 43',
        type: 'original',
        size: '90x125 cm (Rahmen)',
        price: { original: 3400, copy: null },
        description: '',
        year: '2024',
        thumbnail: '/images/vernissage-2025/043.webp',
        images: []
    },
    {
        id: 39,
        name: 'Aquarell Bild 39',
        type: 'original',
        size: '95x75 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2006',
        thumbnail: '/images/vernissage-2025/39.webp',
        images: []
    },
    {
        id: 38,
        name: 'Aquarell Bild 38',
        type: 'original',
        size: '95x75 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2006',
        thumbnail: '/images/vernissage-2025/038.webp',
        images: []
    },
    {
        id: 37,
        name: 'Rost Bild 36',
        type: 'original',
        size: '85x105 cm (Rahmen)',
        price: { original: 3300, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/037.webp',
        images: []
    },
    {
        id: 36,
        name: 'Rost Bild 36',
        type: 'original',
        size: '145x95 cm (Rahmen)',
        price: { original: 3400, copy: null },
        description: '',
        year: '2003',
        thumbnail: '/images/vernissage-2025/36.webp',
        images: []
    },
    {
        id: 35,
        name: 'Aquarell Bild 35',
        type: 'original',
        size: '55x45 cm (Rahmen)',
        price: { original: 650, copy: null },
        description: '',
        year: '2020',
        thumbnail: '/images/vernissage-2025/035.webp',
        images: []
    },
    {
        id: 34,
        name: 'Aquarell Bild 34',
        type: 'original',
        size: '55x45 cm (Rahmen)',
        price: { original: 650, copy: null },
        description: '',
        year: '2017',
        thumbnail: '/images/vernissage-2025/034.webp',
        images: []
    },
    {
        id: 33,
        name: 'Aquarell Bild 33',
        type: 'original',
        size: '55x45 cm (Rahmen)',
        price: { original: 650, copy: null },
        description: '',
        year: '2013',
        thumbnail: '/images/vernissage-2025/033.webp',
        images: []
    },
    {
        id: 32,
        name: 'Aquarell Bild 32',
        type: 'original',
        size: '55x45 cm (Rahmen)',
        price: { original: 650, copy: null },
        description: '',
        year: '2002',
        thumbnail: '/images/vernissage-2025/032.webp',
        images: []
    },
    {
        id: 31,
        name: 'Aquarell Bild 31',
        type: 'original',
        size: '55x45 cm (Rahmen)',
        price: { original: 600, copy: null },
        description: '',
        year: '2023',
        thumbnail: '/images/vernissage-2025/031.webp',
        images: []
    },
    {
        id: 27,
        name: 'Aquarell Bild 27',
        type: 'original',
        size: '100x70 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2012',
        thumbnail: '/images/vernissage-2025/027.webp',
        images: []
    },
    {
        id: 26,
        name: 'Aquarell Bild 26',
        type: 'original',
        size: '65x55 cm (Rahmen)',
        price: { original: 700, copy: null },
        description: '',
        year: '2003',
        thumbnail: '/images/vernissage-2025/026.webp',
        images: []
    },
    {
        id: 25,
        name: 'Aquarell Bild 24',
        type: 'original',
        size: '65x55 cm (Rahmen)',
        price: { original: 600, copy: null },
        description: '',
        year: '2020',
        thumbnail: '/images/vernissage-2025/025.webp',
        images: []
    },
    {
        id: 24,
        name: 'Aquarell Bild 24',
        type: 'original',
        size: '65x55 cm (Rahmen)',
        price: { original: 700, copy: null },
        description: '',
        year: '2020',
        thumbnail: '/images/vernissage-2025/024.webp',
        images: []
    },
    {
        id: 23,
        name: 'Aquarell Bild 23',
        type: 'original',
        size: '65x55 cm (Rahmen)',
        price: { original: 700, copy: null },
        description: '',
        year: '2020',
        thumbnail: '/images/vernissage-2025/023.webp',
        images: []
    },
    {
        id: 22,
        name: 'Rost Bild 22',
        type: 'original',
        size: '100x140 cm (Rahmen)',
        price: { original: 3500, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/022.webp',
        images: []
    },
    {
        id: 21,
        name: 'Rost Bild 20',
        type: 'original',
        size: '100x120 cm (Rahmen)',
        price: { original: 3500, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/021.webp',
        images: []
    },
    {
        id: 18,
        name: 'Rost Bild 18',
        type: 'original',
        size: '95x75 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2018',
        thumbnail: '/images/vernissage-2025/018.webp',
        images: []
    },
    {
        id: 17,
        name: 'Rost Bild 17',
        type: 'original',
        size: '95x75 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2006',
        thumbnail: '/images/vernissage-2025/017.webp',
        images: []
    },
    {
        id: 16,
        name: 'Rost Bild 16',
        type: 'original',
        size: '95x75 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2014',
        thumbnail: '/images/vernissage-2025/016.webp',
        images: []
    },
    {
        id: 15,
        name: 'Rost Bild 15',
        type: 'original',
        size: '80x120 cm (Rahmen)',
        price: { original: 2900, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/15.webp',
        images: []
    },
    {
        id: 14,
        name: 'Rost Bild 14',
        type: 'original',
        size: '140x100 cm (Rahmen)',
        price: { original: 3500, copy: null },
        description: '',
        year: '2004',
        thumbnail: '/images/vernissage-2025/14.webp',
        images: []
    },
    {
        id: 13,
        name: 'Rost Bild 13',
        type: 'original',
        size: '140x60 cm (Rahmen)',
        price: { original: 3200, copy: null },
        description: '',
        year: '2025',
        thumbnail: '/images/vernissage-2025/013.webp',
        images: []
    },
    {
        id: 12,
        name: 'Rost Bild 12',
        type: 'original',
        size: '140x100 cm (Rahmen)',
        price: { original: 3500, copy: null },
        description: '',
        year: '2004',
        thumbnail: '/images/vernissage-2025/12.webp',
        images: []
    },
    {
        id: 11,
        name: 'Rost Bild 11',
        type: 'original',
        size: '110x110 cm (Rahmen)',
        price: { original: 3500, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/011.webp',
        images: []
    },
    {
        id: 10,
        name: 'Rost Bild 10',
        type: 'original',
        size: '70x90 cm (Rahmen)',
        price: { original: 2600, copy: null },
        description: '',
        year: '2025',
        thumbnail: '/images/vernissage-2025/010.webp',
        images: []
    },
    {
        id: 9,
        name: 'Rost Bild 9',
        type: 'original',
        size: '75x100 cm (Rahmen)',
        price: { original: 2100, copy: null },
        description: '',
        year: '2015',
        thumbnail: '/images/vernissage-2025/009.webp',
        images: []
    },
    {
        id: 6,
        name: 'Rost Bild 6',
        type: 'original',
        size: '140x85 cm (Rahmen)',
        price: { original: 3000, copy: null },
        description: '',
        year: '2023',
        thumbnail: '/images/vernissage-2025/006.webp',
        images: []
    },
    {
        id: 4,
        name: 'Rost Bild 4',
        type: 'original',
        size: '200x130 cm (Rahmen)',
        price: { original: 4800, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/04.webp',
        images: []
    },
    {
        id: 3,
        name: 'Rost Bild 3',
        type: 'original',
        size: '120x90 cm (Rahmen)',
        price: { original: 2900, copy: null },
        description: '',
        year: '2016',
        thumbnail: '/images/vernissage-2025/003.webp',
        images: []
    },
    {
        id: 2,
        name: 'Rost Bild 2',
        type: 'original',
        size: '120x90 cm (Rahmen)',
        price: { original: 2900, copy: null },
        description: '',
        year: '2019',
        thumbnail: '/images/vernissage-2025/002.webp',
        images: []
    },
    {
        id: 1,
        name: 'Rost Bild 1',
        type: 'original',
        size: '160x100 cm (Rahmen)',
        price: { original: 3800, copy: null },
        description: '',
        year: 'N/A',
        thumbnail: '/images/vernissage-2025/001.webp',
        images: []
    },
    {
        id: 57,
        name: 'Kafka Bild 57',
        type: 'original',
        size: '60x50 cm (Rahmen)',
        price: { original: -1, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/57.webp',
        images: []
    },
    {
        id: 56,
        name: 'Kafka Bild 56',
        type: 'original',
        size: '60x50 cm (Rahmen)',
        price: { original: -1, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/56.webp',
        images: []
    },
    {
        id: 55,
        name: 'Kafka Bild 55',
        type: 'original',
        size: '60x50 cm (Rahmen)',
        price: { original: -1, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/55.webp',
        images: []
    },
    {
        id: 54,
        name: 'Kafka Bild 54',
        type: 'original',
        size: '60x50 cm (Rahmen)',
        price: { original: -1, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/54.webp',
        images: []
    },
    {
        id: 53,
        name: 'Kafka Bild 53',
        type: 'original',
        size: '60x50 cm (Rahmen)',
        price: { original: -1, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/53.webp',
        images: []
    },
    {
        id: 52,
        name: 'Kafka Bild 52',
        type: 'original',
        size: '60x50 cm (Rahmen)',
        price: { original: -1, copy: null },
        description: '',
        year: '1987',
        thumbnail: '/images/vernissage-2025/52.webp',
        images: []
    },
];

export default function Vernissage2025() {
    const router = useRouter();
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
    const [visibleArtworks, setVisibleArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const loadMoreArtworks = useCallback(() => {
        if (loading) return;

        setLoading(true);
        setTimeout(() => {
            const currentLength = visibleArtworks.length;
            const nextBatch = ARTWORKS.slice(currentLength, currentLength + 6);
            setVisibleArtworks(prev => [...prev, ...nextBatch]);
            setLoading(false);
        }, 500);
    }, [visibleArtworks.length, loading]);

    useEffect(() => {
        // Initial load
        setVisibleArtworks(ARTWORKS.slice(0, 6));
    }, []);

    // Handle shared artwork URL
    useEffect(() => {
        const { artwork } = router.query;
        if (artwork && typeof artwork === 'string') {
            const artworkId = parseInt(artwork);
            const sharedArtwork = ARTWORKS.find(art => art.id === artworkId);
            if (sharedArtwork) {
                setSelectedArtwork(sharedArtwork);
                // Update URL to remove the artwork parameter after opening modal
                router.replace('/vernissage-2025', undefined, { shallow: true });
            }
        }
    }, [router.query]);

    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && visibleArtworks.length < ARTWORKS.length) {
                    loadMoreArtworks();
                }
            },
            { threshold: 0.1 }
        );

        if (loadMoreRef.current) {
            observerRef.current.observe(loadMoreRef.current);
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [loadMoreArtworks, visibleArtworks.length]);

    const handlePurchaseClick = (artwork: Artwork, type: 'original' | 'copy') => {
        router.push(`/kontakt?artworkId=${artwork.id}&type=${type}`);
    };

    const handleShareArtwork = (artwork: Artwork, e: React.MouseEvent) => {
        e.stopPropagation();
        const shareUrl = `${window.location.origin}/vernissage-2025?artwork=${artwork.id}`;

        if (navigator.share) {
            navigator.share({
                title: `${artwork.name} - Ernst Jürgen Kratz`,
                text: `Entdecken Sie "${artwork.name}" aus der Vernissage 2025 von Ernst Jürgen Kratz`,
                url: shareUrl,
            }).catch(console.error);
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareUrl).then(() => {
                // You could add a toast notification here
                alert('Link wurde in die Zwischenablage kopiert!');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = shareUrl;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Link wurde in die Zwischenablage kopiert!');
            });
        }
    };

    return (
        <>
            <NextSeo
                title={selectedArtwork ? `${selectedArtwork.name} - Vernissage 2025` : "Vernissage 2025 - Ernst Jürgen Kratz"}
                description={selectedArtwork ? selectedArtwork.description : "Entdecken Sie die exklusive Kunstsammlung zur Vernissage am 3. Juli 2025. Rostbilder und Aquarelle von Ernst Jürgen Kratz - Originale und hochwertige Kopien verfügbar."}
                openGraph={{
                    title: selectedArtwork ? `${selectedArtwork.name} - Vernissage 2025` : 'Vernissage 2025 - Ernst Jürgen Kratz',
                    description: selectedArtwork ? selectedArtwork.description : 'Entdecken Sie die exklusive Kunstsammlung zur Vernissage am 3. Juli 2025. Rostbilder und Aquarelle von Ernst Jürgen Kratz.',
                    images: [{ url: selectedArtwork ? selectedArtwork.thumbnail : '/images/ernst_juergen_kratz_portrait.jpg' }],
                }}
            />

            <div className="flex flex-col items-center bg-[#EEEAE4] min-h-screen">
                {/* Header */}
                <div className="flex flex-col justify-start items-start space-y-4 font-normal max-w-7xl w-full px-6 py-8">
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
                        <h1 className="font-serif text-3xl md:text-5xl uppercase font-bold text-center text-black p-2">
                            Vernissage 2025
                        </h1>
                    </div>

                    {/* Event Info */}
                    <div className="w-full p-6 bg-[#E2DEDB] rounded-lg max-w-7xl">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <h3 className="font-serif text-xl md:text-2xl uppercase font-bold text-black mb-4">
                                    3. Juli 2025 - Exklusive Kunstausstellung
                                </h3>
                                <p className="font-sans text-md tracking-wide mb-4">
                                    Erleben Sie eine einzigartige Sammlung von Rostbildern und Aquarellen, die die künstlerische
                                    Entwicklung von Ernst Jürgen Kratz der letzten Jahre widerspiegelt. Diese digitale Galerie
                                    bietet Ihnen die Möglichkeit, die Werke der kommenden Vernissage bereits vorab zu entdecken
                                    und zu erwerben.
                                </p>
                                <p className="font-sans text-sm text-gray-700">
                                    Alle Werke sind als Originale oder hochwertige Kopien auf Aluminium verfügbar.
                                    Kontaktieren Sie uns direkt für Kaufanfragen und weitere Informationen.
                                </p>
                            </div>
                            <div className="md:w-64">
                                <Image
                                    src="/images/ernst_juergen_kratz_portrait.jpg"
                                    alt="Ernst Jürgen Kratz"
                                    width={256}
                                    height={256}
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="w-full max-w-7xl px-6 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleArtworks.map((artwork) => (
                            <div
                                key={artwork.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group"
                            >
                                <div
                                    className="w-full h-64 md:h-72 lg:h-80 relative cursor-pointer bg-gray-100 flex items-center justify-center"
                                    onClick={() => setSelectedArtwork(artwork)}
                                >
                                    <img
                                        src={artwork.thumbnail}
                                        alt={artwork.name}
                                        className="max-w-full max-h-full object-contain"
                                        loading="lazy"
                                    />
                                    {/* Share button overlay */}
                                    <button
                                        onClick={(e) => handleShareArtwork(artwork, e)}
                                        className="absolute top-2 right-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        title="Kunstwerk teilen"
                                    >
                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-serif text-lg font-bold text-black mb-2">
                                        {artwork.name}
                                    </h3>
                                    <p className="font-sans text-sm text-gray-600 mb-2">
                                        {artwork.year && `Jahr: ${artwork.year}`}
                                    </p>
                                    {
                                        artwork.size && (
                                            <p className="font-sans text-sm text-gray-600 mb-4">
                                                Größe: {artwork.size}
                                            </p>
                                        )
                                    }
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm">
                                            {artwork.price.original && (
                                                <span className="font-semibold text-black">
                                                    Original: {artwork.price.original}€
                                                </span>
                                            )}
                                            {artwork.price.copy && (
                                                <span className="block text-gray-600">
                                                    Kopie: {artwork.price.copy}€
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xs bg-[#E2DEDB] px-2 py-1 rounded">
                                            ID: {artwork.id}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Loading indicator */}
                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
                        </div>
                    )}

                    {/* Load more trigger */}
                    {visibleArtworks.length < ARTWORKS.length && (
                        <div ref={loadMoreRef} className="h-10"></div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {selectedArtwork && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto">
                        <div className="relative">
                            <div className="absolute top-4 right-4 z-10 flex space-x-2">
                                {/* Share button in modal */}
                                <button
                                    onClick={(e) => handleShareArtwork(selectedArtwork, e)}
                                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                                    title="Kunstwerk teilen"
                                >
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </button>
                                {/* Close button */}
                                <button
                                    onClick={() => setSelectedArtwork(null)}
                                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col lg:flex-row">
                                {/* Image Section */}
                                <div className="lg:w-1/2 xl:w-3/5 p-6 flex items-center justify-center bg-gray-50">
                                    <div className="w-full h-96 lg:h-[500px] xl:h-[600px] flex items-center justify-center">
                                        <img
                                            src={selectedArtwork.thumbnail}
                                            alt={selectedArtwork.name}
                                            className="max-w-full max-h-full object-contain shadow-lg"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2 xl:w-2/5 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-2">
                                                {selectedArtwork.name}
                                            </h2>
                                            <p className="text-gray-600 mb-2">
                                                Werk-ID: {selectedArtwork.id}
                                                {selectedArtwork.year && ` • Jahr: ${selectedArtwork.year}`}
                                            </p>
                                            <p className="text-gray-600 mb-4">
                                                Größe: {selectedArtwork.size}
                                            </p>
                                        </div>
                                    </div>

                                    {selectedArtwork.description && (
                                        <p className="font-sans text-md text-gray-800 mb-6 leading-relaxed">
                                            {selectedArtwork.description}
                                        </p>
                                    )}

                                    <div className="border-t pt-6">
                                        <h3 className="font-serif text-xl font-bold text-black mb-4">
                                            Kaufoptionen
                                        </h3>

                                        <div className="space-y-4">
                                            {selectedArtwork.price.original && selectedArtwork.price.original > 0 && (
                                                <div className="bg-[#EEEAE4] p-4 rounded-lg">
                                                    <h4 className="font-semibold text-lg mb-2">Original</h4>
                                                    <p className="text-2xl font-bold text-black mb-3">
                                                        {selectedArtwork.price.original}€
                                                    </p>
                                                    <p className="text-sm text-gray-600 mb-4">
                                                        Einzigartiges Originalwerk des Künstlers
                                                    </p>
                                                    <button
                                                        onClick={() => handlePurchaseClick(selectedArtwork, 'original')}
                                                        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                                                    >
                                                        Original anfragen
                                                    </button>
                                                </div>
                                            )}
                                            {selectedArtwork.price.copy === null && (
                                                <div className="bg-[#E2DEDB] p-4 rounded-lg">
                                                    <h4 className="font-semibold text-lg mb-2">Hochwertiger Druck</h4>
                                                    <p className="text-2xl font-bold text-black mb-3">
                                                        Preis Auf Anfrage
                                                    </p>
                                                    <p className="text-sm text-gray-600 mb-4">
                                                        Professioneller Druck auf Aluminium
                                                    </p>
                                                    <button
                                                        onClick={() => handlePurchaseClick(selectedArtwork, 'copy')}
                                                        className="w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                                                    >
                                                        Druck anfragen
                                                    </button>
                                                </div>
                                            )}

                                            {selectedArtwork.price.copy && selectedArtwork.price.copy > 0 && (
                                                <div className="bg-[#E2DEDB] p-4 rounded-lg">
                                                    <h4 className="font-semibold text-lg mb-2">Hochwertiger Druck</h4>
                                                    <p className="text-2xl font-bold text-black mb-3">
                                                        {selectedArtwork.price.copy}€
                                                    </p>
                                                    <p className="text-sm text-gray-600 mb-4">
                                                        Professioneller Druck auf Aluminium
                                                    </p>
                                                    <button
                                                        onClick={() => handlePurchaseClick(selectedArtwork, 'copy')}
                                                        className="w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                                                    >
                                                        Druck anfragen
                                                    </button>
                                                </div>
                                            )}

                                            {(!selectedArtwork.price.original || selectedArtwork.price.original <= 0) &&
                                                (!selectedArtwork.price.copy || selectedArtwork.price.copy <= 0) && (
                                                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                                                        <p className="text-gray-600 mb-4">
                                                            Preis auf Anfrage
                                                        </p>
                                                        <button
                                                            onClick={() => handlePurchaseClick(selectedArtwork, 'original')}
                                                            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                                                        >
                                                            Preisanfrage senden
                                                        </button>
                                                    </div>
                                                )}
                                        </div>

                                        <p className="text-xs text-gray-500 mt-4 text-center">
                                            Durch Klick auf einen Kaufbutton werden Sie zur Kontaktseite weitergeleitet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center p-4 space-x-4 bg-[#1C1918] w-full">
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