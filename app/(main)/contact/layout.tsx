import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact AI Consulting Northern BC | Kaizen Strategic AI | Terrace, BC',
  description: 'Contact Kaizen Strategic AI for AI consulting and digital strategy services in Northern BC. Located in Terrace, BC. Serving Terrace, Kitimat, Prince Rupert, and Smithers. Get in touch for AI automation, integration, and digital strategy.',
  keywords: [
    'contact AI consulting Northern BC',
    'AI consulting Terrace BC',
    'contact AI services',
    'AI consulting contact',
    'digital strategy contact',
    'Terrace BC AI consulting',
  ].join(', '),
  alternates: {
    canonical: 'https://kaizenstrategic.ai/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

