import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Artwork, ARTWORKS } from '@/pages/vernissage-2025';

export default function Contact() {
    const router = useRouter();
    const { artworkId, type } = router.query;

    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
    const [selectedType, setSelectedType] = useState<'original' | 'copy'>('original');
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (artworkId && type) {
            const artwork = ARTWORKS.find(art => art.id === parseInt(artworkId as string));
            if (artwork) {
                setSelectedArtwork(artwork);
                setSelectedType(type as 'original' | 'copy');

                // Pre-fill message
                const price = type === 'original' ? artwork.price.original : artwork.price.copy;
                setFormData(prev => ({
                    ...prev,
                    message: ``
                }));
            }
        }
    }, [artworkId, type]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    artwork: selectedArtwork,
                    artworkType: selectedType
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <NextSeo
                title="Kontakt - Ernst Jürgen Kratz"
                description="Kontaktieren Sie Ernst Jürgen Kratz für Anfragen zu Kunstwerken aus der Vernissage 2025."
                openGraph={{
                    title: 'Kontakt - Ernst Jürgen Kratz',
                    description: 'Kontaktieren Sie Ernst Jürgen Kratz für Anfragen zu Kunstwerken aus der Vernissage 2025.',
                    images: [{ url: '/images/ernst_juergen_kratz_portrait.jpg' }],
                }}
            />

            <div className="flex flex-col items-center bg-[#EEEAE4] min-h-screen">
                {/* Header */}
                <div className="flex flex-col justify-start items-start space-y-4 font-normal max-w-5xl w-full px-6 py-8">
                    <h2 className="font-serif text-md md:text-xl uppercase font-normal text-center text-black p-2">
                        Ernst Jürgen Kratz
                    </h2>
                    <div className="flex justify-start items-center space-x-4">
                        <Link href="/vernissage-2025">
                            <Image
                                src={'/icons/arrow_down.svg'}
                                alt="arrow down"
                                width={48}
                                height={48}
                                className="rotate-90 p-2 hover:-translate-x-2 transition cursor-pointer"
                            />
                        </Link>
                        <h1 className="font-serif text-3xl md:text-5xl uppercase font-bold text-center text-black p-2">
                            Kontakt
                        </h1>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full max-w-5xl px-6 pb-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Artwork Display */}
                        {selectedArtwork && (
                            <div className="p-6 bg-[#E2DEDB] border-b">
                                <h3 className="font-serif text-xl font-bold text-black mb-4">
                                    Ihre Anfrage für:
                                </h3>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-64">
                                        <Image
                                            src={selectedArtwork.thumbnail}
                                            alt={selectedArtwork.name}
                                            width={256}
                                            height={256}
                                            className="rounded-lg shadow-md w-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-serif text-lg font-bold text-black mb-2">
                                            {selectedArtwork.name}
                                        </h4>
                                        <p className="text-gray-600 mb-2">
                                            Werk-ID: {selectedArtwork.id}
                                            {selectedArtwork.year && ` • Jahr: ${selectedArtwork.year}`}
                                        </p>
                                        <p className="text-sm text-gray-700 mb-3">
                                            {selectedArtwork.description}
                                        </p>
                                        <div className="bg-white p-3 rounded">
                                            <p className="font-semibold">
                                                {selectedType === 'original' ? 'Original' : 'Hochwertiger Druck'}
                                            </p>
                                            <p className="text-lg font-bold text-black">
                                                {selectedType === 'original'
                                                    ? selectedArtwork.price.original + '€'
                                                    : (selectedArtwork.price.copy === null) ? 'Preis auf Anfrage' : selectedArtwork.price.copy + '€'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact Form */}
                        <div className="p-6">
                            <h3 className="font-serif text-xl font-bold text-black mb-6">
                                {selectedArtwork ? 'Kaufanfrage senden' : 'Kontakt aufnehmen'}
                            </h3>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                    Vielen Dank für Ihre Anfrage! Wir werden uns schnellstmöglich bei Ihnen melden.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                                    Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            E-Mail-Adresse *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            placeholder="ihre.email@beispiel.de"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Telefonnummer
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                            placeholder="+49 123 456789"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nachricht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={8}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                        placeholder="Ihre Nachricht..."
                                    />
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">
                                        * Pflichtfelder
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600">
                                    Alternativ können Sie uns auch direkt kontaktieren:
                                </p>
                                <p className="text-sm text-gray-800 mt-2">
                                    E-Mail: <a href="mailto:robert.kratz@rjks.us" className="text-black hover:underline">robert.kratz@rjks.us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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