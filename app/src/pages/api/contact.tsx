import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Artist's email - change this to the actual email address
const ARTIST_EMAIL = 'robert.kratz@rjks.us';

interface ContactFormData {
    email: string;
    phone: string;
    message: string;
    artwork?: {
        id: number;
        name: string;
        year: string | null;
    };
    artworkType?: 'original' | 'copy';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, phone, message, artwork, artworkType }: ContactFormData = req.body;

    // Validate required fields
    if (!email || !message) {
        return res.status(400).json({ message: 'Email and message are required' });
    }

    try {
        // Create transporter (you'll need to configure this with actual SMTP settings)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email to the artist
        const artistEmailSubject = artwork
            ? `Neue Kaufanfrage: ${artwork.name} (${artworkType === 'original' ? 'Original' : 'Kopie'})`
            : 'Neue Kontaktanfrage über die Website';

        const artistEmailBody = `
Neue Kontaktanfrage über die Website:

Von: ${email}
Telefon: ${phone || 'Nicht angegeben'}

${artwork ? `
Angefragtes Kunstwerk:
- Titel: ${artwork.name}
- Werk-ID: ${artwork.id}
- Typ: ${artworkType === 'original' ? 'Original' : 'Kopie'}
- Jahr: ${artwork.year || 'Nicht angegeben'}
` : ''}

Nachricht:
${message}

---
Diese E-Mail wurde automatisch über das Kontaktformular auf kratz-art.de gesendet.
        `;

        await transporter.sendMail({
            from: process.env.SMTP_FROM || email,
            to: ARTIST_EMAIL,
            subject: artistEmailSubject,
            text: artistEmailBody,
        });

        // Confirmation email to the customer
        const customerEmailSubject = artwork
            ? `Bestätigung Ihrer Anfrage für "${artwork.name}"`
            : 'Bestätigung Ihrer Kontaktanfrage';

        const customerEmailBody = `
Sehr geehrte Damen und Herren,

vielen Dank für Ihre Anfrage über unsere Website. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.

${artwork ? `
Ihre Anfrage bezieht sich auf:
- Kunstwerk: ${artwork.name}
- Werk-ID: ${artwork.id}
- Typ: ${artworkType === 'original' ? 'Original' : 'Kopie'}
- Jahr: ${artwork.year || 'Nicht angegeben'}
` : ''}

Ihre Nachricht:
${message}

Bei Rückfragen können Sie uns jederzeit unter ${ARTIST_EMAIL} erreichen.

Mit freundlichen Grüßen
Ernst Jürgen Kratz

---
Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail.
        `;

        await transporter.sendMail({
            from: process.env.SMTP_FROM || ARTIST_EMAIL,
            to: email,
            subject: customerEmailSubject,
            text: customerEmailBody,
        });

        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
}