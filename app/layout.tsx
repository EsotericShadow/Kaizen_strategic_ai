import type { Metadata } from 'next';
import { Bricolage_Grotesque, Open_Sans, Inter } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './templatemo-topic-listing.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--title-font-family',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--body-font-family',
  display: 'swap',
});

const inter = Inter({
  weight: ['300'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--subtitle-font-family',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Consulting Northern BC | Kaizen Strategic AI | Terrace, Kitimat, Prince Rupert',
  description: 'Leading AI consulting and digital strategy services in Northern BC. AI automation, integration, and governance for businesses in Terrace, Kitimat, Prince Rupert, and Smithers. AI solutions that work for your business.',
  keywords: [
    'AI Northern BC',
    'Artificial Intelligence Northern BC',
    'AI consulting Northern BC',
    'AI Terrace BC',
    'AI Kitimat BC',
    'AI Prince Rupert BC',
    'AI Smithers BC',
    'AI automation Northern BC',
    'AI integration Northern BC',
    'AI services Northern BC',
    'machine learning Northern BC',
    'AI governance Northern BC',
    'digital strategy Northern BC',
    'AI consulting Terrace',
    'AI consulting Kitimat',
    'AI consulting Prince Rupert',
    'AI business solutions Northern BC',
    'AI implementation Northern BC',
    'automation services Northern BC',
    'AI tools Northern BC',
  ].join(', '),
  openGraph: {
    title: 'AI Consulting Northern BC | Kaizen Strategic AI',
    description: 'Leading AI consulting and digital strategy services in Northern BC. AI automation, integration, and governance for businesses.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${openSans.variable} ${inter.variable}`}>
      <body>
        {/* Navigation is handled per-route: NCI pages use their own layout */}
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

