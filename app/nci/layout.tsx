import { Bricolage_Grotesque, Open_Sans, Inter } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../app/templatemo-topic-listing.css';
import '../../app/nci.css';
import { Metadata } from 'next';
import NCINavigation from '@/components/NCINavigation';
import NCIFooter from '@/components/NCIFooter';

export const metadata: Metadata = {
  title: 'AI Governance Northern BC | Northern Cascadia Institute | ISO 42001 Standards | NC-AI Frameworks',
  description: 'Northern Cascadia Institute of AI Governance develops practical AI governance standards and frameworks for Northern BC. ISO 42001:2023 aligned standards, AI risk management templates, and regional AI governance frameworks designed for smaller organizations and remote communities.',
  keywords: [
    'AI governance Northern BC',
    'AI governance standards',
    'ISO 42001',
    'ISO 42001:2023',
    'ISO 42001 Northern BC',
    'ISO/IEC 42001',
    'AI management system',
    'NC-AI standards',
    'NC-AI frameworks',
    'NC-AI-001',
    'Northern Cascadia Institute',
    'AI governance Northern BC',
    'regional AI governance',
    'AI governance frameworks',
    'AI risk management Northern BC',
    'AI risk register template',
    'AI compliance standards',
    'AI governance for small organizations',
    'AI governance remote communities',
    'Indigenous data sovereignty',
    'AI ethics Northern BC',
    'AI policy Northern BC',
    'AI standards development',
    'AI governance best practices',
    'small business AI governance',
    'AI risk assessment Northern BC',
    'AI regulatory compliance',
    'AI audit templates',
    'AI governance tools',
    'Terrace BC AI governance',
    'Northern BC AI standards',
  ].join(', '),
  openGraph: {
    title: 'AI Governance Northern BC | Northern Cascadia Institute | ISO 42001 Standards',
    description: 'Regional AI governance standards and frameworks for Northern BC. ISO 42001:2023 aligned AI risk management templates and standards.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci',
  },
};

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

export default function NCILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NCINavigation />
      <main>{children}</main>
      <NCIFooter />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}

