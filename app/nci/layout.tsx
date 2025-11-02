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
  title: 'AI Governance Northern BC | Northern Cascadia Institute | NC-AI Standards | ISO 42001',
  description: 'Northern Cascadia Institute of AI Governance develops practical AI governance standards for Northern BC. NC-AI-001 AI Risk Register Template aligned with ISO 42001:2023. Regional AI governance standards.',
  keywords: [
    'AI governance Northern BC',
    'NC-AI standards',
    'AI risk register template',
    'ISO 42001 Northern BC',
    'AI governance standards',
    'NC-AI-001',
    'Northern Cascadia Institute',
    'AI risk management Northern BC',
  ].join(', '),
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

